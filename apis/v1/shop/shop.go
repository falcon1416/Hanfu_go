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