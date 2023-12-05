//云开发初始化
wx.cloud.init({
  env: 'sujc666-2g3w561sc2025c24', 
  traceUser: true,
})


Page({

  data: {
          array1: ['否', '是'],
          objectArray: [
            {id: 0, name: '否'},
            {id: 1, name: '是'},
          ],
         
          array2: ['对外事务部', '办公室','人力资源部','社团发展部','社团事务部','媒体部','宣传部','新媒体工作室','数字媒体部','文艺拓展部'],
          objectArray: [
            {id: 0, name: '对外事务部'},
            {id: 1, name: '办公室'},
            {id: 2, name: '人力资源部'},
            {id: 3, name: '社团发展部'},
            {id: 4, name: '社团事务部'},
            {id: 5, name: '媒体部'},
            {id: 6, name: '宣传部'},
            {id: 7, name: '新媒体工作室'},
            {id: 8, name: '数字媒体部'},
            {id: 9, name: '文艺拓展部'},
          ],
         
      loginbtnstate:"true",
      guanli:0,
      bumen:0,
      xuehao:'',

  },
  bindguanliChange: function (e) {
    this.setData({
      guanli: e.detail.value
    })
  },
  bindbumenChange: function (e) {
    this.setData({
      bumen: e.detail.value
    })
  },

  studentid:function(e){
    var that=this
    var m=e.detail.value
    if(m!=' '&&(m.length>=10))
    {
      that.setData({
        xuehao:m
      })
      that.setData({
        loginbtnstate:false
      })
    }
    else{
      that.setData({
        loginbtnstate:true
      })
    }
  },
  
  onlogin:function(e){
    let guanli=this.data.guanli
    let bumen=this.data.bumen
    let xuehao=this.data.xuehao
    console.log('guanli',guanli)
    console.log('bumen',bumen)
    console.log('xuehao',xuehao)

    //登录
    wx. cloud. database(). collection('user'). where({
      xuehao:xuehao
    }).
    get({
      success(res){
        console. log("获取数据成功", res)
        let user = res. data[0]
        console. log("user", user)
        if(res.data.length==0){
        console. log('账号不存在')
        wx. showToast({
        icon:'none',
        title: '学号或部门不正确',
      })
        }
        if (xuehao == user. xuehao) {
        console. log('登录成功')
        wx. showToast({
        title: '登录成功',
        })
        }  
        else{
         console. log('登录失败')
         wx. showToast({
         icon:'none',
         title: '学号或部门不正确',
        })
        }
      }
      })
    }
  })
