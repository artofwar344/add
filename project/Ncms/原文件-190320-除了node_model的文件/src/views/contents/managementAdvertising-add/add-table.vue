<template>
  <div> 
    <el-table :data="userData" stripe style="width: 100%;text-algin:center;" >
      <el-table-column label="ID"  width="80">
        <template slot-scope="scope">
          <span v-text="scope.row.id"></span>
        </template>
      </el-table-column>
      <el-table-column label="标题" >
        <template slot-scope="scope">
          <span v-text="scope.row.name"></span>
        </template>
      </el-table-column>
      <el-table-column label="价格" width="80">
        <template slot-scope="scope">
          <span v-text="scope.row.price"></span>
        </template>
      </el-table-column>
      <el-table-column label="选择"  width="120">
        <template slot-scope="scope">
          <el-checkbox  v-model="scope.row.checked" label="选中" @change="checkadvert(scope.row)"></el-checkbox>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
   props:{
    UserData : Object,
  },
  data() {
    return { 
      userData: [],
      userDataitem :''
    }
},
watch: {
  UserData(val) {
      this.userData =val.model.list; 
      this.userData.map(item => {
        this.$set(item, 'checked', false )
      })
     // console.log(this.userData); 
  }
},
methods: {
  checkadvert(val) {  
      if(val.checked) {
        this.$confirm( '是否确认选中？' , '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              this.userDataitem =val; 
              this.$emit('getuserData', this.userDataitem) 
          })
      } 
  }
}
}
</script>
