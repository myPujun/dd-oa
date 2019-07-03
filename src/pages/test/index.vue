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
            // pageSize:'999',
            // pageIndex:'1',
            // keywords:'',
            // inv_isConfirm:'0',
            // managerid:'1'
            c_id:'15'
        }
        axios.post('http://localhost/mettingsys/tools/dingtalk_ajax.ashx?action=customer_show',params).then(response => {
             console.log(response.data);
            // get body data
            // this.someData = response.body;
 
        }, response => {
            console.log("error");
        });
    }
}
</script>