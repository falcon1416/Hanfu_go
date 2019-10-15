package shop

import (
	"github.com/Hanfu/database"
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

func QueryTop() []Shop{
	var list []Shop
	database.DB.Table("shop").Where("is_top > 0").Order("is_top desc").Find(&list)

	return list
}
