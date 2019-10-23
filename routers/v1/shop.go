package v1

import (
	_"fmt"
	"Hanfu/apis/v1/shop"
	"github.com/gin-gonic/gin"
)

// 注册路由
func RegisterShopRouter(r *gin.RouterGroup) {
	r.POST("/queryTop", shop.QueryTop)
	r.POST("/query", shop.Query)

	r.POST("/query-my", shop.QueryMy)
	r.POST("/query-audit", shop.QueryAudit)

	r.POST("/add", shop.Add)
	r.POST("/edit", shop.Edit)
	r.POST("/audit", shop.Audit)
	r.POST("/detail", shop.Detail)
}