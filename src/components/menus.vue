<template>
    <Menu :mode="menuMode" :theme="menuTheme" active-name="1">
        <MenuItem name="1" v-for="menu in menus" :key="menu.name">
            <Icon :type="menu.icon" />
            {{ menu.name }}
        </MenuItem>
    </Menu>
</template>

<script>
    export default {
    name: "menutest",
    props: ["menus", "menuTheme", "menuMode"],
    data() {
      return {
      }
    },
  }
</script>

<style scoped>

</style>
