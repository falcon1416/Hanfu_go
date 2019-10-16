package shop

import (
	"github.com/Hanfu/database"
	"github.com/gin-gonic/gin"
)

type Shop struct {
	Id int `json:"id",gorm:"primary_key;auto-increment"`
	Logo string `json:"logo"`
	Name string `json:"name"`
	ShopUrl string `json:"shop_url"`
	Shopkeeper string `json:"shopkeeper"`
	Type string `json:"type"`
	ImageUrl string `json:"image_url"`
	Praise string `json:"praise"`
	Describe string `json:"describe"`
	Service string `json:"service"`
	Logistics string `json:"logistics"`
	Province string `json:"province"`
	City string `json:"city"`
	Intro string `json:"intro"`
	IsTop int `json:"is_top"`
}

func parseList(list []Shop)[]gin.H{
	var out_list []gin.H
	for _,item  := range list {
		data:=gin.H{
			"id":item.Id,
			"image":item.ImageUrl,
			"url":item.ShopUrl,
		}
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
