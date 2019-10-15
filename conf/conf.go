package conf

import (
	"flag"
	"fmt"
	"gopkg.in/ini.v1"
)

//服务器信息
var HttpConfig =&HTTP{}
type HTTP struct{
	Port string
}

//数据库信息
var DBConfig=&DB{}
type DB struct{
	DB_HOST string
	DB_PORT string
	DB_USER string
	DB_PASSWORD string
	DB_NAME string
	DB_LOG string
}

var(
	env= flag.String("env", "", "")
)

func init(){
	flag.Parse()

	if *env == ""{
		fmt.Println("请输入运行环境,-env=dev或者 -env=prod")
		return
	}

	fmt.Printf("运行环境:%s\n",*env)
	//配置文件地址
	conf_path:="conf/"+*env+".ini"

	Cfg, _ := ini.Load(conf_path)
	
	//服务器
	port,_:=Cfg.Section("server").GetKey("HTTP_PORT")
	HttpConfig.Port=port.String()

	//数据库
	dbhost,_:=Cfg.Section("mysql").GetKey("DB_HOST")
	DBConfig.DB_HOST=dbhost.String()
	dbport,_:=Cfg.Section("mysql").GetKey("DB_PORT")
	DBConfig.DB_PORT=dbport.String()
	dbuser,_:=Cfg.Section("mysql").GetKey("DB_USER")
	DBConfig.DB_USER=dbuser.String()
	dbpassword,_:=Cfg.Section("mysql").GetKey("DB_PASSWORD")
	DBConfig.DB_PASSWORD=dbpassword.String()
	dbname,_:=Cfg.Section("mysql").GetKey("DB_NAME")
	DBConfig.DB_NAME=dbname.String()
	dblog,_:=Cfg.Section("mysql").GetKey("DB_LOG")
	DBConfig.DB_LOG=dblog.String()
}
