<template>
  <div class="register-form">
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100 form">
        <md-card-header>
          <div class="md-title">Register</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">First Name</label>
                <md-input
                  required
                  name="first-name"
                  id="first-name"
                  v-model="form.firstName"
                  :disabled="sending"
                  :class="{ error: $v.form.firstName.$error }"
                />
                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="last-name">Last Name</label>
                <md-input
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  v-model="form.lastName"
                  :disabled="sending"
                />
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('email')">
                <label for="email">Email</label>
                <md-input
                  required
                  type="email"
                  name="email"
                  id="email"
                  v-model="form.email"
                  :disabled="sending"
                  :class="{ error: $v.form.email.$error }"
                />
                <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('password')">
                <label for="email">Password</label>
                <md-input
                  required
                  type="password"
                  name="password"
                  id="password"
                  v-model="form.password"
                  :disabled="sending"
                  :class="{ error: $v.form.password.$error }"
                />
                <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
                <span class="md-error" v-else-if="!$v.form.password.password">Invalid password</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="birthday">Birthday</label>
                <DatePicker :sendDataToParent="getBirthFromChild" />
              </md-field>
            </div>
            <md-dialog class="info-dialog" :md-active.sync="dialogIsOpen">
              <md-dialog-title>Privacy Policy</md-dialog-title>
              <div class="info-dialog-content">
                <p>
                  By agreeing to this policy you consent for this website to use
                  your information in any way that fits the website owner.
                </p>
                <md-dialog-actions>
                  <md-button class="md-primary" @click="checkBox(true)">I agree</md-button>
                  <md-button class="md-primary" @click="checkBox(false)">Disagree</md-button>
                </md-dialog-actions>
              </div>
            </md-dialog>
            <div class="md-layout-item md-small-size-100">
              <div class="agree-field">
                <input type="checkbox" name="terms" id="terms" />
                Read and agree to the
                <md-button
                  class="info-button md-primary"
                  @click="dialogIsOpen = true"
                >privacy policy</md-button>
              </div>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="submit-button md-primary" :disabled="sending">Register</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar class="snackbar" :md-active.sync="userSaved">You have registered successfully!</md-snackbar>
      <md-snackbar
        class="snackbar-error"
        :md-active.sync="emailAlreadyExist"
      >This email is already registered!</md-snackbar>
      <md-snackbar
        class="snackbar-error"
        :md-active.sync="notAgreed"
      >Fill in the form correctly & agree to our policy</md-snackbar>
    </form>
  </div>
</template>

<script>
import DatePicker from "../components/DatePicker";
import { register } from "../actions/user";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "RegisterForm",
  components: {
    DatePicker
  },
  mixins: [validationMixin],
  data: () => ({
    dialogIsOpen: false,
    form: {
      firstName: null,
      lastName: null,
      password: null,
      birthday: "2019-01-01",
      email: null
    },
    consent: false,
    userSaved: false,
    sending: false,
    lastUser: null,
    notAgreed: false,
    emailAlreadyExist: false
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
    getBirthFromChild(data) {
      this.form.birthday = data;
    },
    checkBox(agree) {
      let checkbox = document.getElementById("terms");
      if (agree) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
      this.dialogIsOpen = false;
    },
    saveUser() {
      register(this.form).then(res => {
        if (res.status === 200) {
          this.userSaved = true;
        } else {
          this.emailAlreadyExist = true;
        }
      });
    },
    validateUser() {
      this.$v.$touch();
      let checkbox = document.getElementById("terms");

      if (!this.$v.$invalid && checkbox.checked === true) {
        this.saveUser();
      } else {
        this.notAgreed = true;
      }
    }
  },
  validations: {
    form: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      password: {
        required
      },
      email: {
        required,
        email
      }
    }
  }
};
</script>

<style scoped>
form {
  width: 85%;
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
