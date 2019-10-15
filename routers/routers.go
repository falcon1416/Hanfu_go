package routers

import (
	"os"
	"net/http"
	"fmt"
	"github.com/Hanfu/routers/v1"
	"github.com/gin-gonic/gin"

	"github.com/Hanfu/middleware"
)

// initRouter 初始化路由
func InitRouter() *gin.Engine {
	// gin.SetMode(gin.ReleaseMode) // 默认为 debug 模式，设置为发布模式

	router := gin.Default()

	//调用中间件
	router.Use(middleware.Cors())

	//建立路由
	setUpRouter(router)

	return router
}

// 设置路由
func setUpRouter(router *gin.Engine) {
	api := router.Group("/api/")
	{
		v1.RegisterRouter(api)
	}



	// 设置静态文件处理
	path,_ := os.Getwd()
	path=path+"/web/"
	fmt.Println(path)
	router.StaticFS("/web",  http.Dir(path))
}