<template>
	<el-row id="main"  type="flex" justify="center">

		<el-col :lg="22">
			<el-row class="content" :gutter="40">
				<el-col :lg="18" :md="18" :xs="24">
					<div class="main">
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
				</el-col>
  				<el-col :lg="6" :md="6" :xs="0">
  					<div class="right_bar">
  						<div class="box"></div>
  					</div>
  				</el-col>
			</el-row>
		</el-col>
	</el-row>

</template>

<script>
	import show from "./show.vue";
	export default {

	data () {
	   return {
	      
	    }
	},
  components:{show}
}
</script>

<style>
	#main{
		margin-top:20px;
	}
	#main .content{
		padding:10px;
	}
	.box{
		border: 1px solid #e2e2e2;
		border-radius:3px;
		background:white;
		box-shadow: 0px 2px 3px rgba(0,0,0,0.1);
	}
	.right_bar{

	}
	.tab .el-menu-item{
		height:40px;
		line-height:40px;
	}
	.ask{
		height: 30px;
		line-height: 30px;
		background: #eee;
		text-align: right;
		padding:0px 10px 0px 10px;
	}
	.ask a:hover{
		text-decoration:underline;
		color:#4d5256;
	}
	.ask span{
		font-size: 12px;
		color:#778087;
	}
	
</style>