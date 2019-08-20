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
            url: 'https://ly.anjing.live/xcx_today_in_history', //仅为示例，并非真实的接口地址
            success (res) {
                console.log(res.data.data)

                //数据赋值
                self.setData({
                    list:res.data.data,
                    list_: res.data.data.content[Math.ceil(Math.random()*15)]
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
            url: '../chemistry/chemistry'
        })
    },
    touchStart(e) {
        // console.log(e)
        this.setData({
            "touch.x": e.changedTouches[0].clientX,
            "touch.y": e.changedTouches[0].clientY
        });
    },
    touchEnd(e) {
        let x = e.changedTouches[0].clientX;
        let y = e.changedTouches[0].clientY;
    },
    // const getTouchData = (endX, endY, startX, startY)=> {
    //   let turn = "";
    //   if (endX - startX > 50 && Math.abs(endY - startY) < 50) {      //右滑
    //     turn = "right";
    //   } else if (endX - startX < -50 && Math.abs(endY - startY) < 50) {   //左滑
    //     turn = "left";
    //   }
    //   return turn;
    // },
    getUserInfo: function() {
        console.log(88)
    },




})
