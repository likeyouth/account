<template>
  <div class="app">
    <el-container>
      <el-aside class="app-side app-side-left"
                :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
        <div class="app-side-logo">
          <router-link to="/indexCharts">
            <img src="../assets/myLogo.png" height="60" />
          </router-link>
        </div>
        <div>
          <!-- 我是样例菜单 -->
          <el-menu default-active="2"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   @close="handleClose"
                   :collapse="isCollapse">
            <router-link to="/account" :underline="false">
              <el-menu-item index="1">
                <i class="el-icon-search"></i>
                <span slot="title">个人帐单</span>
              </el-menu-item>
            </router-link>
            <router-link to="/accountShow">
              <el-menu-item index="2">
                <i class="el-icon-share"></i>
                <span slot="title">账户显示</span>
              </el-menu-item>
            </router-link>
            <router-link to="/statistic">
              <el-menu-item index="3">
                <i class="el-icon-s-data"></i>
                <span slot="title">账户统计</span>
              </el-menu-item>
            </router-link>
            <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span slot="title">账户设置</span>
                </template>
                <router-link to="/accountCreate">
                  <el-menu-item-group>
                     <el-menu-item index="4-1" slot="title">创建账户</el-menu-item>
                  </el-menu-item-group>
                </router-link>
                <router-link to="/accountAdd">
                  <el-menu-item-group>
                     <el-menu-item index="4-3" slot="title">记一笔帐</el-menu-item>
                  </el-menu-item-group>
                </router-link>
              </el-submenu>
          </el-menu>
        </div>
      </el-aside>

      <el-container>
        <el-header class="app-header">
          <div style="width: 60px; cursor: pointer;"
               @click.prevent="toggleSideBar">
            <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
            <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
          </div>
          <!-- 我是样例菜单 -->
          <el-menu default-active="1"
                   class="el-menu-demo tab-page"
                   mode="horizontal"
                   @select="handleSelect"
                   active-text-color="#409EFF">
            <el-menu-item index="1">我的消息</el-menu-item>
            <el-submenu index="2">
              <template slot="title">个人中心</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项2</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3">我的回复</el-menu-item>
          </el-menu>

          <div class="app-header-userinfo">
            <el-dropdown trigger="hover"
                         :hide-on-click="false">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <router-link to="/userSet">
                   <el-dropdown-item>设置</el-dropdown-item>
                </router-link>
                <el-dropdown-item divided
                                  @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>

        <el-main class="app-body">
          <template>
            <router-view/>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'IndexContainer',
  data() {
    return {
      username: '',
      isCollapse: false
    }
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse
    },
    logout: function () {
      this.$confirm('确认退出?', '提示', {})
        .then(() => {
          sessionStorage.removeItem('user');
          this.$router.push('/login');
        })
        .catch(() => { });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted: function () {
    let user = sessionStorage.getItem('user');
    if (user) {
      this.username = user;
    }
  },
}
</script>

<style>
  @import url("../styles/index.css");

  .app-body {
    background-color: rgba(243,243,243,0.3);
  }

a {
  text-decoration: none;
}

.router-link-active {
    text-decoration: none;
  }
</style>
