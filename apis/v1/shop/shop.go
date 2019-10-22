package shop

import (
	"github.com/Hanfu/utils"
	"github.com/gin-gonic/gin"
	DB"github.com/Hanfu/models/shop"
)

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

//查询广告
func QueryTop(c *gin.Context) {
	list:=DB.QueryTop()
	utils.RES(c, utils.SUCCESS,  gin.H{
		"info": gin.H{"list":list},
	})
	return
}

//查询我的
func QueryMy(c *gin.Context) {
	type JSONData struct {
		Uid int `form:"uid" binding:"required"`
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

	count:=DB.QueryMyCount(data.Uid);
	list:=DB.QueryMy(data.Page,data.Limit,data.Uid)
	
	info:=gin.H{
		"total":count,
		"list":list,
	}
	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":info,
	})
	return
}

//添加
func Add(c *gin.Context) {
	type JSONData struct {
		Logo string `form:"logo" binding:"required"`
		Name string `form:"name" binding:"required"`
		Tag string `form:"tag" binding:"required"`
		Url string `form:"url" binding:"required"`
		Type string `form:"type" binding:"required"`
		Share string `form:"share" binding:"required"`
		Intro string `form:"intro" binding:"required"`
		Uid int `form:"uid" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	saveData :=DB.Shop{
		Name:data.Name,
		Logo:data.Logo,
		Tag:data.Tag,
		Url:data.Url,
		Type:data.Type,
		Share:data.Share,
		Intro:data.Intro,
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

//编辑
func Edit(c *gin.Context) {
	type JSONData struct {
		Id int `form:"id" binding:"required"`
		Logo string `form:"logo" binding:"required"`
		Name string `form:"name" binding:"required"`
		Tag string `form:"tag" binding:"required"`
		Url string `form:"url" binding:"required"`
		Type string `form:"type" binding:"required"`
		Share string `form:"share" binding:"required"`
		Intro string `form:"intro" binding:"required"`
		Uid int `form:"uid" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	saveData :=DB.Shop{
		Id:data.Id,
		Name:data.Name,
		Logo:data.Logo,
		Tag:data.Tag,
		Url:data.Url,
		Type:data.Type,
		Share:data.Share,
		Intro:data.Intro,
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

func Detail(c *gin.Context) {
	type JSONData struct {
		Id int `form:"id" binding:"required"`
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
		"info":info,
	})
	return
}
