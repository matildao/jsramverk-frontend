<template>
  <div class="report">
    <div>
      <md-card class="sidebar first-sidebar">
        <md-button to="/reports" class="md-icon-button edit-button">
          <font-awesome-icon
            class="icon-space"
            :icon="['fas', 'chevron-left']"
            size="1x"
          />
        </md-button>
      </md-card>
      <md-card class="sidebar sidebar2">
        <md-button
          v-on:click.native="notImplemented = true"
          class="md-icon-button edit-button"
        >
          <font-awesome-icon
            class="icon-space"
            :icon="['fas', 'trash-alt']"
            size="1x"
          />
        </md-button>
      </md-card>
      <md-card class="sidebar sidebar2">
        <md-button
          v-on:click.native="activeEditMode"
          class="md-icon-button edit-button"
        >
          <font-awesome-icon
            class="icon-space"
            :icon="['fas', 'pen']"
            size="1x"
          />
        </md-button>
      </md-card>
      <md-card :class="!notEdit ? 'show' : 'hide'" class="sidebar sidebar2">
        <md-button
          v-on:click.native="saveText"
          class="md-icon-button edit-button"
        >
          <font-awesome-icon
            class="icon-space"
            :icon="['fas', 'save']"
            size="1x"
          />
        </md-button>
      </md-card>
    </div>
    <md-card class="card">
      <md-card-header class="card-header">
        <h1>Weekly Report {{ reportNumber }}</h1>
      </md-card-header>
      <md-card-content>
        <md-field>
          <pre :class="notEdit ? 'show' : 'hide'" class="pre">{{ text }}</pre>
          <md-textarea
            type="reportText"
            name="reportText"
            id="reportText"
            v-model="text"
            :readonly="notEdit"
            :class="!notEdit ? 'show' : 'hide'"
            class="weekly-report-text"
          />
        </md-field>
        <p>
          <b>Github:</b>
          <a
            href="https://github.com/Maoo17/jsramverk-frontend"
          >https://github.com/Maoo17/jsramverk-frontend</a>
        </p>
      </md-card-content>
      <md-dialog-alert
        :md-active.sync="notImplemented"
        md-content="This function is not implemented yet!"
        md-confirm-text="Cool!"
        class="alert"
      />
    </md-card>
  </div>
</template>


<script>
import Reports from "./weekly.json";
import { getReportWeek, editReportWeek } from "../actions/reports";
const token = localStorage.getItem("token");

export default {
  name: "WeeklyReport",
  data() {
    let id = this.$route.path[this.$route.path.length - 1];

    return {
      reportNumber: id,
      data: [],
      text: "",
      github: Reports.Reports.github,
      notEdit: true,
      notImplemented: false
    };
  },
  beforeMount() {
    getReportWeek(this.reportNumber).then((res) => {
      this.data = res.reportText.split(",");
      this.text = this.data.join("\n");
    });
  },
  mounted() {
    scroll(0, 0);
  },
  methods: {
    activeEditMode() {
      this.notEdit = !this.notEdit;
    },
    transformtextForDatabase() {},
    saveText() {
      const formattedText = this.text.split("\n ").join(",");
      const finalText = formattedText.replace("\n", ",");

      const data = {
        week: this.reportNumber,
        reportText: finalText
      };
      editReportWeek(data, token).then((res) => {
        if (res.data.status === 200) {
          this.activeEditMode();
        }
      });
    }
  }
};
</script>


<style scoped>
  .card {
    background-color: #f8f8f8;
    border-radius: 5px;
    margin-bottom: 15em;
    min-height: 50em;
    padding: 1em;
    width: 100%;
    margin-bottom: 3em;
  }

  .sidebar {
    background-color: #ececec;
    height: 3.2em;
    padding: 2px;
    margin-top: 2em;
  }

  .first-sidebar {
    margin-bottom: 4em;
  }

  .sidebar2 {
    margin-top: 0.5em;
  }

  .report {
    width: 85%;
    margin: auto;
    margin-top: 8em;
    display: flex;
    flex-direction: row;
  }

  .card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .md-textarea {
    border: 1.5px solid rgb(224, 224, 224);
    border-radius: 5px;
    min-height: 100vh !important;
  }

  .md-textarea:focus {
    border: 1.5px solid rgb(231, 166, 182);
    transition: all 1s ease-out;
  }

  .pre {
    font-family: "Roboto", sans-serif;
    width: 100%;
    word-wrap: break-word;
    white-space: pre-line;
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  .save-button {
    background-color: rgb(231, 166, 182);
    margin-left: 1.2em;
  }

  .alert {
    background-color: #f8f8f8;
  }
</style>
