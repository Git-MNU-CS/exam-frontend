<template>
  <div class="login">
    <Row>
      <Col class="col-height"></Col>
      <Col span="2" offset="11">
        <Form ref="formInline" :model="user" :rules="ruleInline">
          <FormItem prop="user">
            <Input type="text" v-model="user.account" placeholder="account">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="user.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" long>Signin</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    handleSubmit() {}
  }
};
</script>

<style scoped>
.col-height {
  height: 20rem;
}
</style>