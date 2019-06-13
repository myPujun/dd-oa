import * as dd from 'dingtalk-jsapi'

//设置标题和导航栏右侧单个按钮
function setTitleRight({title = '',show = true,control = true,text = ''} = {}){
    return new Promise((resolve,reject) => {
        dd.biz.navigation.setTitle({
            title, //控制标题文本，空字符串表示显示默认文本
        });
        dd.biz.navigation.setRight({
            show,//控制按钮显示， true 显示， false 隐藏， 默认true
            control,//是否控制点击事件，true 控制，false 不控制
            text,//控制显示文本，空字符串表示显示默认文本
            onSuccess : function(result) {
                resolve(true)
            },
            onFail : function(err) {
                reject(false)
            }
        })
    })
    
}
export default {
    setTitleRight,
}