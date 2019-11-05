package user

import (
	"time"
	"Hanfu/database"
)

type User struct {
	Id int `json:"id",gorm:"primary_key;auto-increment"`
	Name string `json:"name"`
	Avatar string `json:"avatar"`
	Sex int `json:"sex"`
	Openid string `json:"openid"`
	IsAdmin int `json:"is_admin",gorm:"default:0"`
	CreateTime time.Time `json:"create_time"`
}

func QueryByOpenid(openid string) User{
	var u User
	database.DB.Where("openid = ?", openid).First(&u)
	return u
}

func QueryByUID(uid int) User{
	var u User
	database.DB.Where("id = ?", uid).First(&u)
	return u
}

func (u *User) Save() error {
	u.CreateTime=time.Now()
	return database.DB.Create(u).Error
}

func QueryByIDs(ids []int) []User{
	var list []User
	database.DB.Table("user").Where("id in (?) ",ids).Find(&list)
	return list
}