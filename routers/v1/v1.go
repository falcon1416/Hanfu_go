package v1

import (
	"github.com/gin-gonic/gin"
)

// RegisterRouter 注册路由
func RegisterRouter(router *gin.RouterGroup) {
	v1 := router.Group("/v1")
	{
		// 用户路由
		RegisterShopRouter(v1.Group("/shop"))
		RegisterAppRouter(v1.Group("/app"))
		RegisterUserRouter(v1.Group("/user"))
		RegisterFileRouter(v1.Group("/file"))
	}
}