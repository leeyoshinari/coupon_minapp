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
    console.log(e.detail.value);
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
      path: "pages/union/proxy/proxy?spreadUrl=" + this.data.urlPath,
    });
  },
  pddsearch: function (e) {
    if (!this.data.urlPath || this.data.urlPath.trim() === "") {
      return;
    }
    wx.navigateToMiniProgram({
      appId: "wxa918198f16869201",
      path: this.data.urlPath,
    });
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