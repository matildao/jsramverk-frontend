<template>
  <div class="register">
    <h1>Register</h1>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm";

export default {
  components: {
    RegisterForm
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
