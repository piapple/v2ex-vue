<template>
	<div class="content">
						<div class="box">
							<div class="tab">
								<el-menu theme="light" default-active="1" class="el-menu" mode="horizontal" router>	
									<el-menu-item index="/?tab=tech">
										技术
									</el-menu-item>
									<el-menu-item index="/?tab=creative">
										创意
									</el-menu-item>
									<el-menu-item index="/?tab=play">
										好玩
									</el-menu-item>
									<el-menu-item index="/?tab=qna">
										问与答
									</el-menu-item>
									<el-menu-item index="/?tab=all">
										全部
									</el-menu-item>
								</el-menu>
								<div class="ask">
									<a href="">
										<span>我要提问</span>
									</a>
									<span class="el-icon-caret-right"></span>
								</div>
							</div>
							<show></show>
						</div>
	</div>
</template>


<script>
	import show from "./show.vue"
	export default {

		  data () {
		    return {
		      
		    }
  },
  components:{show}
}
</script>


<style></style>