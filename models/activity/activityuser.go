package activity

import (
	"time"

	"Hanfu/database"
)

type ActivityUser struct {
	Id int `json:"id",gorm:"primary_key;auto-increment"`
	ActivityId int `json:"activity_id"`
	Uid int `json:"uid"`
	CreateTime time.Time `json:"create_time"`
}

func (data *ActivityUser) AddUser() error {
	data.CreateTime=time.Now()
	return database.DB.Create(data).Error
}

func (data *ActivityUser) RemoveUser() error{
	return database.DB.Where("activity_id = ? and uid=? ",data.ActivityId,data.Uid).Delete(&data).Error
}

func QueryByActivityID(id int) []ActivityUser{
	var list []ActivityUser
	database.DB.Table("activity_user").Where("activity_id = ? ",id).Find(&list)
	return list
}

func QueryJoinUser(id int) []ActivityUser{
	var list []ActivityUser
	database.DB.Table("activity_user").Where("activity_id = ? ",id).Order("create_time desc").Find(&list)
	return list
}
