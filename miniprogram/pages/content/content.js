// pages/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'this is title',
    arr: ['a', 'b', 'c'],
    judge: false,
    num: 0,
    checked: true,

    screenWidth: 0
  },

  onChange(event) {
    this.setData({
      checked: event.detail
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const query = wx.createSelectorQuery()
    /**
     * @des 当有多个类型的调用 比如 selectViewport select 同时，可以在exec中回掉中获取
     */
    query.select('#screen').boundingClientRect((rect) => {
      console.log(rect)
      this.setData({
        screenWidth: rect.width
      })
    }).exec();

    /**
    * @des 直接获取屏幕宽度等信息
    */
    console.log(wx.getSystemInfoSync())
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
  onShareAppMessage: function () {

  },

  handleTap: function () {
    this.setData({
      num: this.data.num + 1
    })
  },

  showLoading() {
    wx.showLoading({
      title: '123',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  }
})