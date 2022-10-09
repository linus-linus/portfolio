<!-- @format -->

<template>
  <div class="form" style="display: block">
    <input v-model="password" type="text" placeholder="" />
    <label for=""><span>Write somthing</span></label>
    <input @click="okPassword" type="button" value="ok" name="" id="" />
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const password = ref("")

    const okPassword = () => {
      if (password.value == "hello") {
        alert("hello")
      }
    }

    return { okPassword, password }
  },
}
</script>

<style>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  position: relative;
}

input {
  width: 500px;
  height: 70px;
  outline: none;
  border: 3px solid #505050;
  background-color: transparent;
  border-radius: 8px;
  font-size: 25px;
  position: relative;
  padding: 40px;
  transition: all 0.3s ease;
}
input:focus {
  border: 3px solid #4285f4;
}
label {
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 25px;
  transition: all 0.3s ease;
  color: black;
  pointer-events: none;
}
input:focus + label,
input:not(:placeholder-shown) + label {
  top: 0;
  left: 20px;
  color: black;
}

input:focus + label {
  color: #4285f4;
}

span {
  padding: 5px;
  background-color: white;
  border-radius: 1000px;
}
</style>
