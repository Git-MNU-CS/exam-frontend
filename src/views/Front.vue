<template>
    <Layout>
        <Header>
            <Menus :menuTheme="menuTheme" :menus="menus" :menuMode="menuMode"></Menus>
        </Header>
        <Content>
            <router-view />
        </Content>
    </Layout>
</template>
<script>
  import Menus from "@/components/menus"
	// @ is an alias to /src
  let meuns = [{
      "icon": "ios-people",
      "name": "比赛列表",
    },
		{
			"icon": "ios-people",
			"name": "题目列表",
		},
		{
			"icon": "ios-people",
			"name": "姓名",
		},
		{
			"icon": "ios-people",
			"name": "学号",
		},
		{
			"icon": "ios-people",
			"name": "班级",
		},
	];
	let menuTheme = "dark";
	let menuMode = "horizontal";

	export default {
		name: "",
		data() {
			return {
				menus: meuns,
				menuTheme: menuTheme,
				menuMode: menuMode,
			};
		},
		components: {
			Menus,
		}
	};
</script>
