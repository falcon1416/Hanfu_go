var json={
    //赛事列表
    "LEAGUE_INFO":"/api/v8/leagueinfo/getOne",
    

    //上传地址
    "UPLOAD_URL":"/api/v1/image/update",
  }

var getHttpURL=function(key){
    return json[key];
}

var getHost=function(){
  //return 'http://server.aiqiumi.com';
  //return 'http://192.168.0.43:82';
  //return 'http://192.168.0.43:85';
  return 'http://nj.aiqiumi.cn';
}

var getAPIDESKEY=function(){
    return "636d82b614235f1bcfd08969";
}

var getAPIDESIV=function(){
    return "636d82b6";
}

export {getHttpURL,getHost,json,getAPIDESKEY,getAPIDESIV}
