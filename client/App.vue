<template lang="html">
  <div id="root">
    <Row type="flex" justify="center">
      <Col span="5">112</Col>
      <Col span="10">1010101010</Col>
    </Row>
  </div>
</template>

<script>
import { Row, Col } from './deepLove/components/grid/index.js'
import './deepLove/styles/grid.scss'

export default {
  components: {
    Row,
    Col
  },
}
</script>

<style>
  html, 
  body {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  #root {
    min-width: 1080px;
    min-height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
  .layout {
    flex: 1;
    position: relative;
  }
</style>

