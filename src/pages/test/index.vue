<template>
    <div class="">huaigui.y</div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'
export default {
mounted: function () {
        // GET /someUrl
        let params = {
            pageIndex:1,
            pageSize:999,
            keywords:'',
            rp_isconfirm:0,
            managerid:'1'
        }
        axios.post('http://192.168.0.116/MettingSys/tools/dingtalk_ajax.ashx?action=receipt_list',params).then(response => {
             console.log(response.data);
            // get body data
            // this.someData = response.body;
 
        }, response => {
            console.log("error");
        });
    }
}
</script>