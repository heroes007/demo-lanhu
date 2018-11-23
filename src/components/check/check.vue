<template>
    <div>
      <div class="header">
        <Button class="last-btn" type="primary" @click="last">上一步</Button>
        <div class="header-title">问诊</div>
        <Button class="next-btn" type="primary" @click="modal1 = true">下一步</Button>
        <Modal
          v-model="modal1"
          title="诊断解读"
          @on-ok="ok"
          @on-cancel="cancel">
          <p>体格检查</p>
          <input type="text">
        </Modal>
      </div>
    </div>
</template>

<script>
    export default {
      name: "check",
      data(){
        return{
          modal1:false
        }
      },
      methods:{
        last(){
          this.$router.back()
        },
        ok(){
          this.$router.push('')
        },
        cancel(){
          this.$Message.info('点击取消')
        }
      }
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
</style>
