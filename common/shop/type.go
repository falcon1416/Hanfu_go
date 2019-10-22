package shop

const (
	LEVEL_1      =  1
	LEVEL_2      =  2
	LEVEL_3      =  3
	LEVEL_4      =  4
	LEVEL_5      =  5
	LEVEL_6      =  6
)

var shopTypeFlags = map[int]string{
	LEVEL_1:                        "品牌商家",
	LEVEL_2:                        "白菜商家",
	LEVEL_3:                        "沧海遗珠",
	LEVEL_4:                        "正品新店",
	LEVEL_5:                        "定制商家",
	LEVEL_6:                        "上新店铺",
}

func GetShopType(value int) string{
	name,_ :=shopTypeFlags[value]
	return name
}