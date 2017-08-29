import Qs from 'qs'
import {getHttpURL,getHost,json,getAPIDESKEY,getAPIDESIV} from './Config'
import {encrypt,decrypt} from './Utils'


var HTTP_POST=function(key, data, cb) {
    var buf = encrypt(data);
    data = {DATA:buf};
    var url = getHost() + getHttpURL(key);
    var token="";

    $.ajax({
        //请求类型，这里为POST
        type: 'POST',
        //你要请求的api的URL
        url: url,
        //是否使用缓存
        cache: false,
        //数据类型，这里我用的是json
        //dataType: "json",
        //必要的时候需要用JSON.stringify() 将JSON对象转换成字符串
        data: JSON.stringify(data), //data: {key:value},
        headers: { 'token': token },
        //请求成功的回调函数
        success: function(data) {
            var d = data.data;
            d = decrypt(d);
            var obj = eval('(' + d + ')');
            console.log(obj);
            if (obj.code == 200) {
                cb(obj.code, obj.message, obj.info);
            } else {
                $.toast(obj.message);
                cb(obj.code, obj.message, null)
            }
        },
    });
}


export {HTTP_POST}
