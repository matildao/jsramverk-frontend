<template>
  <div class="chat-list">
    <h2>Connected</h2>
    <md-list
      class="md-dense"
      v-for="(person, index) in allPeople"
      v-bind:key="index"
    >
      <md-list-item class="list-item">
        <md-avatar>
          <img :src="avatar" alt="Avatar" />
        </md-avatar>

        <span class="md-list-item-text">{{ person }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import avatar from "../../assets/avatar.png";

export default {
  name: "ChatList",
  props: ["allPeople"],
  data() {
    return {
      avatar: avatar,
      test: "test"
    };
  }
};
</script>


<style scoped>
  .chat-list {
    min-height: 15em;
    color: rgb(131, 131, 131);
    background-color: #242427;
    height: 87.3vh;
    width: 22%;
  }

  .chat-list h2 {
    text-align: center;
  }

  .md-list-item {
    margin-top: 0.5em;
  }
</style>
