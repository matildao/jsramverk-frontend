<template>
  <div>
    <md-dialog
      :md-fullscreen="false"
      class="dialog"
      :md-active.sync="showDialog"
    >
      <form novalidate class="md-layout form" @submit.prevent="createReport">
        <md-card class="card md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">Create a new report</div>
          </md-card-header>
          <md-divider />

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <label for="first-name">Week</label>

                <md-field>
                  <md-input
                    id="week"
                    v-model="getReportCount"
                    readonly
                    name="week"
                    autocomplete="week"
                    :disabled="sending"
                  />
                </md-field>
              </div>
              <md-field>
                <label>Report Text</label>
                <md-textarea v-model="form.reportText" />
              </md-field>
            </div>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button
              type="submit"
              class="md-primary"
              :disabled="sending"
            >Create Report</md-button>
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="userSaved">
          The user
          {{ lastUser }} was saved with success!
        </md-snackbar>
      </form>
    </md-dialog>
    <md-button class="md-primary" @click="showDialog = true">
      Create
      <md-icon>add</md-icon>
    </md-button>
    <md-snackbar
      class="snackbar-error"
      :md-active.sync="reportCreated"
    >Report created!</md-snackbar>
  </div>
</template>

<script>
import { createReportWeek, getAllReports } from "../../actions/reports";

const token = localStorage.getItem("token");

export default {
  name: "NewReportDialog",
  data: () => ({
    active: false,
    value: null,
    showDialog: false,
    form: {
      week: 0,
      reportText: null
    },
    userSaved: false,
    sending: false,
    lastUser: null,
    reportCreated: false
  }),
  computed: {
    getReportCount() {
      return this.form.week + 1;
    }
  },
  beforeMount() {
    getAllReports(token).then((res) => {
      this.form.week = this.getAmountOfReports(res);
    });
  },
  methods: {
    getAmountOfReports(reports) {
      let index = 0;

      reports.data.forEach((item) => {
        index++;
        console.log(item);
      });

      return index;
    },
    createReport() {
      const data = {
        week: this.getReportCount,
        reportText: this.form.reportText
      };
      createReportWeek(data, token).then((res) => {
        this.reportCreated = true;
        this.showDialog = false;
        window.location.reload();
      });
    }
  }
};
</script>

<style scoped>
  .dialog {
    background-color: white;
  }
  .card {
    box-shadow: none;
  }

  .md-input {
    border-bottom: 1px solid rgb(173, 173, 173);
  }
  .md-textarea {
    border-bottom: 1px solid rgb(173, 173, 173);
  }
  .md-textarea:focus {
    border-bottom: 1px solid rgb(155, 64, 64);
  }
  .form {
    box-shadow: none;
    padding: 2em;
  }
</style>
