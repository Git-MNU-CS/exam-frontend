<template>
  <List :list="list" :canEdit="canEdit" class="list">
  </List>
</template>
<script>
  import List from "@/components/list"
  let ContentList;
	ContentList = [
      {
        title: '第一次考试',
        id: 1,
        key: 1
      },
      {
        title: '第二次考试',
        id: 2,
        key:2,
      }
    ];

  export default {
  name: 'contentList',
  data() {
    return {
      list: ContentList,
      canEdit: false,
    };
  },
  components: {
    List,
  }
};
</script>

<style>
  .list {
    width: 80%;
    margin-left: 10%;
  }
</style>
