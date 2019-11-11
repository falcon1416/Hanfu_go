package shop

import (
	"fmt"
	"Hanfu/utils"
	"strconv"
	"github.com/zyx4843/gojson"
	"github.com/gin-gonic/gin"
	DB"Hanfu/models/shop"
	UserDB"Hanfu/models/user"
	"Hanfu/conf"
	"Hanfu/libs/http"
)

func Query(c *gin.Context) {
	type JSONData struct {
		Page int `form:"page" binding:"required"`
		Limit int `form:"limit" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	count:=DB.QueryCount();
	list:=DB.Query(data.Page,data.Limit)
	
	info:=gin.H{
		"total":count,
		"list":list,
	}
	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":info,
	})
	return
}

//查询广告
func QueryTop(c *gin.Context) {
	// list:=DB.QueryTop()
	// utils.RES(c, utils.SUCCESS,  gin.H{
	// 	"info": gin.H{"list":list},
	// })
	// return
}

//查询我的
func QueryMy(c *gin.Context) {
	type JSONData struct {
		Uid int `form:"uid" binding:"required"`
		Page int `form:"page" binding:"required"`
		Limit int `form:"limit" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	var wheres []string
	wheres = append(wheres, "create_uid = '"+strconv.Itoa(data.Uid)+"'")

	count:=DB.QueryByWhereCount(wheres);
	list:=DB.QueryByWhere(data.Page,data.Limit,wheres)

	info:=gin.H{
		"total":count,
		"list":list,
	}
	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":info,
	})
	return
}

//查询待审核的
func QueryAudit(c *gin.Context) {
	type JSONData struct {
		Uid int `form:"uid" binding:"required"`
		Page int `form:"page" binding:"required"`
		Limit int `form:"limit" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	var wheres []string
	wheres = append(wheres, "status = 0")

	count:=DB.QueryByWhereCount(wheres);
	list:=DB.QueryByWhere(data.Page,data.Limit,wheres)

	info:=gin.H{
		"total":count,
		"list":list,
	}
	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":info,
	})
	return
}

//添加
func Add(c *gin.Context) {
	type JSONData struct {
		Logo string `form:"logo" binding:"required"`
		Name string `form:"name" binding:"required"`
		Tag string `form:"tag" binding:"required"`
		Type string `form:"type" binding:"required"`
		Share string `form:"share" binding:"required"`
		Intro string `form:"intro" binding:"required"`
		Uid int `form:"uid" binding:"required"`
		Formid string `form:"formid" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	saveData :=DB.Shop{
		Name:data.Name,
		Logo:data.Logo,
		Tag:data.Tag,
		Type:data.Type,
		Share:data.Share,
		Intro:data.Intro,
		FormId:data.Formid,
		CreateUid:data.Uid,
	}
	err :=saveData.Save();
	if err != nil{
		utils.RES(c, utils.ERROR_DATABASE_ADD, gin.H{})
		return 
	}

	utils.RES(c, utils.SUCCESS,  gin.H{
		
	})
	return
}

//编辑
func Edit(c *gin.Context) {
	type JSONData struct {
		Id int `form:"id" binding:"required"`
		Logo string `form:"logo" binding:"required"`
		Name string `form:"name" binding:"required"`
		Tag string `form:"tag" binding:"required"`
		Type string `form:"type" binding:"required"`
		Share string `form:"share" binding:"required"`
		Intro string `form:"intro" binding:"required"`
		Uid int `form:"uid" binding:"required"`
		Formid string `form:"formid" binding:"required"`
		Plantform string `form:"plantform" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	saveData :=DB.Shop{
		Id:data.Id,
		Name:data.Name,
		Logo:data.Logo,
		Tag:data.Tag,
		Type:data.Type,
		Share:data.Share,
		Intro:data.Intro,
		FormId:data.Formid,
		Plantform:data.Plantform,
		CreateUid:data.Uid,
	}
	err :=DB.Update(saveData);
	if err != nil{
		utils.RES(c, utils.ERROR_DATABASE_ADD, gin.H{})
		return 
	}

	utils.RES(c, utils.SUCCESS,  gin.H{
		
	})
	return
}

//审核
func Audit(c *gin.Context) {
	type JSONData struct {
		Id int `form:"id" binding:"required"`
		Type int `form:"type" binding:"required"`
		Desc string `form:"desc"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	if data.Desc==""{
		if data.Type==1{
			data.Desc="审核通过"
		}else{
			data.Desc="审核不通过"
		}
	}

	info:=DB.QueryById(data.Id)
	formid:=info.FormId
	Plantform:=info.Plantform

	//更新数据库
	if err :=DB.UpdateStatus(data.Id,data.Type,data.Desc); err != nil {
		utils.RES(c, utils.ERROR_DATABASE_ADD, gin.H{
			"message": err.Error(),
		})
		return
	}

	//添加奖励
	value:=30  //获取积分
	extra:="{\"desc\":\"添加店铺成功\",\"type\":1,\"id\":\""+strconv.Itoa(data.Id)+"\"}"
	pointsData :=UserDB.UserPoints{
		Uid:info.CreateUid,
		Value:value,
		Extra:extra,
	}
	_ =pointsData.Add();
	message:="通过审核,对方将获得"+strconv.Itoa(value)+"积分"

	if formid==""{
		utils.RES(c, utils.SUCCESS,  gin.H{
			"info":	gin.H{"message":message},
		})
		return
	}

	uInfo:=UserDB.QueryByUID(info.CreateUid)

	//发送通知
	//1.获取token
	var url string
	if Plantform=="qq"{
		url="https://api.q.qq.com/api/getToken?grant_type=client_credential&appid="+conf.QQConfig.APP_ID+"&secret="+conf.QQConfig.APP_SECRET
	}else{
		url="https://api.weixin.qq.com/api/getToken?grant_type=client_credential&appid="+conf.WXConfig.APP_ID+"&secret="+conf.WXConfig.APP_SECRET
	}
	
	body:=http.Get(url)
	fmt.Println(body)
	token:=gojson.Json(body).Get("access_token").Tostring()
	//2.发送
	if Plantform=="qq"{
		url="https://api.q.qq.com/api/json/template/send?access_token="+token
	}else{
		url="https://api.weixin.qq.com/api/json/template/send?access_token="+token
	}
	postdata := make(map[string]interface{})
	postdata["access_token"]=token
	if Plantform=="qq"{
		postdata["appid"]=conf.QQConfig.APP_ID
	}else{
		postdata["appid"]=conf.WXConfig.APP_ID
	}
	postdata["touser"]=uInfo.Openid
	if Plantform=="qq"{
		postdata["template_id"]="bef2a7c21b095174c054e9323af38386"
	}else{
		postdata["template_id"]="zJSZv0sQ0Kdcs42nAbcsqZ9YILSwAvS9sdDvsBrC0hk"
	}
	postdata["form_id"]=formid
	//模板数据
	tempdata := make(map[string]interface{})

	tempdata["keyword1"]=gin.H{"value":info.Name}
	if data.Type==1{
		tempdata["keyword2"]=gin.H{"value":"通过"}
	}else{
		tempdata["keyword2"]=gin.H{"value":"不通过"}
	}
	tempdata["keyword3"]=gin.H{"value":data.Desc}

	postdata["data"]=tempdata

	postbody:=http.Post(url,postdata)
	fmt.Println(postbody)

	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":	gin.H{"message":message},
	})
}

func Detail(c *gin.Context) {
	type JSONData struct {
		Id int `form:"id" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	info:=DB.Detail(data.Id)
	
	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":info,
	})
	return
}
