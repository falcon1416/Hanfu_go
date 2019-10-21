package user

import (
	"time"
	"github.com/Hanfu/database"
)

type User struct {
	Id int `json:"id",gorm:"primary_key;auto-increment"`
	Name string `json:"name"`
	Avatar string `json:"avatar"`
	Sex int `json:"sex"`
	Openid string `json:"openid"`
	CreateTime time.Time `json:"create_time"`
}

func QueryByOpenid(openid string) User{
	var u User
	database.DB.Where("openid = ?", openid).First(&u)
	return u
}

func (u *User) Save() error {
	u.CreateTime=time.Now()
	return database.DB.Create(u).Error
}