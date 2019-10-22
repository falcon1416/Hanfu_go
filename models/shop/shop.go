package shop

import (
	"time"
	"strings"
	"strconv"
	"github.com/Hanfu/database"
	"github.com/gin-gonic/gin"
	SHOP"github.com/Hanfu/common/shop"
)

type Shop struct {
	Id int `json:"id",gorm:"primary_key;auto-increment"`
	Logo string `json:"logo"`
	Name string `json:"name"`
	Tag string `json:"tag"`
	Url string `json:"url"`
	Type string `json:"type"`
	Share string `json:"share"`
	Intro string `json:"intro"`
	Status int `json:"status",gorm:"default:0"`
	IsTop int `json:"is_top",gorm:"default:0"`
	CreateUid int `json:"create_uid",gorm:"default:0"`
	CreateTime time.Time `json:"create_time"`
}

func (u *Shop) Save() error {
	u.CreateTime=time.Now()
	return database.DB.Create(u).Error
}

func parseItem(item Shop)gin.H{
	type_list:=strings.Split(item.Type,",")
		var type_name string
		for _,t := range type_list{
			value,_ :=  strconv.Atoi(t)
			type_name=type_name+SHOP.GetShopType(value)+" "
		}

		status_name:="待审核"
		if item.Status==1{
			status_name="通过审核"
		}

		data:=gin.H{
			"id":item.Id,
			"name":item.Name,
			"logo":item.Logo,
			"intro":item.Intro,
			"tag":item.Tag,
			"url":item.Url,
			"share":item.Share,
			"type":item.Type,
			"status":item.Status,
			"status_name":status_name,
			"type_name":type_name,
		}
		return data;
}

func parseList(list []Shop)[]gin.H{
	var out_list []gin.H
	for _,item  := range list {
		data:=parseItem(item)
		out_list = append(out_list, data)
	}
	return out_list
}

func QueryTop() []gin.H{
	var list []Shop
	database.DB.Table("shop").Where("is_top > 0").Order("is_top desc").Find(&list)

	return parseList(list)
}

func Query(page,limit int) []gin.H{
	var list []Shop
	database.DB.Table("shop").Offset((page-1)*limit).Limit(limit).Find(&list)
	return parseList(list)
}

func QueryCount() int{
	var count int
	database.DB.Table("shop").Count(&count)
	return count
}

func QueryMy(page,limit,uid int) []gin.H{
	var list []Shop
	database.DB.Table("shop").Where("create_uid = ?",uid).Offset((page-1)*limit).Limit(limit).Find(&list)
	return parseList(list)
}

func QueryMyCount(uid int) int{
	var count int
	database.DB.Table("shop").Where("create_uid = ?",uid).Count(&count)
	return count
}

func Detail(id int) gin.H{
	var s Shop
	database.DB.Table("shop").Where("id = ?",id).First(&s)
	return parseItem(s)
}

func Update(data Shop) error {
	data.CreateTime=time.Now()
	return database.DB.Save(data).Error
}