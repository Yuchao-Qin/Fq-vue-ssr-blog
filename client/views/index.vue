<template lang="html">
  <Row class="index-root">
    <Col :lg="4" :md="5" :sm="5" :xs="5">
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
      <div class="blog-list">
        <div class="blog-list-item">
          
          <div class="meta">

            <Avatar class="avatar" src="https://avatars3.githubusercontent.com/u/2842176?v=4&amp;s=120" />
            
            <div class="content">
              
              <h4 class="title">
                <Tag type="border" color="#eb2f96">置顶</Tag>
                <a href="/cnode/detail/5b223c1d5cd02be640901490">《Node.js：来一打 C++ 扩展》已出版，求支持</a>
              </h4>
              
              <div class="info">
                <span>XadillaX 发表于: 2018-06-14</span>
              </div>
              
            </div>
            
          </div>
          
          <ul class="action">
            <li>
              <span style="margin-left: 35px;">回复:47</span>
              <em class="split"></em>
            </li>
            <li>
              <span>访问:7771</span>
            </li>
          </ul>
        </div>
      </div>
      </div>
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
    .blog-list {
      
      .blog-list-item {
        border-bottom: 1px solid #e8e8e8;
        align-items: center;
        display: flex;
        padding-top: 12px;
        padding-bottom: 12px;
        
        .meta {
          align-items: flex-start;
          display: flex;
          
          .avatar {
            margin-right: 16px;
            // flex: 0 1;
          }
          
          .title {
            margin-bottom: 14px;
            line-height: 22px;
            font-size: 14px;
          }
          
          .info {
            font-size: 14px;
            color: rgba(0,0,0,.45);
          }
        }
        
        .action {
          list-style: none;
          margin-left: 48px;
          
          li {
            display: inline-block;
            cursor: pointer;
            color: rgba(0,0,0,.45);
            padding: 0 8px;
            position: relative;
            font-size: 14px;
            line-height: 22px;
            text-align: center;
            position: relative;
            
            .split {
              background-color: #e8e8e8;
              margin-top: -7px;
              position: absolute;
              top: 50%;
              right: 0;
              width: 1px;
              height: 14px;
            }
          }
          
          i:first-child {
            padding-left: 0;
          }
        }
      }
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</style>
