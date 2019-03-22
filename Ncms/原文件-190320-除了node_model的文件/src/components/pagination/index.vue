<!-- 
/*
 * @Author: Gary 
 * @Date: 2017-09-05 10:58:11 
 * @Last Modified by: Gary
 * @Last Modified time: 2018-03-05 10:25:49
 */
使用方法： 
	<pagination :pageData="pageData" @pageChange="changePage"></pagination>
	属性：
		pageData	必传 分页数据
			pageData: {
			  page: 1,
			  total: 100,
			  size: 10
			}
	方法：
		pageChange 必传 子组件传值
			changePage(pageData){
				this.pageData = pageData;
				this.getList();
			}
			
-->
<template>
  <div class="page-style padding" v-if="pageData.total">
    <div class="count">
      当前显示第 {{pageData.page ? pageData.page : 1}} 页 - 第 {{pageData.page * pageData.size > pageData.total ? pageData.total : pageData.page * pageData.size}} 条 总计{{pageData.total}}条
    </div>
    <el-pagination class="pages" @current-change="changePage" :current-page.sync="pageData.page" :page-size="pageData.size" layout="prev, pager, next, jumper" :total="pageData.total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    pageData: {
      type: Object
    }
  },
  methods: {
    changePage() {
      this.$emit('pageChange', this.pageData);
    }
  }
}
</script>
<style >
  
  .pages {
    float: right;
  }
</style>


