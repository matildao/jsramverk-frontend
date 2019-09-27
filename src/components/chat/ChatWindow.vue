<template>
  <div class="chat-window">
    <div class="message-window">
      <div v-for="(item, index) in chatContent" v-bind:key="index">
        <div class="joined-message" v-if="item.connected">
          {{item.connected}} joined the chat!
          <div class="joined-date">{{item.date}}</div>
        </div>
        <div v-else>
          <ChatMessage :message="item" />
        </div>
      </div>
    </div>
    <div>
      <div class="smiley-selector">
        <div v-for="(item, index) in smileys" v-bind:key="index">
          <md-button
            class="smiley-button md-icon-button"
            @click="setSmiley(index)"
          >
            <div class="smiley-item">{{item}}</div>
          </md-button>
        </div>
      </div>
      <form novalidate class="md-layout" @submit.prevent="createMessage">
        <md-field class="message-input-field">
          <md-input v-model="messageToSend" class="message-input"></md-input>
        </md-field>
      </form>
    </div>
  </div>
</template>

<script>
import ChatMessage from "@/components/chat/ChatMessage.vue";

export default {
  name: "DialogPrompt",
  props: [
    "sendMessage",
    "allMessages",
    "latestPersonJoined",
    "nickName",
    "chatContent"
  ],
  components: {
    ChatMessage
  },
  data() {
    return {
      messageToSend: "",
      test: "test",
      smileys: ["😇", " 😊", "😉", "😎", "🤔", "❤️️", "👍"]
    };
  },
  methods: {
    createMessage: function () {
      this.sendMessage(this.messageToSend);
      this.messageToSend = "";
    },
    setSmiley: function (iconPosition) {
      this.messageToSend =
          this.messageToSend + " " + this.smileys[iconPosition];
    },
    getRandomJoiningString(name) {
      const phrases = [
        "Oh no! ? joined the server",
        "Hide your food ? is here!",
        "? showed up!",
        "? just joined the server!"
      ];
      const randomChoice = Math.floor(Math.random() * phrases.length);

      return phrases[randomChoice].replace("?", name);
    }
  }
};
</script>

<style scoped>
  .chat-window {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    color: rgb(131, 131, 131);
    background-color: rgb(243, 243, 243);
    height: 87.3vh;
  }

  .message-window {
    height: 100vh;
    overflow-y: scroll;
  }

  .message-input-field {
    padding-top: 0;
    margin: 0;
    min-height: 50px;
  }

  .message-input {
    border: 1px solid rgb(179, 179, 179);
    padding: 10px;
    min-height: 50px;
    margin: 0;
  }

  .smiley-selector {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    padding: 0.5em;
    border-top: 1px solid rgb(207, 207, 207);
    background-color: rgb(231, 231, 231);
  }

  .smiley-item {
    display: flex;
    flex-direction: row;
    margin-left: 0;
  }

  .smiley-button {
    width: 20px;
    min-width: 0;
    height: 20px;
    margin: 0 0 0 0;
  }

  .joined-message {
    display: flex;
    flex-direction: row;
    color: rgb(180, 180, 180);
    margin-left: 20vw;
    margin-top: 0.5em;
  }

  .joined-date {
    font-weight: 300;
    font-size: 10px;
    margin-left: 8px;
  }
</style>
