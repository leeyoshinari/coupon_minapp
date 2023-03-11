
//app.js

App({
  onLaunch: function () {
    if (wx.canIUse("getUpdateManager")) {
      const updateManager = wx.getUpdateManager();
      //updateManager.onCheckForUpdate(function(res) {});
      updateManager.onUpdateReady(function() {
        wx.showModal({
          title: '已经有新版本了哟~',
          content: '新版本已经准备好，请确认重启小程序',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              updateManager.applyUpdate()
            }
          }
        });
      });
      updateManager.onUpdateFailed(function() {
        // 新的版本下载失败
        wx.showModal({
          title: "新版本更新失败",
          content: "新版本已经上线啦~，请您删除当前小程序，重新搜索“领券实惠购”打开哟~",
          showCancel: false,
          success(res) {
            wx.setClipboardData({
              data: "领券实惠购",
              success (res) {
                wx.getClipboardData({
                  success (res) {
                    wx.showToast({
                      title: '复制“领券实惠购”成功，请您删除当前小程序，重新搜索打开哟~',
                      icon: 'none',
                    })
                  },
                  fail (res) {
                    wx.showToast({
                      title: '复制失败，请在搜一搜里输入“领券实惠购”，并重新打开',
                      icon: 'none',
                    })
                  },
                })
              }
            });
          }
        });
      });
    } else {
      wx.showModal({
       title: '提示',
       content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试',
       showCancel: false
      })
     }

    this.globalData = {}
  }
})