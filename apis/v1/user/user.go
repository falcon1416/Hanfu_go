package user

import (
	"time"
	"Hanfu/utils"
	"github.com/gin-gonic/gin"
	DB"Hanfu/models/user"
	ShopDB"Hanfu/models/shop"

	myjwt "Hanfu/middleware/jwt"
	jwtgo "github.com/dgrijalva/jwt-go"
)

func Register(c *gin.Context) {
	type JSONData struct {
		Openid string `form:"openid" binding:"required"`
		Name string `form:"name" binding:"required"`
		Avatar string `form:"avatar" binding:"required"`
		Sex int `form:"sex" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	//查询是否注册过
	var uInfo DB.User
	uInfo=DB.QueryByOpenid(data.Openid)
	if uInfo.Id==0{
		//没有登录
		saveData :=DB.User{
			Name:data.Name,
			Avatar:data.Avatar,
			Sex:data.Sex,
			Openid:data.Openid,
		}
		err :=saveData.Save();
		if err != nil{
			utils.RES(c, utils.ERROR_DATABASE_ADD, gin.H{})
			return 
		}

		uInfo=DB.QueryByOpenid(data.Openid)
	}

	//获取token
	token:=generateToken(c, uInfo)

	//组装输出的信息
	info :=gin.H{
		"token":token,
		"uid":uInfo.Id,
	}

	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":  info,
	})
}

func Login(c *gin.Context) {
	type JSONData struct {
		Openid string `form:"openid" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	//查询是否注册过
	var uInfo DB.User
	uInfo=DB.QueryByOpenid(data.Openid)
	if uInfo.Id==0{
		//没有注册过
		info :=gin.H{
			"uid":uInfo.Id,
		}

		utils.RES(c, utils.SUCCESS,  gin.H{
			"info":  info,
		})
		return;
	}

	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":  uInfo,
	})
	return;
}

func MyInfo(c *gin.Context) {
	type JSONData struct {
		Uid int `form:"uid" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	wait_count:=ShopDB.QueryMyCountByStatus(data.Uid,0)
	pass_count:=ShopDB.QueryMyCountByStatus(data.Uid,1)
	shopinfo :=gin.H{
		"wait_count":wait_count,
		"pass_count":pass_count,
	}

	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":  gin.H{
			"shop":shopinfo,
		},
	})
}


// 生成令牌
func generateToken(c *gin.Context, user DB.User) string{
	j := &myjwt.JWT{
			[]byte("newtrekWang"),
	}
	claims := myjwt.CustomClaims{
			user.Id,
			user.Name,
			user.Avatar,
			user.Sex,
			user.Openid,
			jwtgo.StandardClaims{
					NotBefore: int64(time.Now().Unix() - 1000), // 签名生效时间
					ExpiresAt: int64(time.Now().Unix() + 3600), // 过期时间 一小时
					Issuer:    "hanfu",                   //签名的发行者
			},
	}

	token, err := j.CreateToken(claims)

	if err != nil {
			return ""
	}

	return token;
}
