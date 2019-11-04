
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
		CreateUid int `form:"create_uid"`
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
		CreateUid:data.CreateUid,
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
