package qq

import (
	"fmt"
	"encoding/json"
	"github.com/Hanfu/utils"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"net/http"
)

func Code2Session(c *gin.Context) {
	type JSONData struct {
		Code string `form:"Code" binding:"required"`
	}
	var data JSONData
	if err := c.ShouldBind(&data); err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	code:=data.Code
	// fmt.Println(code)

	//生成client 参数为默认
	
	url:="https://api.q.qq.com/sns/jscode2session?appid=1109969126&secret=EzlXC4le8DzHXJ6n&js_code="+code+"&grant_type=authorization_code"
	// fmt.Println(url)
	resp, err := http.Get(url)
	if err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}
	defer  resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		utils.RES(c, utils.INVALID_PARAMS, gin.H{
			"message": err.Error(),
		})
		return
	}

	// fmt.Println(string(body))

	myMap:=make(map[string]string)
	json.Unmarshal([]byte(body),&myMap)
	fmt.Println(myMap["openid"])
	
	info:=gin.H{
		"openid":myMap["openid"],
	}

	utils.RES(c, utils.SUCCESS,  gin.H{
		"info":info,
	})
}