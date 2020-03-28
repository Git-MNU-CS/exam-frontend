<template>
  <div id="app">
    <Layout class="app-layout">
      <Content>
        <router-view />
      </Content>
      <Footer>
        <CopyRight />
      </Footer>
    </Layout>
  </div>
</template>
<script>
import CopyRight from "@/components/copy-right.vue";
export default {
  name: "app",
  components: {
    CopyRight
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
html,
body {
  height: 100%;
  width: 100%;
}

.app-layout {
  height: 100%;
}
</style>
