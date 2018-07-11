<template lang="html">
  <Row class="index-root">
    <Col span="5">
      <Menu mode="vertical" style="width: 100%;" active-name="1-1" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            JavaScript 教程
          </template>
          <MenuItem name="1-1">基础语法</MenuItem>
          <MenuItem name="1-2">DOM/BOM</MenuItem>
          <MenuItem name="1-3">面向对象</MenuItem>
          <MenuItem name="1-4">应用案例</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            Vue 教程
          </template>
          <MenuItem name="2-1">基础语法</MenuItem>
          <MenuItem name="2-2">DOM/BOM</MenuItem>
          <MenuItem name="2-3">面向对象</MenuItem>
          <MenuItem name="2-4">应用案例</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            React 教程
          </template>
          <MenuItem name="3-1">基础语法</MenuItem>
          <MenuItem name="3-2">DOM/BOM</MenuItem>
          <MenuItem name="3-3">面向对象</MenuItem>
          <MenuItem name="3-4">应用案例</MenuItem>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            Node 教程
          </template>
          <MenuItem name="4-1">基础语法</MenuItem>
          <MenuItem name="4-2">DOM/BOM</MenuItem>
          <MenuItem name="4-3">面向对象</MenuItem>
          <MenuItem name="4-4">应用案例</MenuItem>
        </Submenu>
      </Menu>
    </Col>
    <div class="div-line"></div>
    <Col span="12" offset="1">
      2222
    </Col>
    <Col span="4">333</Col>
  </Row>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .index-root {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 10px 0;
    
    .div-line {
      width: 0;
      min-height: 100%;
      border-left: 1px solid rgb(233, 233, 233);
      float: left;
      // margin-right: 20px;
    }
    
  }
  
</style>
