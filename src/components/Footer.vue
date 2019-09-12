<template>
  <div class="outer-footer">
    <div class="footer-section-group">
      <div class="footer-section">
        <div class="flex-col">
          <img class="logo" src="../assets/fish-logo.png" />
          <p>This website is made for the course Jsramverk in the program webbprogrammering at Blekinge Institute of Technology. Every image and text either belongs to the owner of this page or are free images taken from the internet from websites that provide free content.</p>
          <div class="brand-icons">
            <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" />
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
            <font-awesome-icon :icon="['fab', 'twitter-square']" size="2x" />
            <font-awesome-icon :icon="['fab', 'github-square']" size="2x" />
          </div>
        </div>
      </div>
      <div class="footer-section">
        <h2>Contact</h2>
        <div>
          <font-awesome-icon class="icon-space" :icon="['fas', 'phone-alt']" size="1x" />070-2323232423
        </div>
        <div>
          <font-awesome-icon class="icon-space" :icon="['fas', 'envelope']" size="1x" />matildaytc@gmail.com
        </div>
      </div>
      <div class="footer-section">
        <h2>Other</h2>
      </div>
    </div>
    <div class="divider"></div>

    <div class="lower-footer-content">
      <div>
        <a href>Privacy Policy |</a>
        <a href>Terms of Use</a>
      </div>Copyright © 2019 Matilda Olsson
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer-footer {
  min-height: 20em;
  color: rgb(131, 131, 131);
  background-color: #242427;
}

.footer-section-group {
  display: flex;
  flex-direction: row;
}

.footer-section {
  width: 100%;
  padding: 1em;
  margin: 3em;
  margin-top: 5em;
}

.icon-space {
  margin-right: 1em;
}

.lower-footer-content {
  text-align: center;
  padding: 3em;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.logo {
  display: block;
  margin: auto;
  margin-bottom: 3em;
  width: 100px;
}

.md-layout-item {
  width: 33%;
}

.brand-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.divider {
  border-top: 1px solid rgb(59, 59, 59);
  margin: 0 12em 0 12em;
}

@media only screen and (max-width: 800px) {
  .footer-section-group {
    /* width: 90%; */
    flex-direction: column;
  }

  .footer-section {
    width: 90%;
    margin: auto;
    margin-bottom: 1em;
  }
}
</style>
