package file

import (
	_"fmt"
	"os"
	"Hanfu/utils"
	"github.com/gin-gonic/gin"
	"io"
)

func Upload(c *gin.Context) {
	file, header, err := c.Request.FormFile("file") 
	
  if err != nil {
    utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
  }
  filename := header.Filename
  out, err := os.Create("public/" + filename)
  if err != nil {
    utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
  }
  defer out.Close()
  _, err = io.Copy(out, file)
  if err != nil {
    utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
  }

	info:=gin.H{
		"filename":filename,
	}

	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":info,
	})

}