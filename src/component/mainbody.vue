<template>
	<div>
		<el-row id="main" type="flex" justify="center">
			<el-col :lg="22">
				<el-row class="content" :gutter="40">
					<el-col :lg="18" :md="18" :xs="24">
						<router-view></router-view>
					</el-col>
	  				<el-col :lg="6" :md="6" :xs="0">
	  					<div class="right_bar">
	  						<div>
	  							<v2ex></v2ex>
	  							<hotopics></hotopics>
	  						</div>
	  					</div>
	  				</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>

	import content from './content.vue';
	import Sign_in from './sign_in.vue';
	import Sign_up from './sign_up.vue';
	import v2ex from "./v2ex.vue";
	import hotopics from "./hotopics.vue";
	export default {

	data () {
	   return {
	      
	    }
	},
  	components:{v2ex,hotopics}
}
</script>

<style>
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
		padding:10px;
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