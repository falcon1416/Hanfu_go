
package activity

import (
	"time"
	"github.com/gin-gonic/gin"
	
	DB"Hanfu/models/activity"
	"Hanfu/utils"
)

func Create(c *gin.Context){
	type JSONData struct {
		Title string `form:"title" binding:"required"`
		Desc string `form:"desc" binding:"required"`
		Address string `form:"address" binding:"required"`
		Lat float64 `form:"lat" binding:""`
		Lng float64 `form:"lng" binding:""`
		Startime string `form:"startime" binding:"required"`
		Uid int `form:"uid"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	dFormat:="2006-01-02 15:04"
	datetime,_:=time.ParseInLocation(dFormat,data.Startime,time.Local)
	saveData :=DB.Activity{
		Title:data.Title,
		Desc:data.Desc,
		Address:data.Address,
		Lng:data.Lng,
		Lat:data.Lat,
		StartTime:datetime,
		CreateUid:data.Uid,
	}
	err :=saveData.Save();
	if err != nil{
		utils.RES(c, utils.ERROR_DATABASE_ADD, gin.H{})
		return 
	}

	utils.RES(c, utils.SUCCESS,  gin.H{
		
	})
	return
}

func Edit(c *gin.Context){
	type JSONData struct {
		Id int `form:"id" binding:"required"`
		Title string `form:"title" binding:"required"`
		Desc string `form:"desc" binding:"required"`
		Address string `form:"address" binding:"required"`
		Lat float64 `form:"lat" binding:""`
		Lng float64 `form:"lng" binding:""`
		Startime string `form:"startime" binding:"required"`
		Uid int `form:"uid"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	dFormat:="2006-01-02 15:04"
	datetime,_:=time.ParseInLocation(dFormat,data.Startime,time.Local)
	saveData :=DB.Activity{
		Id:data.Id,
		Title:data.Title,
		Desc:data.Desc,
		Address:data.Address,
		Lng:data.Lng,
		Lat:data.Lat,
		StartTime:datetime,
		CreateUid:data.Uid,
	}
	err :=DB.Update(saveData);
	if err != nil{
		utils.RES(c, utils.ERROR_DATABASE_ADD, gin.H{})
		return 
	}

	utils.RES(c, utils.SUCCESS,  gin.H{
		
	})
	return
}

func Query(c *gin.Context) {
	type JSONData struct {
		Page int `form:"page" binding:"required"`
		Limit int `form:"limit" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	count:=DB.QueryCount();
	list:=DB.Query(data.Page,data.Limit)
	
	info:=gin.H{
		"total":count,
		"list":list,
	}
	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":info,
	})
	return
}

func Detail(c *gin.Context) {
	type JSONData struct {
		Id int `form:"id" binding:"required"`
		Uid int `form:"uid"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	info:=DB.Detail(data.Id)
	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":gin.H{
			"info":info,
		},
	})
	return
}	

func Join(c *gin.Context){
	type JSONData struct {
		Id int `form:"id" binding:"required"`
		Uid int `form:"uid" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	//删除旧的数据
	removeData :=DB.ActivityUser{
		ActivityId:data.Id,
		Uid:data.Uid,
	}
	removeData.RemoveUser()

	//添加信息
	saveData :=DB.ActivityUser{
		ActivityId:data.Id,
		Uid:data.Uid,
	}
	err :=saveData.AddUser();
	if err != nil{
		utils.RES(c, utils.ERROR_DATABASE_ADD, gin.H{})
		return 
	}

	utils.RES(c, utils.SUCCESS,  gin.H{
		
	})
	return
}

func Leave(c *gin.Context){
	type JSONData struct {
		Id int `form:"id" binding:"required"`
		Uid int `form:"uid" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	//删除旧的数据
	saveData :=DB.ActivityUser{
		ActivityId:data.Id,
		Uid:data.Uid,
	}
	saveData.RemoveUser()

	utils.RES(c, utils.SUCCESS,  gin.H{
		
	})
	return
}
