//logs.js
const util = require('../../utils/util.js')
const list = require('../../data/listData');
Page({
  data: {
    list
  },
  onLoad: function() {
    this.setData({

    })
  },
  itemTabEvent: function(e) {
    console.log(e);
    const id = e.currentTarget.dataset.id;
    wx.reLaunch({
      url: `../index/index?id=${id}`,
    });
  }
})