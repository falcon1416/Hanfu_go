package shop

import (
	"strconv"
	"github.com/Hanfu/utils"
	"github.com/gin-gonic/gin"
	DB"github.com/Hanfu/models/shop"
)

func Query(c *gin.Context) {
	page,_ :=  strconv.Atoi(c.DefaultPostForm("page","1"))
	limit,_ :=  strconv.Atoi(c.DefaultPostForm("limit","20"))

	count:=DB.QueryCount();
	list:=DB.Query(page,limit)
	
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