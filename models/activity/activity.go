package shop

import (
	"time"
	"Hanfu/database"
)

type Activity struct {
	Id int `json:"id",gorm:"primary_key;auto-increment"`
	Title string `json:"title"`
	Desc string `json:"desc"`
	StartTime  time.Time `json:"start_time"`
	EndTime time.Time `json:"end_time"`
	Address string `json:"address"`
	Lat float64 `json:"lat"`
	Lng float64 `json:"lng"`
	CreateUid int `json:"create_uid",gorm:"default:0"`
	CreateTime time.Time `json:"create_time"`
}

func (u *Activity) Save() error {
	u.CreateTime=time.Now()
	return database.DB.Create(u).Error
}

