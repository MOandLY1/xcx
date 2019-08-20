//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        list:{},
        author:''
    },

    onLoad: function () {       //进入页面自动执行的方法
        var self = this

        //请求网络
        wx.request({
            url: 'https://ly.anjing.live/xcx_zhihu', //仅为示例，并非真实的接口地址
            success (res) {
                console.log(res.data.data.top_stories[0])

                //数据赋值
                self.setData({
                    list: res.data.data.top_stories[Math.ceil(Math.random()*5)]
                })
            }
        })
    },


    //事件处理函数
    bindViewTap: function() {         //跳转页面函数
        wx.navigateTo({
            url: '../logs/logs'
        })
    },

    z:function(){
        wx.navigateTo({
            url: '../today_in_history/today_in_history'
        })
    },

    getUserInfo: function() {
        console.log(88)
    },




})