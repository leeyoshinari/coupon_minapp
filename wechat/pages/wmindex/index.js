
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [],
        msg: {},
        activeTab: 0,
        notice: '领完券记得要收藏哦, 以便下次再领'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      const tabs = [
          {
          "title": "美团",
          "coupon": [
            {
              "name": "天天领美团外卖红包",
              "bannerPic": "/images/mt_wm.jpg",
              "minapp": {
                "appid": "wxde8ac0a21135c07d",
                "path": "index/pages/h5/h5?noshare=1&f_openId=0&weburl=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3DfGWWfr5zQw4l&f_userId=0&f_token=0"
              }
            },
            {
              "name": "美团外卖品质优惠",
              "bannerPic": "/images/mt_wmbd.jpg",
              "minapp": {
                "appid": "wxde8ac0a21135c07d",
                "path": "index/pages/h5/h5?f_userId=1&f_token=1&weburl=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3Daz-Wfr5zQw4l"
              }
            },
            {
              "name": "美团超市便利店红包",
              "bannerPic": "/images/mt_cs.jpg",
              "minapp": {
                "appid": "wxde8ac0a21135c07d",
                "path": "index/pages/h5/h5?f_userId=1&f_token=1&weburl=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3D1YaVfr5zQw4l"
              }
            },
            {
              "name": "天天领美团外卖邀请红包",
              "bannerPic": "/images/mt_wmyq.jpg",
              "minapp": {
                "appid": "wx2c348cf579062e56",
                "path": "outer_packages/r2xinvite/coupon/coupon?inviteCode=NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPgiKVFkKySnSA00a20DXuHWN35bDK4GwzLiQr-S8AKJnWaVV7ld65bP7EZaTJ0YKfD9LG5SpQS_BehbhptbXvXyg&lq_source=2"
              }
            },
            {
              "name": "美团电商购物红包",
              "bannerPic": "/images/mt_ds.jpg",
              "minapp": {
                "appid": "wxde8ac0a21135c07d",
                "path": "index/pages/h5/h5?f_userId=1&f_token=1&weburl=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D4%26c%3D2%26p%3DBBLofr5zQw4l"
              }
            },
            {
              "name": "吃喝爆款秒杀",
              "bannerPic": "/images/mt_ms.jpg",
              "minapp": {
                "appid": "wxc1273a38b94ba34a",
                "path": "/dynamic-page-without-nav/index?scene=seckill-page|ad-cps-caster&utmSource=310792&utmMedium=EF9961E315AE608F6C8A044821C2282C&activity=mAHnxM0ztR&mvpType=1u"
              }
            }]
          },
          {
            "title": "京东",
            "coupon": [
              {
                "name": "京东秒杀",
                "bannerPic": "https://img10.360buyimg.com/imagetools/jfs/t1/136434/12/1109/72108/5ed60812E64caf610/9d92c6c4bd412917.jpg",
                "minapp": {
                  "appid": "wx91d27dbf599dff74",
                  "path": "/pages/union/proxy/proxy?spreadUrl=https://u.jd.com/IuY6i7x"
                }
              },
              {
                "name": "京东自营热卖",
                "bannerPic": "https://img10.360buyimg.com/imagetools/jfs/t1/160315/37/3541/161972/600661f2Eb1a1101f/622b38d650d382a1.jpg",
                "minapp": {
                  "appid": "wx91d27dbf599dff74",
                  "path": "/pages/union/proxy/proxy?spreadUrl=https://u.jd.com/IiY0g57"
                }
              },
              {
                "name": "限时优惠页-30元会场通用优惠券",
                "bannerPic": "/images/jd_30_coupon.png",
                "minapp": {
                  "appid": "wx91d27dbf599dff74",
                  "path": "/pages/union/proxy/proxy?spreadUrl=https://u.jd.com/I8YSnKF"
                }
              },
              {
                "name": "盲盒抽奖 一天最多领取10次大额优惠券",
                "bannerPic": "",
                "minapp": {
                  "appid": "wx91d27dbf599dff74",
                  "path": "/pages/union/proxy/proxy?spreadUrl=https://u.jd.com/IbZEedy"
                }
              },
              {
                "name": "幸运转盘 一天最多领取10次大额优惠券",
                "bannerPic": "",
                "minapp": {
                  "appid": "wx91d27dbf599dff74",
                  "path": "/pages/union/proxy/proxy?spreadUrl=https://u.jd.com/IbZZTkx"
                }
              }]
          },
          {
            "title": "唯品会",
            "coupon": [
              {
                "name": "满99减5红包",
                "bannerPic": "http://ms.vpimg1.com/upload/actpics/cps/0/2021/12/29/108/doc6zll13zhz2t7.png",
                "minapp": {
                  "appid": "wxe9714e742209d35f",
                  "path": "pages/special/special?url=https%3A%2F%2Fmst.vip.com%2FyQGeLbXFGz3stkqZzDPqqg.php%3Fwapid%3Dmst_100090020%26_src%3Dmst%26extra_banner%3D115090020%26nova%3D1%26nova_platform%3D1%26mst_page_type%3Dguide%26activityId%3D11088&tra_from=adp%3AC01V4mpu062uzug2%3A%3Amig_code%3Ad619156f131a556c6640229727291160%3Aac014mpu060000cuw0t2ycs1zbpjiq45&chl_type=wxk"
                }
              }]
          },
          {
            "title": "拼多多",
            "coupon": [
              {
                "name": "百亿补贴",
                "bannerPic": "/images/pdd_subsidy.jpg",
                "minapp": {
                  "appid": "wxa918198f16869201",
                  "path": "/pages/web/web?specialUrl=1&src=https%3A%2F%2Fmobile.yangkeduo.com%2Fduo_transfer_channel.html%3FresourceType%3D39996%26pid%3D15084399_190061927%26_pdd_fs%3D1%26_pdd_tc%3Dffffff%26_pdd_sbs%3D1%26cpsSign%3DCE_230311_15084399_190061927_2e2bd0f8e048efcddad4d83a1fef0b4f%26_x_ddjb_act%3D%257B%2522st%2522%253A%25226%2522%257D%26duoduo_type%3D2"
                }
              },
              {
                "name": "限时秒杀",
                "bannerPic": "/images/pdd_seckill.jpg",
                "minapp": {
                  "appid": "wxa918198f16869201",
                  "path": "/pages/web/web?specialUrl=1&src=https%3A%2F%2Fmobile.yangkeduo.com%2Fduo_transfer_channel.html%3FresourceType%3D4%26pid%3D15084399_190061927%26cpsSign%3DCE_230311_15084399_190061927_5b675c06f277896430c344897f106c46%26_x_ddjb_act%3D%257B%2522st%2522%253A%25226%2522%257D%26duoduo_type%3D2"
                }
              },
              {
                "name": "1.9元包邮",
                "bannerPic": "/images/pdd_1.9.jpg",
                "minapp": {
                  "appid": "wxa918198f16869201",
                  "path": "/pages/web/web?specialUrl=1&src=https%3A%2F%2Fmobile.yangkeduo.com%2Fduo_nine_nine.html%3Fpid%3D15084399_190061927%26cpsSign%3DCM_230311_15084399_190061927_adafeaf778cf2108022db37818b77f21%26_x_ddjb_act%3D%257B%2522st%2522%253A%25223%2522%257D%26duoduo_type%3D2"
                }
              },
              {
                "name": "今日爆款",
                "bannerPic": "/images/pdd_hot_sell.jpg",
                "minapp": {
                  "appid": "wxa918198f16869201",
                  "path": "/pages/web/web?specialUrl=1&src=https%3A%2F%2Fmobile.yangkeduo.com%2Fduo_today_burst.html%3Fpid%3D15084399_190061927%26cpsSign%3DCM_230311_15084399_190061927_11e52052ed267c9690ba29f61645260f%26_x_ddjb_act%3D%257B%2522st%2522%253A%25223%2522%257D%26duoduo_type%3D2"
                }
              },
              {
                "name": "断码清仓买一送一",
                "bannerPic": "https://t16img.yangkeduo.com/pdd_oms/2022-10-18/c3b10f2938909afd76b1c36b384c8c59.jpg",
                "minapp": {
                  "appid": "wxa918198f16869201",
                  "path": "/pages/web/web?specialUrl=1&src=https%3A%2F%2Fmobile.yangkeduo.com%2Fpromotion_op.html%3Ftype%3D5%26id%3D188228%26pid%3D15084399_190061927%26_x_ddjb_dmn%3D%257B%2522cpsSign%2522%253A%2522CM_230311_15084399_190061927_265eb0ca5a20ae6aa49e683b6fe3e6a3%2522%252C%2522id%2522%253A%2522188228%2522%252C%2522type%2522%253A%25225%2522%257D%26cpsSign%3DCM_230311_15084399_190061927_265eb0ca5a20ae6aa49e683b6fe3e6a3%26_x_ddjb_act%3D%257B%2522st%2522%253A%25223%2522%257D%26duoduo_type%3D2"
                }
              },
              {
                "name": "品牌清仓",
                "bannerPic": "",
                "minapp": {
                  "appid": "wxa918198f16869201",
                  "path": "/pages/web/web?specialUrl=1&src=https%3A%2F%2Fmobile.yangkeduo.com%2Fduo_brand_sales.html%3Fpid%3D15084399_190061927%26cpsSign%3DCM_230311_15084399_190061927_22c6e9b52dc9a368f8d2d20199f037ca%26_x_ddjb_act%3D%257B%2522st%2522%253A%25223%2522%257D%26duoduo_type%3D2"
                }
              },
              {
                "name": "领券中心",
                "bannerPic": "",
                "minapp": {
                  "appid": "wxa918198f16869201",
                  "path": "/pages/web/web?specialUrl=1&src=https%3A%2F%2Fmobile.yangkeduo.com%2Fduo_transfer_channel.html%3FresourceType%3D40000%26pid%3D15084399_190061927%26cpsSign%3DCE_230311_15084399_190061927_46a4cd15467d70a54756c3d5c27350e4%26_x_ddjb_act%3D%257B%2522st%2522%253A%25226%2522%257D%26duoduo_type%3D2"
                }
              },
              {
                "name": "话费充值",
                "bannerPic": "",
                "minapp": {
                  "appid": "wxa918198f16869201",
                  "path": "/pages/web/web?specialUrl=1&src=https%3A%2F%2Fmobile.yangkeduo.com%2Fduo_transfer_channel.html%3FresourceType%3D39997%26pid%3D15084399_190061927%26cpsSign%3DCE_230311_15084399_190061927_af1bfb5417352ed35b3b6335b32810b4%26_x_ddjb_act%3D%257B%2522st%2522%253A%25226%2522%257D%26duoduo_type%3D2"
                }
              }]
          },
          {
            "title": "打车",
            "coupon": [
              {
                "name": "高德打车",
                "bannerPic": "/images/gd.jpg",
                "minapp": {
                  "appid": "wxbc0cf9b963bd3550",
                  "path": "shareActivity/basic_activity/page/BasicActivityPop/BasicActivityPop?page_id=4k1Khw5X8wy&gd_from=outside_coupon_&pid=mm_885550152_2238550031_111189250370"
                }
              }]
          }]/*,
          {
            "title": "淘票票",
            "coupon": [
              {
                "name": "淘票票",
                "bannerPic": "/images/tpp.jpeg",
                "minapp": {
                  "appid": "wx553b058aec244b78",
                  "path": "subPackages/gift-pack/index?sqm=dianying.wechat.taobaolianmeng.1.mm_885550152_2238550031_111189250370"
                }
              }]
            }
        ]*/

            let all = {
                title: '全部',
                coupon: []
            }

            tabs.forEach(item => {
                let c = item.coupon
                c.forEach(citem => {
                    all.coupon.push(citem)
                })
            })
            // tabs.unshift(all)
            this.setData({ tabs })
    },

    onChange(e) {
        const index = e.detail.index
        this.setData({ activeTab: parseInt(index) })
    },

    toCoupon(e) {
        const couponIdx = e.currentTarget.dataset.index
        const wxappinfo = this.data.tabs[this.data.activeTab].coupon[couponIdx].minapp

        wx.navigateToMiniProgram({
            appId: wxappinfo.appid,
            path: wxappinfo.path,
            success(res) {
                // 打开成功
                console.log('打开成功', res)
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: "这里有好多美团、京东、拼多多优惠券可以领取哦~",
            path: this.data.msg.path,
            imageUrl: this.data.msg.imageUrl,
        }
    },
    onShareTimeline: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: "这里有好多美团、京东、拼多多优惠券可以领取哦~",
            query: ""
        }
    }
})