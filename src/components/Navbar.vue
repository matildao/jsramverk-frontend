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
          <div class="loginRegister">
            <md-button class="md-icon-button profile-button" to="/profile">
              <font-awesome-icon
                class="icon-space"
                v-if="loggedIn"
                :icon="['fas', 'user-circle']"
                size="2x"
              />
            </md-button>
            <md-button class="login" id="toLoginPage" @click="toLogin()">Login</md-button>
            <md-button
              class="signup"
              to="/register"
              @click="toRegister()"
            >Signup</md-button>
          </div>
        </div>
      </div>

      <div class="hamburger-navbar">
        <md-button class="hamburger-toggle" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
      </div>
    </div>
    <md-drawer
      class="hamburger-nav-drawer"
      :md-active.sync="showNavigation"
      md-swipeable
    >
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

<script>
export default {
  data() {
    return {
      loggedIn: localStorage.getItem("loggedIn"),
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
          text: "Chat",
          page: "/chat"
        }
      ],
      showNavigation: false,
      showSidepanel: false
    };
  },
  mounted() {
    // console.log(localStorage);
  },
  methods: {
    toLogin() {
      window.location.assign("/login");
    },
    toRegister() {
      window.location.assign("/register");
    }
  }
};
</script>

<style scoped>
  .navbar {
    top: 0;
    font-style: normal;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    background-color: #fff7f5;
    height: 4em;
    z-index: 6;
    position: fixed;
    width: 100%;
  }

  .hamburger-nav-drawer {
    background-color: #fff7f5;
  }

  .hamburger-toggle {
    justify-content: flex-start;
    margin-top: 10px;
  }

  .logo {
    width: 40px;
    height: 20px;
    margin-left: 2em;
    margin-right: 2em;
  }

  .profile-button {
    margin-top: -0.5em;
    color: rgb(218, 129, 143);
  }

  .list-items {
    margin-top: 1.2em;
    display: flex;
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
    margin-right: 15px;
    padding-bottom: 1em;
    color: black;
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

  .loginRegister {
    margin-left: calc(100% - 20em);
    position: absolute;
    float: right;
  }

  .signup {
    background-color: transparent;
    border: none;
    height: 1em;
    min-height: 0;
  }

  .login {
    background-color: transparent;
    border: none;
    height: 1em;
    min-height: 0;
    margin-right: 0;
  }

  .md-button {
    min-width: 0;
    width: 3.8em;
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

