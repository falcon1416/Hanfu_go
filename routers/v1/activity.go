package v1

import (
	_"fmt"
	"Hanfu/apis/v1/activity"
	"github.com/gin-gonic/gin"
)

// 注册路由
func RegisterActivityRouter(r *gin.RouterGroup) {
	r.POST("/create", activity.Create)
	r.POST("/query", activity.Query)
	r.POST("/edit", activity.Edit)
	r.POST("/detail", activity.Detail)
	r.POST("/join", activity.Join)
	r.POST("/leave", activity.Leave)
}