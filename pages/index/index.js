//index.js
//获取应用实例
const app = getApp();
const list = require('../../data/listData');

// 根据id查找对应的项，没传入id或是没找到默认取list的第一项
function getItemData(id) {
  const defaultItem = list[0] || {};
  if (!id) {
    return defaultItem;
  }
  for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i];
    if (item.id === id) {
      console.log(`id=${id}`)
      return item;
    }
  }
  return defaultItem;
}
Page({
  data: {
    title: '了不起的非遗',
    images: ['../../images/1.jpg', '../../images/2.jpg']
  },
  onLoad: function(option) {
    console.log(option.id);
    const itemData = getItemData(option.id);
    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.src = itemData.videoUrl;
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    });
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    });
    this.setData({
      ...itemData,
      hideDetail: true
    })
  },
  showDetail: function(e) {
    this.setData({
      hideDetail: !this.data.hideDetail
    })
  },
  showList: function(e) {
    wx.navigateTo({
      url: '../list/list',
    })
  }
})