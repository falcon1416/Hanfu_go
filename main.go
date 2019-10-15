package main
//go run server.go  -env=dev
//运行环境 dev,prod

import (
	"fmt"
	"github.com/Hanfu/conf"
	"github.com/Hanfu/routers"
	"github.com/Hanfu/database"
)

func main(){
	//连接数据库
	res:=database.Connect(conf.DBConfig.DB_USER,conf.DBConfig.DB_PASSWORD,conf.DBConfig.DB_HOST,conf.DBConfig.DB_NAME,conf.DBConfig.DB_PORT,conf.DBConfig.DB_LOG)
	if res == false{
		fmt.Println("数据库连接失败")
		return
	}
	defer database.DB.Close()
	//启动路由
	port:=conf.HttpConfig.Port
	if port == ""{
		return
	}
	r := routers.InitRouter()


	r.Run(":" + port)

	fmt.Printf("启动服务器:%s",port)
}
