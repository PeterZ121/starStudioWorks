Mock.mock('/user/userinfo', 'get',{
    '姓名':"@cname()",//随机生成中文名字
    '出生':"@date()",//随机生成日期
    '地址':"@city(prefix)",//随机生成城市
    'ip': "@ip()",//生成ip
    '邮箱': "@email()"//随机生成email
})
