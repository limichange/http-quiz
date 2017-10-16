<template>
  <div class="main" @click="run">
    <div>
      <input id="input" disabled value="999" />
    </div>
    <div :style="{ opacity: isShowResult ? 1:0 }" class="result">
      {{ code.value || 'Just Click' }}
    </div>
    <div class="btnClass">
      <!--
      <el-button @click="reset">Try again</el-button>
      <el-button @click="yes">Yes</el-button>
      <el-button @click="no">No</el-button>
      <el-button @click="start">Start</el-button>

      <el-button @click="check">Check</el-button>
      <el-button @click="randomShow">Random Show</el-button>
      -->
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import codes from '../codes'

export default {
  name: 'Main',
  mounted () {

  },
  data () {
    return {
      isShowResult: true,
      code: {},
      codes
    }
  },
  methods: {
    run () {
      if (this.isShowResult) {
        this.randomShow()
      } else {
        this.check()
      }
    },
    check () {
      this.isShowResult = true
    },
    yes () {},
    no () {},
    reset () {},
    start () {},
    randomShow () {
      this.isShowResult = false
      const index = ((codes.length - 1) * Math.random()).toFixed(0)
      const code = this.code = codes[index]

      let color = '#30A54A'

      if (parseInt(code.key) >= 300) {
        color = '#FEBF2F'
      }

      if (parseInt(code.key) >= 400) {
        color = '#DA3849'
      }

      if (parseInt(code.key) >= 500) {
        color = '#FEBF2F'
      }

      anime({
        targets: '#input',
        value: parseInt(code.key),
        round: 1,
        color: [
          { value: color }
        ],
        easing: 'easeInOutExpo'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

input {
  -webkit-opacity:1;
  font-weight: 300;
  border: none;
  font-size: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}

.result {
  font-size: 26px;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
</style>
