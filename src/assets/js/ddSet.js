import * as dd from 'dingtalk-jsapi'

//设置标题和导航栏右侧单个按钮
async function setTitleRight({title = '',show = true,control = true,text = ''} = {}){
    dd.biz.navigation.setTitle({
        title, //控制标题文本，空字符串表示显示默认文本
    });
    dd.biz.navigation.setRight({
        show,//控制按钮显示， true 显示， false 隐藏， 默认true
        control,//是否控制点击事件，true 控制，false 不控制
        text,//控制显示文本，空字符串表示显示默认文本
        onSuccess : function(result) {

        },
        onFail : function(err) {
        }
    })
}
//toast
function setToast({icon = '',text = '',duration = 3,delay = 0} = {}){
    return new Promise((resolve,reject) => {
        dd.device.notification.toast({
            icon, //icon样式，有success和error，默认为空
            text, //提示信息
            duration, //显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
            delay, //延迟显示，单位秒，默认0
            onSuccess : function(result) {
                /*{}*/
            },
            onFail : function(err) {}
        })
    })
}
//设置下拉控件
function setChosen({source = [],selectedKey = ''} = {}){
    return new Promise((resolve,reject) => {
        dd.biz.util.chosen({
            source,
            selectedKey, // 默认选中的key
            onSuccess : function(result) {
               resolve(result)
            },
            onFail : function(err) {
                dd.device.notification.toast({
                    icon: '', //icon样式，有success和error，默认为空
                    text: err, //提示信息
                    duration: 3, //显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
                    delay: 0, //延迟显示，单位秒，默认0
                })
           }
        })
    })
}
//日期时间
function setDatepicker({format = 'yyyy-MM-dd',value = ''} = {}){
    return new Promise((resolve,reject) => {
        dd.biz.util.datepicker({
            format,//注意：format只支持android系统规范，即2015-03-31格式为yyyy-MM-dd
            value, //默认显示日期
            onSuccess : function(result) {
                resolve(result)
                //onSuccess将在点击完成之后回调
                /*{
                    value: "2015-02-10"
                }
                */
            },
        })
    })
}
export default {
    setTitleRight,
    setToast,
    setChosen,
    setDatepicker,
}