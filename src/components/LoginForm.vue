<template>
  <div class="register-form">
    <form novalidate class="md-layout" @submit.prevent="validateUser">
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
            <!-- <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>-->
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
            <!-- <span class="md-error" v-else-if="!$v.form.password.password">Invalid password</span> -->
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="submit-button md-primary" :disabled="sending">Login</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar class="snackbar" :md-active.sync="userLogin">Successfully logged in!</md-snackbar>
      <md-snackbar
        class="snackbar-error"
        :md-active.sync="notValid"
      >Wrong password or email address!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { login } from "../actions/user";
import axios from "axios";
const api_url = process.env.VUE_APP_APIBASE;

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
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    loginUser() {
      login(this.form).then(res => {
        if (res.valid === true) {
          this.userLogin = true;
        } else {
          this.notValid = true;
        }
      });
    },
    validateUser() {
      // this.$v.$touch();

      // if (!this.$v.$invalid && checkbox.checked === true) {
      this.loginUser();
      // } else {
      //   this.notAgreed = true;
      // }
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
