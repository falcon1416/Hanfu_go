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
	}
}