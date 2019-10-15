package database

import(
	"fmt"
	"github.com/jinzhu/gorm"
    _ "github.com/go-sql-driver/mysql"
)

var DB *gorm.DB

//链接数据库
func Connect(user, password,host, db, port,log string) bool{
	var err error
	connArgs := fmt.Sprintf("%s:%s@(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",  user,password, host, port,db )
    DB, err = gorm.Open("mysql", connArgs)
    if err != nil {
		fmt.Sprintln(err)
		return false
	}
	
	DB.SingularTable(true)
	isLog:=false
	if log=="1"{
		isLog=true
	}
	DB.LogMode(isLog)

	return true
}