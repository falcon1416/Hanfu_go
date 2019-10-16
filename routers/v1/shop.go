package v1

import (
	_"fmt"
	"github.com/Hanfu/apis/v1/shop"
	"github.com/gin-gonic/gin"
)

// 注册路由
func RegisterShopRouter(r *gin.RouterGroup) {
	r.POST("/queryTop", shop.QueryTop)
	r.POST("/query", shop.Query)
}