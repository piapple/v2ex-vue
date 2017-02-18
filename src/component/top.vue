<template>
	<el-row id="top" type="flex"  align="middle">
		<el-col>
			<el-col :md="12" id="logo" style="text-align:center;">
				<img src="../assets/img/logo@2x.png" alt="" style="width:80px;padding-top:5px;">
			</el-col>
			<el-col :md="12" id="nav_search">
				<el-input placeholder="请输入内容" v-model="nav_input" style="max-width:300px;;">
				    <el-button slot="append" icon="search"></el-button>
  				</el-input>
			</el-col>
		</el-col>
		<el-col>
			<el-row id="logo" type="flex" align="middle" justify="center">
				<el-menu theme="light" default-active="1" class="el-menu" mode="horizontal" router>	
					<el-menu-item index="/">
						首页
					</el-menu-item>
					<el-menu-item index="/sign_in">
						登录
					</el-menu-item>
					<el-menu-item index="/sign_up">
						注册
					</el-menu-item>
				</el-menu>
			</el-row>
		</el-col>
	</el-row>
	
	</div>
	

</template>


<script>
	export default{
		data(){
			return {
				nav_input:"",
			}
		}
	}

</script>



<style>
#top{
	background:white;
	box-shadow: 0px 1px 2px rgba(0,0,0,0.5);
}
.el-menu{
	background:white;
}
</style>