package v1

import (
	_"fmt"
	"Hanfu/apis/v1/app"
	"github.com/gin-gonic/gin"
)

// 注册路由
func RegisterAppRouter(r *gin.RouterGroup) {
	r.POST("/code2Session", app.Code2Session)
}