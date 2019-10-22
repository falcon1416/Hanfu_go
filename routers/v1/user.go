package v1

import (
	_"fmt"
	"github.com/Hanfu/apis/v1/user"
	"github.com/gin-gonic/gin"
)

// 注册路由
func RegisterUserRouter(r *gin.RouterGroup) {
	r.POST("/register", user.Register)

	r.POST("/my-info", user.MyInfo)
}