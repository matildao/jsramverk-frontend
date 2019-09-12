<template>
  <div class="report">
    <md-card class="card">
      <md-card-header>
        <h1>Weekly Report {{ reportNumber }}</h1>
      </md-card-header>

      <md-card-content>
        <div v-for="line in data" v-bind:key="line">
          <p>{{ line }}</p>
        </div>
        <p>
          <b>Github:</b>
          <a :href="github">{{ github }}</a>
        </p>
      </md-card-content>

      <md-card-actions></md-card-actions>
    </md-card>
  </div>
</template>


<script>
import Reports from "./weekly.json";

export default {
  name: "WeeklyReport",
  data() {
    let id = this.$route.path[this.$route.path.length - 1];

    return {
      reportNumber: id,
      data: Reports.Reports["week" + id],
      github: Reports.Reports.github
    };
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
  margin-bottom: 3em;
}

.report {
  width: 85%;
  margin: auto;
  margin-top: 8em;
}
</style>