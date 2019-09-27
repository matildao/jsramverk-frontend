<template>
  <div class="message-outer-div">
    <div class="avatar-author-name">
      <md-avatar class="avatar-pic">
        <img :src="avatar" alt="Avatar" />
      </md-avatar>
      <div class="author-name">{{ messageObj.author }}</div>
    </div>

    <div class="chat-message">
      <div class="author">{{ messageObj.date }}</div>
      <div class="chat-content">{{ messageObj.content }}</div>
    </div>
  </div>
</template>

<script>
import avatar from "../../assets/avatar.png";

export default {
  name: "ChatMessage",
  props: ["message"],
  data() {
    return {
      avatar: avatar,
      messageObj: this.message
    };
  }
};
</script>


<style scoped>
  .chat-message {
    min-height: 4em;
    min-width: 10%;
    max-width: 70%;
    padding: 18px;
    padding-top: 0;
    margin-top: 2.8em;
    border-radius: 2px 15px 15px 15px;
    color: rgb(230, 230, 230);
    background-color: #8080ff;
  }

  .message-outer-div {
    display: flex;
    flex-direction: row;
  }

  .author {
    font-size: 10px;
    color: rgb(219, 218, 218);
  }

  .avatar-pic {
    margin: 1em;
  }

  .divider {
    border-bottom: 1.5px solid rgb(216, 216, 216);
  }

  .avatar-author-name {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .author-name {
    margin-top: -2em;
    font-size: 12px;
  }
</style>
