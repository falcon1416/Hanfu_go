package shop

import (
	"github.com/Hanfu/utils"
	"github.com/gin-gonic/gin"
	DB"github.com/Hanfu/models/shop"
)

//查询广告
func QueryTop(c *gin.Context) {
	list:=DB.QueryTop()
	utils.RES(c, utils.SUCCESS,  gin.H{
		"info": gin.H{"list":list},
	})
	return
}