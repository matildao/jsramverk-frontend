<template>
  <div class='report'>
    <md-card class='toolbar-card'>
      <md-toolbar class='md-accent' md-elevation='1'>
        <h3 class='md-title' style='flex: 1'>Weekly Reports</h3>
        <NewReportDialog />
      </md-toolbar>

      <div v-for='item in reports' :key='item.week'>
        <md-card id='card'>
          <md-card-header>
            <h2>Week {{ item.week }}</h2>
          </md-card-header>

          <md-card-content>
            <p>
              <b>Preview</b>
            </p>
            <p>{{ item.reportText.substring(0, 20) }}...</p>
          </md-card-content>

          <md-card-actions>
            <router-link class="button" :to="'reports/week/' + item.week" tag="button">
              <md-icon>chevron_right</md-icon>
            </router-link>
          </md-card-actions>
        </md-card>
        <hr />
      </div>
    </md-card>
  </div>
</template>


<script>
import Reports from "./weekly.json";
import NewReportDialog from "../components/dialogs/NewReportDialog";
import { getAllReports } from "../actions/reports";

const token = localStorage.getItem("token");

export default {
  components: { NewReportDialog },
  // eslint-disable-next-line
  data: () => {
    return {
      reports: []
    };
  },
  beforeMount() {},
  mounted() {
    getAllReports(token).then((res) => {
      const sortedList = res.data.sort(function (a, b) {
        return a.week - b.week;
      });
      this.reports = sortedList;
    });
    scroll(0, 0);
  },
  methods: {
    getReportText(id) {
      return Reports.Reports["week" + id];
    }
  }
};
</script>


<style>
#card {
  background-color: #f8f8f8;
  width: 100%;
  color: gray;
  box-shadow: none;
}
.md-card-header {
  padding: 0;
  padding-left: 16px;
}

.toolbar-card {
  background-color: #f8f8f8;
  width: 80%;
  margin: auto;
  margin-bottom: 4em;
  border-radius: 5px;
}

h2 {
  color: #080808;
}

.report {
  margin-top: 6em;
}

.button {
  background: none;
  border: none;
  padding: 0.5em;
  border-radius: 50%;
  color: hsl(0, 47%, 56%);
}

.button:hover {
  background-color: #dddada;
  cursor: pointer;
  transition-duration: 1s;
}
</style>
