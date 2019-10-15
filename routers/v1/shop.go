package v1

import (
	_"fmt"
	"github.com/Hanfu/apis/v1/shop"
	"github.com/gin-gonic/gin"
	
)

// 注册路由
func RegisterShopRouter(r *gin.RouterGroup) {
	// 注册
	r.POST("/queryTop", shop.QueryTop)
}