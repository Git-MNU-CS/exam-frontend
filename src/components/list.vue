<template>
  <List class="list">
    <ListItem v-for="item in list" :key="item.id">
      <ListItemMeta
              :onclick="handleClick()"
              :title="item.title"
              :description="item.description"
      />
      <template slot="action" v-if="canEdit">
        <li>
          <a href>Edit</a>
        </li>
        <li>
          <a href>Delete</a>
        </li>
      </template>
    </ListItem>
  </List>
</template>
<script>
export default {
  name: "list",
  props: ['list', 'canEdit'],
  data() {
    return {
    };
  },
  methods: {
    handleClick(id) {
      console.log(id)
    }
  }
};
</script>

<style>
</style>
