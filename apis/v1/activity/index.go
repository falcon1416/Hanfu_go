
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
		Lat float64 `form:"lat" binding:"required"`
		Lng float64 `form:"lng" binding:"required"`
		StartTime time.Time `form:"start_time" binding:"required" time_format:"yyyy-MM-dd"`
		EndTime time.Time `form:"end_time" binding:"required" time_format:"yyyy-MM-dd"`
		CreateUid int `json:"create_uid",gorm:"default:0"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	saveData :=DB.Activity{
		Title:data.Title,
		Desc:data.Desc,
		Address:data.Address,
		Lng:data.Lng,
		Lat:data.Lat,
		StartTime:data.StartTime,
		EndTime:data.EndTime,
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