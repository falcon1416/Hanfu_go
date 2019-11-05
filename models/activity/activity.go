package activity

import (
	"time"
	"github.com/gin-gonic/gin"

	"Hanfu/database"
)

type Activity struct {
	Id int `json:"id",gorm:"primary_key;auto-increment"`
	Title string `json:"title"`
	Desc string `json:"desc"`
	StartTime  time.Time `json:"start_time"`
	Address string `json:"address"`
	Lat float64 `json:"lat"`
	Lng float64 `json:"lng"`
	CreateUid int `json:"create_uid",gorm:"default:0"`
	CreateTime time.Time `json:"create_time"`
}

func parseItem(item Activity)gin.H{

	data:=gin.H{
		"id":item.Id,
		"title":item.Title,
		"desc":item.Desc,
		"address":item.Address,
		"start_time":item.StartTime.Format("2006-01-02 15:04"),
		"create_uid":item.CreateUid,
	}
	return data;
}

func parseList(list []Activity)[]gin.H{
	var out_list =make([]gin.H,0)
	for _,item  := range list {
		data:=parseItem(item)
		out_list = append(out_list, data)
	}
	return out_list
}

func (u *Activity) Save() error {
	u.CreateTime=time.Now()
	return database.DB.Create(u).Error
}

func Update(data Activity) error {
	data.CreateTime=time.Now()
	return database.DB.Save(data).Error
}

func Query(page,limit int) []gin.H{
	var list []Activity
	today := time.Now().Format("2006-01-02")
	database.DB.Table("activity").Where("start_time > ?", today).Order("start_time").Offset((page-1)*limit).Limit(limit).Find(&list)
	return parseList(list)
}

func QueryCount() int{
	var count int
	today := time.Now().Format("2006-01-02")
	database.DB.Table("activity").Where("start_time > ?", today).Count(&count)
	return count
}

func Detail(id int)gin.H{
	var d Activity
	database.DB.Where("id = ?", id).First(&d)
	data:=parseItem(d)
	return data
}


