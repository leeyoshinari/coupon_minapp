// pages/search/search.js
import env from "../../env";
Page({
  data: {
    urlPath: ""
  },
  bindInput: function(e) {
    this.setData({
      urlPath: e.detail.value
    });
  },
  clear: function(e) {
    this.setData({
      urlPath: ""
    });
  },
  jdsearch: function(e) {
    if (!this.data.urlPath || this.data.urlPath.trim() === "") {
      return;
    }
    wx.navigateToMiniProgram({
      appId: "wx91d27dbf599dff74",
      path: "pages/union/proxy/proxy?spreadUrl=" + encodeURIComponent(this.data.urlPath),
    });
  },
  pddsearch: function (e) {
    if (!this.data.urlPath || this.data.urlPath.trim() === "") {
      return;
    }
    if (this.data.urlPath.indexOf("https://") > -1) {
      wx.navigateToMiniProgram({
        appId: "wxa918198f16869201",
        path: "/pages/web/web?specialUrl=1&src=" + encodeURIComponent(this.data.urlPath),
      });
    } else {
      wx.navigateToMiniProgram({
        appId: "wxa918198f16869201",
        path: this.data.urlPath,
      });
    }
  },
  wphsearch: function (e) {
    if (!this.data.urlPath || this.data.urlPath.trim() === "") {
      return;
    }
    wx.navigateToMiniProgram({
      appId: "wxe9714e742209d35f",
      path: this.data.urlPath,
    });
  },
  mtsearch: function (e) {
    if (!this.data.urlPath || this.data.urlPath.trim() === "") {
      return;
    }
    wx.navigateToMiniProgram({
      appId: "wxde8ac0a21135c07d",
      path: "index/pages/h5/h5?noshare=1&f_openId=0&weburl=" + encodeURIComponent(this.data.urlPath),
    });
  },
  elesearch: function (e) {
    if (!this.data.urlPath || this.data.urlPath.trim() === "") {
      return;
    }
    wx.navigateToMiniProgram({
      appId: "wxece3a9a4c82f58c9",
      path: this.data.urlPath,
    });
  },
  ddsearch: function (e) {
    if (!this.data.urlPath || this.data.urlPath.trim() === "") {
      return;
    }
    wx.navigateToMiniProgram({
      appId: "wxaf35009675aa0b2a",
      path: this.data.urlPath,
    });
  },
  hjksearch: function (e) {
    if (!this.data.urlPath || this.data.urlPath.trim() === "") {
      return;
    }
    wx.navigateToMiniProgram({
      appId: "wx5f482af87ff127ca",
      path: this.data.urlPath,
    });
  }
})