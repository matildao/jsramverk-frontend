<template>
  <div class="about">
    <md-card class="content-card">
      <md-empty-state
        md-icon="mood_bad"
        md-label="Oops!"
        md-description="It seems that you are not logged in or your token has expired!"
      >
        <md-button to="/login" class="md-primary md-raised login-button">Take me to login</md-button>
      </md-empty-state>
    </md-card>
  </div>
</template>


<style lang="css" scoped>
.content-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: none;
  width: 90%;
  margin: auto;
  margin-top: 6em;
  padding: 1em;
  padding-left: 2em;
  min-height: 45em;
}

.center {
  margin: auto;
  text-align: center;
}

.login-button {
  color: black;
  background-color: #dd7373;
}
</style>
