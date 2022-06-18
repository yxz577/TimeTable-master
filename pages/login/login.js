// pages/login/login.js
const { postData } = require("../../utils/data");
var pastData = require("../../utils/data");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: "",
    password: "",
    result: -1
  },

  accountInput(e) {
    this.setData({
      account: e.detail.value
    })
  },

  pwdInput(e) {
    this.setData({
      password: e.detail.value
    })
  },

  /**
   * form 表单 保存、重置操作
   */
  loginTest(e) {
    console.log("test-login!")
    //console.log(this.data.account)
    //console.log(this.data.password)
    var that = this
    wx.showLoading({
      title: '测试中',
    })
    wx.request({
      //请求接口的地址
      url: "http://dcac.top:5000/test-login",
      data: {
        username: this.data.account,
        password: this.data.password,
      },
      header: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        wx.hideLoading();
        if(res.data.code==0){
          wx.showModal({
            title:'成功',
            content:'账号和密码正确！',
            showCancel:false,
          })
          wx.setStorageSync('login_success', true)
        }else if(res.data.code==1){
          wx.setStorageSync('login_success', false)
          wx.showModal({
            title:'失败',
            content:'账号或密码错误！',
            showCancel:false,
          });
          console.log(e);
        }
      },
      fail: function (err) { //请求失败
        console.log(err);
        wx.setStorageSync('login_success', false)
        wx.hideLoading();
        wx.showModal({
          title: '失败',
          content:'网络错误！'
        })
      },
      complete: function () {} //请求完成后执行的函数
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.setStorageSync('username', this.data.account)
    wx.setStorageSync('password', this.data.password)

    wx.request({
      url: "http://dcac.top:5000/test-login",
      data: {
        username: this.data.account,
        password: this.data.password,
      },
      header: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        if(res.data.code==0){
          wx.setStorageSync('login_success', true)
        }else if(res.data.code==1){
          wx.setStorageSync('login_success', false)
        }
      },
      fail: function (err) { wx.setStorageSync('login_success', false)},
      complete: function () {} //请求完成后执行的函数
    })

    if (wx.getStorageSync('login_success')) {
      pastData.getTimeTable()
      pastData.getTermStartDay()
    }
    
    wx.showModal({
      title:'成功',
      content:'保存学号与密码成功！',
      showCancel:false,
    })
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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