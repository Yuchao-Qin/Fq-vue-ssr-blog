<template lang="html">
  <div class="nav-header-root">
    <Menu style="height: 100%;" mode="horizontal" active-name="1">
      <Row>
        <Col span="5">
          <h1 class="title">
            <router-link to="/">Max Lasting</router-link>
          </h1>
        </Col>
        <div class="div-line"></div>
        <Col span="4" offset="1">
          <div class="menu-search">
            <Input class="search" icon="ios-search" placeholder="输入要搜索的内容..."></Input>
          </div>
        </Col>
        <Col span="10" offset="1">
          <div class="menu-items">
            <MenuItem name="1" class="item">首页</MenuItem>
            <MenuItem name="2" class="item">分类</MenuItem>
            <MenuItem name="3" class="item">社区</MenuItem>
            <MenuItem name="4" class="item">关于</MenuItem>
          </div>
        </Col>
      </Row>
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="css">
  #root {
    min-width: 980px;
    overflow: auto;
  }
  .nav-header-root {
    width: 100%;
    min-height: 64px;
    box-shadow: 0 2px 8px #f0f1f2;
    padding: 0;
  }
  .nav-header-root .title {
    width: 100%;
    line-height: 64px;
    text-align: center;
    cursor: pointer;
    margin: 0;
  }
  .nav-header-root .div-line {
    float: left;
    width: 0;
    height: 56px;
    margin-top: 4px;
    /* margin-right: 10px; */
    border-left: 1px solid rgb(233, 233, 233);
  }
  .nav-header-root .menu-search {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-header-root .search {
    display: block;
    max-width: 250px;
  }
  .nav-header-root .menu-items {
    height: 64px;
  }
  .nav-header-root .menu-items .item {
    height: 100%;
  }
  .nav-header-root .menu-items .item + .item {
    margin-left: 5px;
  }
</style>