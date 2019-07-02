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
<<<<<<< HEAD
            // pageSize:'999',
            // pageIndex:'1',
            // keywords:'',
            // inv_isConfirm:'0',
            // managerid:'1'
            c_id:'15'
        }
        axios.post('http://localhost/mettingsys/tools/dingtalk_ajax.ashx?action=customer_show',params).then(response => {
=======
            pageIndex:1,
            pageSize:999,
            keywords:'',
            rp_isconfirm:0,
            managerid:'1'
        }
        axios.post('http://192.168.0.116/MettingSys/tools/dingtalk_ajax.ashx?action=receipt_list',params).then(response => {
>>>>>>> fc4a467b5a983b0ed6a2268a0a55d2b12a25724d
             console.log(response.data);
            // get body data
            // this.someData = response.body;
 
        }, response => {
            console.log("error");
        });
    }
}
</script>