package v1

import (
	_"fmt"
	"Hanfu/apis/v1/file"
	"github.com/gin-gonic/gin"
)

// 注册路由
func RegisterFileRouter(r *gin.RouterGroup) {
	r.POST("/upload", file.Upload)
}