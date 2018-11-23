<template>
  <div class="content">
    <div class="header">
      <Button class="last-btn" type="primary" @click="last">上一步</Button>
      <div class="header-title">问诊</div>
      <Button class="next-btn" type="primary" @click="modal1 = true">下一步</Button>
      <Modal
        v-model="modal1"
        title="诊断解读"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>拟诊</p>
        <input type="text">
        <p>诊断依据</p>
        <input type="text">
      </Modal>
      <Modal
        v-model="modal2"
        title="诊断解读"
        @on-ok="ok1"
        @on-cancel="cancel2">
        <p>体格检查</p>
      </Modal>
    </div>
    <div class="main">
      <div class="main-left">
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
      <div class="main-centre">
        <!--<div class="drawer"><</div>-->
        <Card>
          <div v-for="ask in ask">{{ask}}</div>
          <input type="text" v-model="askNow">
          <Button type="primary" @click="appendAsk">发送</Button>
        </Card>
      </div>
      <div class="main-right">
        <Tabs value="name1">
          <TabPane label="标签一" name="name1">
            <img src="" alt="">
            <Button type="primary" @click="instance">添加拟诊</Button>
          </TabPane>
          <TabPane label="标签二" name="name2">
            <div>2018.10.24</div>
            <h3>病症：头疼，发烧，恶心</h3>
          </TabPane>
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
        ask:[],
        askNow:'',
        modal1:false,
        modal2:false
      }
    },
    methods:{
      getData() {
        this.ask = this.$store.state.chat.ask
      },
      appendAsk(){
        this.$store.commit('ADD_ASK',this.askNow)
        this.askNow = ''
      },
      instance(){
        const title = '添加拟诊';
        const content = '<h1>在此处添加一次拟诊</h1>';
        this.$Modal.info({
          title: title,
          content: content
        });
      },
      ok () {
        this.modal2 = true;
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      },
      ok1 () {
        this.$router.push('check')
      },
      cancel2 () {
        this.$Message.info('Clicked cancel');
      },
      last(){
        this.$router.back()
      }
    },
    created() {
      this.getData()
    },
  }
</script>

<style scoped>
  .header{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
  .header-title{
    margin: 0 80px;
  }
  .main{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .main-left{
    width: 100px;
  }
  .main-centre{
    width: 800px;
    position: relative;
  }
  .main-right{
    width: 200px;
  }
  .drawer{
    position: absolute;
    top: 50%;
    left: 0;
  }
</style>
