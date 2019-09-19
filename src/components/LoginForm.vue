<template>
  <div class="register-form">
    <form novalidate class="md-layout" @submit.prevent="loginUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100 form">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <md-field>
            <label for="email">Email</label>
            <md-input
              type="email"
              name="email"
              id="email"
              v-model="form.email"
              :disabled="sending"
            />
          </md-field>
          <md-field>
            <label for="email">Password</label>
            <md-input
              type="password"
              name="password"
              id="password"
              v-model="form.password"
              :disabled="sending"
            />
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button
            type="submit"
            class="submit-button md-primary"
            :disabled="sending"
          >Login</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar
        class="snackbar"
        :md-active.sync="userLogin"
      >Successfully logged in!</md-snackbar>
      <md-snackbar
        class="snackbar-error"
        :md-active.sync="notValid"
      >Wrong password or email!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { login } from "../actions/user";

export default {
  name: "LoginForm",
  data: () => ({
    form: {
      email: null,
      password: null
    },
    userLogin: false,
    sending: false,
    lastUser: null,
    notValid: false
  }),
  mounted() {
    // console.log(localStorage.getItem("loggedIn"));
  },
  methods: {
    sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
          break;
        }
      }
    },
    loginUser() {
      login(this.form).then((res) => {
        if (res.valid === true) {
          this.userLogin = true;
          localStorage.setItem("token", res["x-access-token"]);
          localStorage.setItem("activeUser", JSON.stringify(res.user));
          localStorage.setItem("loggedIn", true);
          this.$router.push("/profile");
        } else {
          this.notValid = true;
        }
      });
    }
  }
};
</script>

<style scoped>
  form {
    width: 70%;
    margin: 2em;
    margin-bottom: 15em;
  }

  .register-form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form {
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6em;
    border-radius: 5px;
  }

  .md-input {
    border-bottom: 1px solid rgb(173, 173, 173);
  }

  .submit-button {
    width: 100%;
    background-color: #dd7373;
  }

  .info-dialog {
    background-color: white;
    width: 400px;
    border-radius: 5px;
  }

  .info-dialog-content {
    padding: 1em;
    border-top: 1px solid rgb(180, 180, 180);
  }

  .info-checkbox {
    border-color: palevioletred;
  }

  .info-button {
    margin-top: -0.5em;
  }

  .agree-field {
    margin-top: 4em;
  }

  .md-error {
    color: red;
  }

  .error {
    border-bottom: 1px solid red;
  }

  .snackbar {
    background-color: rgb(68, 209, 63);
    bottom: 0;
  }
  .snackbar-error {
    background-color: #ec3b3b;
    bottom: 0;
  }
</style>
