// pages/home/home.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal1: false,
    isLogin: true,
  },

  goSearch() {
    wx.navigateTo({
      url: '/pages/searchAndLend/searchAndLend',
    })
  },

  goSchedule() {
    wx.navigateTo({
      url: '/pages/schedule/schedule',
    })
  },

  goAdd(){
    wx.navigateTo({
      url: '/pages/add/add',
    })
  },

    /**
   * 小窗口展示和取消展示
   */
  showModal: function (e) {
    console.log("1ws")
    this.setData({
      showModal1: true,
      // currentCardIndex: cardIndex,
    });
  },

  hideModal: function () {
    this.setData({
      showModal1: false,
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      isLogin: app.globalData.isLogin
    })
    console.log(app.globalData.isLogin)
    if (!this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})