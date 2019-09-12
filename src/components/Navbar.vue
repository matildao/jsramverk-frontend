<template>
  <div>
    <div class="navbar">
      <div class="normal-navbar">
        <div class="list-items">
          <img class="logo" src="../assets/fish-logo.png" />
          <router-link
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
            active-class="active"
            class="navbar-link"
            exact
          >{{ routes.text }}</router-link>
        </div>
      </div>

      <div class="hamburger-navbar">
        <md-button class="hamburger-toggle" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
      </div>
    </div>
    <md-drawer class="hamburger-nav-drawer" :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Me | Matilda</span>
      </md-toolbar>

      <md-list>
        <md-list-item
          v-for="routes in links"
          v-bind:key="routes.id"
          :to="`${routes.page}`"
          active-class="nav-active"
          exact
        >{{routes.text}}</md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<style scoped>
.navbar {
  top: 0;
  font-style: normal;
  font-weight: 600;
  display: flex;
  background-color: #fff7f5;
  height: 4em;
  z-index: 5;
  position: fixed;
  width: 100%;
}

.hamburger-nav-drawer {
  background-color: white;
}

.hamburger-toggle {
  justify-content: flex-start;
  margin-top: 10px;
}

.logo {
  width: 40px;
  margin-left: 2em;
  margin-right: 2em;
}

.list-items {
  margin-top: 1.2em;
}

.hamburger-navbar {
  display: none;
}

.active {
  border-bottom: 4px solid #dd7373;
}

.nav-active {
  background-color: rgb(241, 224, 224);
}

.navbar-link {
  padding-top: 15px;
  color: black;
  padding: 14px;
  font-size: 15px;
  text-decoration: none;
  text-align: center;
}

a:not(.md-button):hover {
  text-decoration: none !important;
}

.page-container {
  min-height: 300px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-content {
  padding: 16px;
}

@media only screen and (max-width: 600px) {
  .normal-navbar {
    visibility: hidden;
    width: 0;
  }

  .hamburger-navbar {
    display: block;
  }

  .navbar {
    background-color: white;
  }
}
</style>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: "Home",
          page: "/"
        },
        {
          text: "About",
          page: "/about"
        },
        {
          text: "Reports",
          page: "/reports"
        },
        {
          text: "Register",
          page: "/register"
        },
        {
          text: "Login",
          page: "/login"
        }
      ],
      showNavigation: false,
      showSidepanel: false
    };
  }
};
</script>
