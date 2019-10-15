package utils

import (
	"regexp"
)

//手机号校验
func PhoneValid(value string) bool {
	res,_:=regexp.MatchString(`^1\d{10}$`, value)
    return res
}