<template>
  <div>
    <div class="home">
      <div class="paralax-box">
        <md-button class="arrow-button md-icon-button" href="#intro">
          <md-icon class="arrow-icon md-size-3x">keyboard_arrow_down</md-icon>
        </md-button>
      </div>
    </div>
    <div class="home-content" id="mid">
      <div id="intro" class="empty-tag"></div>

      <div class="introduction">
        <img class="profile-img" src="../assets/me.jpg" alt />
        <div class="profile-text">
          Jag heter Matilda och går webbprogrammering år 3 på Blekinge Tekniska Högskola. Jag är från Stockholm och ska nog till flytta vidare till Göteborg sen. Det jag gillar mest med den här kursen är att jag får arbeta med javascript-ramverk och förhoppningsvis får fria val i hur min hemsida ska se ut.
          Den här hemsidan är skriven med hjälp av javascript ramverket Vue tillsammans med ett designramverk som heter Material ui för Vue. Jag har tidigare jobbat med React tillsammans med Material UI, men ville bredda mina vyer samtidigt som jag använde mig av något familjärt och då blev det Material ui vue och vue.
          På fritiden arbetar jag mycket med idéella föreningar som t.ex. Sexmästeriet på BTH (tidigare) samt arrangerar lan med WonderLAN Mammas Källare spelförening. Där är jag PR-ansvarig och skapar allt det grafiska som används vid lanen samt sköter de sociala medierna.
        </div>
      </div>
      <div class="text">
        <div
          class="fish-text"
        >Ett av mina senaste intressen är akvaristik. Jag har intresserat mig för nanoakvarium dels för att jag inte har mycket plats i min lilla etta och dels för att det är intressanta miljöer i nanoakvarium. Jag har då snöat in mig på Betta splendens som är en typ av fisk som ockaså kallas ”Kampfisk”. Min senaste fisk är på bilden till höger och heter Bob och han är en blå plakathane.</div>
        <img class="fish-img" src="../assets/fisk.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
.home {
  background-image: url("../assets/foggy.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 58em;
}

.home-content {
  transition-delay: 2s;
  min-height: 70em;
}

.md-content {
  max-width: 400px;
  max-height: 200px;
  overflow: auto;
}

.paralax-box {
  margin: 0;
  position: absolute;
  font-size: 32px;
  top: 20em;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 9em;
  text-align: center;
}

.arrow-icon {
  color: white;
  animation: bounce 1s ease-in-out infinite;
}

.arrow-button {
  transition-delay: 2s;
}

.introduction {
  margin-top: 2em;
  margin-left: 6em;
  display: flex;
  flex-direction: row;
}

.profile-img {
  border-radius: 50%;
  width: 300px;
  margin-right: 2em;
  transition: transform 1s;
}

.profile-img:hover {
  transform: scale(1.1);
}

.profile-text {
  margin-top: 5em;
  width: 60%;
}

.empty-tag {
  height: 10em;
}

.text {
  background-color: #f8f8f8;
  height: 15em;
  display: flex;
  flex-direction: row;
  margin-top: 8em;
  height: 30em;
}

.fish-img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-right: 2em;
  margin-top: 6em;
  transition: transform 1s;
  margin: auto;
  margin-top: 8em;
}

.fish-img:hover {
  transform: scale(1.1);
}

.fish-text {
  width: 60%;
  margin: auto;
  margin-top: 8em;
}

.register {
  margin-top: 5em;
  margin-left: 80em;
  width: 200px;
  background-color: white;
}

@media only screen and (max-width: 600px) {
  .introduction {
    flex-direction: column;
    margin: 3em;
  }

  .profile-img {
    width: 200px;
  }

  .profile-text {
    width: 100%;
  }

  .text {
    flex-direction: column;
    height: 100vh;
  }

  .fish-img {
    width: 200px;
    margin-top: 2em;
  }

  .fish-text {
    width: 70%;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 5px);
  }
}
</style>