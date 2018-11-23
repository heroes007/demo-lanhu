<template>
    <div class="content">
      <Tabs value="name1">
        <TabPane label="候诊室" name="name1" class="table1">
          <div class="left">
            <Card>
              <div>病例难易程度 </div>
              <div>
                <RadioGroup v-model="level">
                  <Radio label="1">不限</Radio>
                  <Radio label="2">不限</Radio>
                  <Radio label="3">不限</Radio>
                  <Radio label="4">不限</Radio>
                </RadioGroup>
              </div>
            </Card>
            <Card>
              <div>病例／病症</div>
              <input type="text" placeholder="请输入病例关键字">
            </Card>
            <Card>
              <div>科别</div>
              <Select v-model="model1" style="width:200px">
                <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </Card>
            <Card>
              <div>类别</div>
              <RadioGroup v-model="cate">
                <Radio label="1">不限</Radio>
                <Radio label="2">不限</Radio>
                <Radio label="3">不限</Radio>
              </RadioGroup>
            </Card>
            <Card>
              <div>年龄</div>
              <Checkbox>不限</Checkbox>
              <Checkbox>不限</Checkbox>
              <Checkbox>不限</Checkbox>
              <Checkbox>不限</Checkbox>
            </Card>
          </div>
          <div class="right">
            <Card  v-for="item in disease" class="disease">
              <div>头疼，发烧，呼吸困难</div>
              <div>
                <img src="https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_PclogoS_8whnvm25&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pcs" alt="">
                <div>
                  <h3>张三</h3>
                  <h4>男|汉族|40岁</h4>
                </div>
                <Button type="primary" @click="exercise">开始练习</Button>
              </div>
            </Card>
          </div>
        </TabPane>
        <TabPane label="咨询病例" name="name2">

        </TabPane>
      </Tabs>
    </div>
</template>

<script>
    export default {
      name: "wait",
      data(){
        return{
          level:'1',
          cate:'1',
          model1:'',
          disease:'',
          list:[
            {
              value:'beijing',
              label:'beijing'
            },
            {
              value:'tianjin',
              label:'tianjin'
            },
            {
              value:'shanghai',
              label:'shanghai'
            }
          ]
        }
      },
      methods:{
        getData(){
          this.disease = this.$store.state.chat.disease
        },
        exercise(){
          this.$router.push('person')
        }
      },
      created() {
        this.getData()
      }
    }
</script>

<style scoped>
  .table1{
    display: flex;
    flex-direction: row;
  }
  .left{
    width: 300px;
  }
  .right{
    display: flex;
    flex-wrap: wrap;
  }
  .disease{
    margin: 20px;
    height: 200px;
    width: 200px;
  }
</style>
