<template lang="html">
  <div id="root">
    <Layout>
      <Header style="padding: 0;">
        <nav-header></nav-header>
      </Header>
    </Layout>
  </div>
</template>

<script>
import NavHeader from './components/nav-header.vue'

export default {
  components: {
    NavHeader
  },
}
</script>

