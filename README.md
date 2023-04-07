# coupon_minapp ![](https://visitor-badge.glitch.me/badge?page_id=leeyoshinari)
领优惠券的微信小程序，支持京东、唯品会、拼多多的官方活动跳转，支持领取美团外卖优惠券。

由于微信云函数收费，所以这里就是纯静态页面展示。可自由扩展，支持有微信小程序的购物平台。

如需购买商品，请搭配[coupon](https://github.com/leeyoshinari/coupon)使用，用于获取商品的小程序购买链接。

## 使用方法

### 账号配置
`该小程序使用微信原生开发。`
* 注册好京东联盟、唯品会联盟、美团联盟、淘宝联盟和多多进宝
* 分别到各联盟里拿到推广链接

### 注册微信小程序
* 微信公众平台：微信公众平台
* 注册一个微信小程序。如果小程序不能发布，可以设置为体验版。

### 页面
![](https://github.com/leeyoshinari/coupon_minapp/blob/main/src/sku.JPG)
![](https://github.com/leeyoshinari/coupon_minapp/blob/main/src/activity.JPG)

如果需要购买商品，需请搭配[coupon](https://github.com/leeyoshinari/coupon)使用，把商品的小程序购买链接粘贴进来即可。

### 开发
代码非常的简单，就是列表，列表里面是跳转链接，点哪领哪个券

