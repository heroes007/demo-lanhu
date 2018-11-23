<template>
  <div>
    <div class="top">
      <Button type="primary">上一步</Button>
      <div>问诊</div>
      <Button type="primary">上一步</Button>
    </div>
    <div class="main">
      <div class="mainLeft">
        <Menu theme="light">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
      </div>
      <div class="mainCentre">
        <Card>

        </Card>
      </div>
      <div class="mainRight">
        <Tabs value="name1">
        <TabPane label="标签一" name="name1">
          <img src="" alt="">
          <Button type="primary">添加拟诊</Button>
        </TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
    </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "person",
      data(){
        return{
          ask:[]
        }
      },
      methods:{
        getData(){
          this.ask = this.$store.state.chat.ask
        },
        appendAsk(){

        }
      },
      created(){
        this.getData()
        this.appendAsk()
      }
    }
</script>

<style scoped>

</style>
