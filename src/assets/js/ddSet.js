import * as dd from 'dingtalk-jsapi'

async function showLoad(text = '使劲加载中..'){
    dd.device.notification.showPreloader({
        text, //loading显示的字符，空表示不显示文字
        showIcon: true, //是否显示icon，默认true
        onSuccess : function(result) {
            /*{}*/
        },
        onFail : function(err) {}
    })
}
async function hideLoad(){
    dd.device.notification.hidePreloader({
        onSuccess : function(result) {
            /*{}*/
        },
        onFail : function(err) {}
    })
}
//toast
async function setToast({icon = '',text = '',duration = 3,delay = 0} = {}){
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
}
//设置下拉控件
async function setChosen({source = [],selectedKey = ''} = {}){
    dd.biz.util.chosen({
        source,
        selectedKey, // 默认选中的key
        onSuccess : function(result) {
            return result
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
}
//日期时间
async function setDatepicker({format = 'yyyy-MM-dd',value = ''} = {}){
    dd.biz.util.datepicker({
        format,//注意：format只支持android系统规范，即2015-03-31格式为yyyy-MM-dd
        value, //默认显示日期
        onSuccess : function(result) {
            return result
            //onSuccess将在点击完成之后回调
            /*{
                value: "2015-02-10"
            }
            */
        },
    })
}
export default {
    setToast,
    setChosen,
    setDatepicker,
    showLoad,
    hideLoad
}