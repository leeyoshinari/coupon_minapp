
Page({

    /**
     * 版本号按照年月日来的， 例如 2023-09-03 修改后上传，版本号就是 23.9.3
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
          // {
          //   "title": "美团",
          //   "coupon": [{
          //     "name": "天天领美团外卖红包",
          //     "bannerPic": "/images/mt_wm.jpg",
          //     "minapp": {
          //       "appid": "wxde8ac0a21135c07d",
          //       "path": "index/pages/h5/h5?noshare=1&f_openId=0&weburl=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3DfGWWfr5zQw4l&f_userId=0&f_token=0"
          //     }
          //   }]
          // },
          // {
          //   "title": "京东",
          //   "coupon": [{
          //     "name": "京东秒杀",
          //     "bannerPic": "https://img10.360buyimg.com/imagetools/jfs/t1/136434/12/1109/72108/5ed60812E64caf610/9d92c6c4bd412917.jpg",
          //     "minapp": {
          //       "appid": "wx91d27dbf599dff74",
          //       "path": "/pages/union/proxy/proxy?spreadUrl=https://u.jd.com/cQ7zVfJ"
          //     }
          //   }]
          // },
          // {
          //   "title": "唯品会",
          //   "coupon": [{
          //     "name": "三折疯抢",
          //     "bannerPic": "http://ms.vpimg1.com/upload/actpics/cps/0/2023/02/14/62/57wj0r365vqzjkp.jpg",
          //     "minapp": {
          //       "appid": "wxe9714e742209d35f",
          //       "path": "pages/index/index?$route=pages%2Fspecial%2Fspecial%3Furl%3Dhttps%253A%252F%252Fmst.vip.com%252FccRZQXfARbotI5wkHTUDDQ.php%253Fwapid%253Dmst_100042208%2526_src%253Dmst%2526extra_banner%253D115042208%2526nova%253D1%2526nova_platform%253D1%2526mst_page_type%253Dguide&tra_from=adp%3AC01V4mpu06pdygk0%3A%3Amig_code%3Ad619156f131a556c6640229727291160%3Aac014mpu060000ezd8ychguxmw90ly9l&chl_type=wxk"
          //     }
          //   }]
          // },
          // {
          //   "title": "拼多多",
          //   "coupon": [{
          //     "name": "百亿补贴",
          //     "bannerPic": "/images/pdd_subsidy.jpg",
          //     "minapp": {
          //       "appid": "wxa918198f16869201",
          //       "path": "/pages/web/web?specialUrl=1&src=https%3A%2F%2Fmobile.yangkeduo.com%2Fduo_transfer_channel.html%3FresourceType%3D39996%26pid%3D15084399_190061927%26_pdd_fs%3D1%26_pdd_tc%3Dffffff%26_pdd_sbs%3D1%26cpsSign%3DCE_230311_15084399_190061927_2e2bd0f8e048efcddad4d83a1fef0b4f%26_x_ddjb_act%3D%257B%2522st%2522%253A%25226%2522%257D%26duoduo_type%3D2"
          //     }
          //   }]
          // }
          {
            "title": "生活缴费",
            "coupon": [{
              "name": "折扣充值",
              "bannerPic": "/images/huafei.jpg",
              "minapp": {
                "appid": "wx5f482af87ff127ca",
                "path": "plugin-private://wx92eb6fb9f1218f37/pages/index/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&index=/pages/index/index"
              }
            },{
              "name": "特惠快递",
              "bannerPic": "/images/kuaidi.jpg",
              "minapp": {
                "appid": "wx5f482af87ff127ca",
                "path": "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=15"
              }
            }]
          }
        ];

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