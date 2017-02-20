<template>
	<div class="hotopics box">
		<el-row type="flex">
			<el-col class="title">
				最热议主题
			</el-col>
		</el-row>
		<el-row  class="cell" type="flex" justify="center" align="middle" v-for='hot in hots'>
			<el-col :sm="6" :xs="4" offset="1">
	              <img  v-bind:src="hot.member.avatar_normal" style="border-radius:5px;"></img>
			</el-col>
			<el-col :sm="18":xs="20">
				<h2>
					{{ hot.title }}
				</h2>
			</el-col>
		</el-row>
	</div>

</template>


<script>
	export default{
		data(){
			return{
				hots:[]
			}
		},
		mounted:function(){
			this.$nextTick(function () {
	        this.initData();
	      })
		},
		methods:{
			initData:function(){
				this.$http.get('/api/topics/hot.json').then(function(response){
					this.hots = response.body;
					console.log(this.hots);
				}).then(function(err){
					console.log(err);
				})
			}
		}
	}
</script>


<style>
	.hotopics{
		margin-top:30px;
	}
	.cell{
		padding: 10px;
		font-size: 10px;
		color: #5e5e5e;
	    text-align: left;
	    border-bottom: 1px solid #e2e2e2;
	}
	.title{
		color: #333;
		background-color: #f5f5f5;
		border-color: #ddd;
		border-bottom: 1px solid transparent;
		text-indent: 30px;
		padding:10px;
	}
</style>