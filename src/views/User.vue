<template>
  <div class="about">
    <md-card class="content-card">
      <md-card-header class="card-header">
        <div class="md-title"></div>
        <md-button
          class="md-dense-button logout-button"
          v-on:click.native="logout()"
        >Logout</md-button>
      </md-card-header>
      <div class="profile-header">
        <img class="profile-image" src="../assets/avatar.png" alt />
        <div class="profile-info-box">
          <h2 class="name">{{ getFullName}}</h2>
          <h3>{{ user.email }}</h3>
        </div>
      </div>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  computed: {
    getFullName: function () {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  beforeMount() {
    this.user = JSON.parse(localStorage.getItem("activeUser"));
  },
  methods: {
    getProfileImage() {
      // https://www.gravatar.com/avatar/HASH
    },
    logout() {
      localStorage.setItem("token", undefined);
      localStorage.setItem("activeUser", {});
      localStorage.setItem("loggedIn", false);

      this.$router.push("/login");
    }
  }
};
</script>


<style lang="css" scoped>
  .content-card {
    background-color: #f8f8f8;
    width: 90%;
    margin: auto;
    margin-top: 6em;
    padding: 1em;
    padding-left: 2em;
    min-height: 45em;
    margin-bottom: 5em;
  }

  .profile-info-box {
    display: flex;
    flex-direction: column;
    margin-left: 3em;
  }

  .card-header {
    border-bottom: 1.5px solid rgb(221, 221, 221);
  }

  .about {
    display: flex;
    flex-direction: row;
  }

  .profile-image {
    width: 20em;
  }

  .profile-header {
    display: flex;
    flex-direction: row;
    padding: 2em;
    /* justify-content: space-between; */
  }

  .name {
    color: rgb(119, 119, 119);
  }

  .logout-button {
    background-color: rgb(218, 129, 143);
    color: rgb(126, 49, 72);
  }
</style>
