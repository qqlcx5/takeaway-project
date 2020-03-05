import ajax from "./ajax";
const BASE_URL = "/api";
// 根据经纬度获取位置详情
// 获取食品分类列表](# 2 获取食品分类列表)
// 根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
// 根据经纬度和关键字搜索商铺列表]
// 用户名密码登陆](# 6 用户名密码登陆)
// 发送短信验证码](#7发送短信验证码)
// 手机号验证码登陆](# 8 手机号验证码登陆)
// 根据会话获取用户信息](#9根据会话获取用户信息
// 用户登出](# 10 用户登出)
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`);
export const reqFoodCategorys = () => ajax(BASE_URL + "/index_category");
export const reqShops = (longitude, latitude) =>
  ajax(BASE_URL + "/shops", {
    longitude,
    latitude
  });
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) =>
  ajax(BASE_URL + "/search_shops", {
    geohash,
    keyword
  });
// 6、用户名密码登陆
export const reqPwdLogin = ({ name, pwd, captcha }) =>
  ajax(
    BASE_URL + "/login_pwd",
    {
      name,
      pwd,
      captcha
    },
    "POST"
  );

// 7、发送短信验证码
export const reqSendCode = phone =>
  ajax(BASE_URL + "/sendcode", {
    phone
  });
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) =>
  ajax(
    BASE_URL + "/login_sms",
    {
      phone,
      code
    },
    "POST"
  );
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + "/userinfo");
// 10、用户登出
export const reqLogout = () => ajax(BASE_URL + "/logout");
// 获取商家信息
export const reqShopGoods = () => ajax("/goods");
export const reqShopRatings = () => ajax("/ratings");
export const reqShopInfo = () => ajax("/info");
