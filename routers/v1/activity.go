package v1

import (
	_"fmt"
	"Hanfu/apis/v1/activity"
	"github.com/gin-gonic/gin"
)

// 注册路由
func RegisterActivityRouter(r *gin.RouterGroup) {
	r.POST("/create-activity", activity.Create)
}