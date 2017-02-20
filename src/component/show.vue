<template>
	<div>
	<el-row v-show='!loading' class="cell" type="flex" justify="center" v-for='topic in topics'>
		<el-col :sm="4" :xs="4"  offset="1">
              <img  v-bind:src="topic.member.avatar_normal" style="border-radius:5px;"></img>
		</el-col>
		<el-col :sm="16":xs="16">
			<h2>
				{{ topic.title }}
			</h2>
			<div>
              <span>{{ topic.node.title }}</span>
                •
              <a href="" class='username'>{{ topic.member.username }}</a>
                •
              <span class='created'>{{ topic.created }}</span>
            </div>
		</el-col>
		<el-col :sm="4" :xs="4" align="middle"  class="notification">
			<el-tag>{{ topic.replies }}</el-tag>
		</el-col>
	</el-row>
	</div>
</template>

<script>
	export default {
		data () {
			return{
				topics:[],
				originResponseTopics: [],
				loading:false,
			}
		},
		mounted: function () {
	      this.$nextTick(function () {
	        this.initData();
	      })
    	},
		methods: {
	      	initData: function () {
		        this.$http.get('/api/topics/latest.json').then(function (response) {
		          this.originResponseTopics = response.body;
		          this.topics = response.body;
		          this.loading=false;
		          console.log(this.topics);
		        }, function (err) {
		          console.log(err)
		        })
	      	}
	  	},
	}
</script>

<style>
	.cell{
		padding: 10px;
		font-size: 10px;
		color: #5e5e5e;
	    text-align: left;
	    border-bottom: 1px solid #e2e2e2;
	}
	.notification{
		line-height: 51px;
	}
</style>