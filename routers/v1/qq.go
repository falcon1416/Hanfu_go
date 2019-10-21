package v1

import (
	_"fmt"
	"github.com/Hanfu/apis/v1/qq"
	"github.com/gin-gonic/gin"
)

// 注册路由
func RegisterQQRouter(r *gin.RouterGroup) {
	r.POST("/code2Session", qq.Code2Session)
}