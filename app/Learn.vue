<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    .plus {
      font-size: 64px;
    }
  }
</style>

<template>
  <div id="learn">
    <img src="./assets/Info1.bmp">
    <div v-show="containerShow" class="container">
      <p class="plus">+</p>
    </div>
  </div>
</template>

<script>
  import Mousetrap from 'mousetrap'
  export default {
    ready () {
      Mousetrap.bind('w', () => {
        this.containerShow = true
      })
    },
    data () {
      return {
        containerShow: false
      }
    },
    methods: {

    },
    components: {

    }
  }
</script>

