<template>
  <div class="report">
    <div v-for="index in 6" v-bind:key="index">
      <md-card id="card">
        <md-card-header>
          <h2>Report {{index}}</h2>
        </md-card-header>

        <md-card-content>
          <p>
            <b>Preview</b>
          </p>
          <p>{{ getReportText(index)[0] }}...</p>
        </md-card-content>

        <md-card-actions>
          <router-link class="button" :to="'reports/week/' + index" tag="button">
            <md-icon>send</md-icon>
          </router-link>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>



<script>
import Reports from "./weekly.json";

export default {
  mounted() {
    console.log(this.$route.path);
  },
  methods: {
    getReportText: function(id) {
      console.log("REPORT", Reports.Reports["week" + id]);
      return Reports.Reports["week" + id];
    }
  }
};
</script>



<style>
#card {
  background-color: #f8f8f8;
  border-radius: 5px;
  width: 70%;
  margin: auto;
  margin-bottom: 1em;
  color: gray;
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
  -webkit-transition-duration: 1s;
}
</style>