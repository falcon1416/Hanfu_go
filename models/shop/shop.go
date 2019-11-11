package shop

import (
	"time"
	"strings"
	"strconv"
	"Hanfu/database"
	"github.com/jinzhu/gorm"
	"github.com/gin-gonic/gin"
	SHOP"Hanfu/common/shop"
)

type Shop struct {
	Id int `json:"id",gorm:"primary_key;auto-increment"`
	Logo string `json:"logo"`
	Name string `json:"name"`
	Tag string `json:"tag"`
	Type string `json:"type"`
	Share string `json:"share"`
	Intro string `json:"intro"`
	Status int `json:"status",gorm:"default:0"`
	FormId string `json:"form_id"`
	Plantform string `json:"plantform"`
	IsTop int `json:"is_top",gorm:"default:0"`
	AuditDesc string `json:"audit_desc",gorm:"default:''"`
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
			"form_id":item.FormId,
			"name":item.Name,
			"logo":item.Logo,
			"intro":item.Intro,
			"tag":item.Tag,
			"share":item.Share,
			"type":item.Type,
			"status":item.Status,
			"status_name":status_name,
			"type_name":type_name,
			"create_uid":item.CreateUid,
		}
		return data;
}

func parseList(list []Shop)[]gin.H{
	var out_list =make([]gin.H,0)
	for _,item  := range list {
		data:=parseItem(item)
		out_list = append(out_list, data)
	}
	return out_list
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

func QueryByWhere(page,limit int,where []string) []gin.H{
	var table *gorm.DB
	table=database.DB.Table("shop")
	for _,w  := range where {
		table=table.Where(w)
	}

	var list []Shop
	table.Order("create_time desc").Offset((page-1)*limit).Limit(limit).Find(&list)
	return parseList(list)
}

func QueryByWhereCount(where []string) int{
	var table *gorm.DB
	table=database.DB.Table("shop")
	for _,w  := range where {
		table=table.Where(w)
	}

	var count int
	table.Count(&count)
	return count
}

func Detail(id int) gin.H{
	var s Shop
	database.DB.Table("shop").Where("id = ?",id).First(&s)
	return parseItem(s)
}

func QueryById(id int) Shop{
	var s Shop
	database.DB.Table("shop").Where("id = ?",id).First(&s)
	return s
}

func Update(data Shop) error {
	data.CreateTime=time.Now()
	return database.DB.Save(data).Error
}

func UpdateStatus(id,status int ,desc string) error {
	var s =Shop{Id:id}
	return database.DB.Model(&s).Updates(Shop{Status: status, AuditDesc: desc}).Error
}
