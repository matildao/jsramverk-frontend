<template>
  <div class="outer-footer">
    <div class="footer-section-group">
      <div class="footer-section">
        <div class="flex-col">
          <div class="brand-icons">
            <font-awesome-icon
              class="icon"
              :icon="['fab', 'facebook-square']"
              size="2x"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fab', 'instagram']"
              size="2x"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fab', 'twitter-square']"
              size="2x"
            />
            <font-awesome-icon
              class="icon"
              :icon="['fab', 'github-square']"
              size="2x"
            />
          </div>
          <p>This website is made for the course Jsramverk in the program webbprogrammering at Blekinge Institute of Technology. Every image and text either belongs to the owner of this page or are free images taken from the internet from websites that provide free content.</p>
        </div>
      </div>
    </div>

    <div class="lower-footer-content">
      <div>Copyright © 2019 Matilda Olsson</div>
    </div>
  </div>
</template>

<script>
</script>


<style scoped>
  .outer-footer {
    min-height: 15em;
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
    margin: 2em;
    margin-top: 2em;
    text-align: center;
  }

  .icon-space {
    margin-right: 1em;
  }

  .lower-footer-content {
    background-color: #913e4a;
    text-align: center;
    padding: 1em;
    color: rgb(192, 192, 192);
    font-weight: 500;
  }

  .flex-col {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
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
    margin: auto;
  }

  .icon {
    margin: 4px;
  }

  .divider {
    border-top: 1px solid rgb(59, 59, 59);
    margin: 0 12em 0 12em;
  }

  @media only screen and (max-width: 800px) {
    .footer-section-group {
      flex-direction: column;
    }

    .footer-section {
      width: 90%;
      margin: auto;
      margin-bottom: 1em;
    }
  }
</style>
