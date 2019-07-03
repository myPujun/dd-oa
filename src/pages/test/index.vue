<template>
    <div class="">huaigui.y</div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'
export default {
mounted: function () {
        let params = {
                // pageIndex:1,
                // pageSize:999,
                // keywords:this.searchText,
                // managerid:1
                c_name:'123312',
                c_type:1,
                c_num:'12312312321',
                c_isUse:true,
                c_remarks:'asadsadas',
                c_id:77,
                managerid:14
        }
        axios.post('http://localhost/mettingsys/tools/dingtalk_ajax.ashx?action=customer_edit',params).then(response => {
             console.log(response.data);
            // get body data
            // this.someData = response.body;
 
        }, response => {
            console.log("error");
        });
    }
}
</script>