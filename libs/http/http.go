package http

import (
	"fmt"
	"net/http"
	"io/ioutil"
	"bytes"
	"encoding/json"
)

func Get(url string) string{
	client := &http.Client{}
	resp, err := client.Get(url)
	if err != nil {
		return ""
	}
	defer resp.Body.Close()
	buf, err := ioutil.ReadAll(resp.Body)
	if err != nil {
			fmt.Println(err)
			return ""
	}
	body:=string(buf)

	return body
}

func Post(url string,data map[string]interface{}) string{
	bytesData, err := json.Marshal(data)
	if err != nil {
		fmt.Println(err.Error())
		return ""
	}
	reader := bytes.NewReader(bytesData)
	request, err := http.NewRequest("POST", url, reader)
	if err != nil {
		fmt.Println(err.Error())
		return ""
	}
	request.Header.Set("Content-Type", "application/json;charset=UTF-8")
	client := http.Client{}
	resp, err := client.Do(request)
	if err != nil {
			fmt.Println(err.Error())
			return ""
	}
	respBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return ""
	}
	body:=string(respBytes)
	return body
}