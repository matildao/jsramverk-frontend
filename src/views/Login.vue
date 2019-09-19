<template>
  <div class="register">
    <h1>Login</h1>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";

export default {
  components: {
    LoginForm
  },
  mounted() {
    scroll(0, 0);
  }
};
</script>

<style scoped>
.register {
  background-position: center;
  background-size: cover;
  background-image: url("../assets/laptop.jpeg");
  min-height: 100vh;
}
</style>
