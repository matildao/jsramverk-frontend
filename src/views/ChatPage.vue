<template>
  <div class="about">
    <md-card class="content-card">
      <div class="chatbox">
        <ChatList :allPeople="allPeople" />
        <ChatWindow
          :sendMessage="sendChatMessage"
          :allMessages="allMessages"
          :chatContent="chatContent"
          :latestPersonJoined="latestPersonJoined"
          :nickName="nickName"
        />
      </div>
    </md-card>
    <div>
      <md-dialog
        :md-close-on-esc="false"
        :md-click-outside-to-close="false"
        :md-active.sync="active"
        :md-fullscreen="false"
        class="name-dialog"
      >
        <md-dialog-title>Nickname</md-dialog-title>
        <div class="dialog-content">
          <form novalidate class="md-layout" @submit.prevent="getNickName">
            <md-field>
              <md-input
                class="nickname-input"
                placeholder="Enter nickname"
                v-model="nickName"
              ></md-input>
            </md-field>
          </form>
        </div>
        <md-dialog-actions>
          <md-button class="md-primary" @click="getNickName()">Chat</md-button>
        </md-dialog-actions>
      </md-dialog>
      <md-snackbar
        class="snackbar-error"
        :md-active.sync="invalid"
      >No input or empty input</md-snackbar>
    </div>
  </div>
</template>

<script>
import ChatList from "@/components/chat/ChatList.vue";
import ChatWindow from "@/components/chat/ChatWindow.vue";

export default {
  name: "ChatPage",
  components: {
    ChatList,
    ChatWindow
  },
  data() {
    return {
      nickName: "",
      active: true,
      invalid: false,
      latestPersonJoined: "",
      allMessages: [],
      chatContent: [],
      allPeople: []
    };
  },
  sockets: {
    chatmessage: function (message) {
      this.chatContent.push(message);
    },
    connected: function (nickname) {
      this.latestPersonJoined = nickname;
      this.chatContent.push({
        connected: nickname,
        date: this.getDateString()
      });
      this.allPeople.push(nickname);
    }
  },
  methods: {
    getNickName() {
      if (this.nickName.length !== 0 && /\S/.test(this.nickName) === true) {
        this.$socket.emit("connected", this.nickName);
        this.active = false;
      } else {
        this.invalid = true;
      }
    },
    getDateString() {
      var today = new Date();
      var date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
      var time = today.getHours() + ":" + today.getMinutes();

      return `${date} ${time}`;
    },
    sendChatMessage(message) {
      const messageObject = {
        author: this.nickName,
        content: message,
        date: this.getDateString()
      };

      this.$socket.emit("chatmessage", messageObject);
    }
  }
};
</script>

<style lang="css" scoped>
  .content-card {
    background-color: #f8f8f8;
    width: 90%;
    margin: auto;
    margin-top: 5em;
    margin-bottom: 4em;
    border-radius: 5px;
    min-height: 45em;
  }

  .name-dialog {
    background-color: #f8f8f8;
  }

  .chatbox {
    height: 30em;
    display: flex;
    flex-direction: row;
  }

  .dialog-content {
    width: 80%;
    margin: auto;
  }

  .nickname-input {
    border-bottom: 1px solid rgb(175, 175, 175);
  }

  .snackbar-error {
    background-color: #ec3b3b;
    color: white;
    bottom: 0;
  }
</style>
