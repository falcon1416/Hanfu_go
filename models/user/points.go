package user

import (
	"time"
	"Hanfu/database"
)

type UserPoints struct {
	Id int `json:"id",gorm:"primary_key;auto-increment"`
	Uid int `json:"uid"`
	Value int `json:"value"`
	Extra string `json:"extra"`
	CreateTime time.Time `json:"create_time"`
}


func (u *UserPoints) Add() error {
	u.CreateTime=time.Now()
	return database.DB.Create(u).Error
}