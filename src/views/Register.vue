<template>
  <main class="page-register">
    <info-dialog 
      v-if = "error"
      :error="error"
      @close-dialog="error=null"
    >
    </info-dialog>
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/logos/icon.svg" />
      <h1 class="main-title">Register</h1>
      <p class="auth-intro">Not A Member? Sign Up Today</p>

      <form>
        <div class="form-group">
          <label class="form-label" for="username">E-mail</label>
          <input
            placeholder="E-mail"
            type="email"
            id="email"
            class="form-control"
            v-model.trim="email"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Password</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            class="form-control"
            v-model.trim="password"
          />
        </div>
        <button class="btn btn-primary btn-lg" @click="register">Register</button>
      </form>

      <p class="auth-bottom">
        Already have an account? <span class="alink"><router-link to="/login">Sign in</router-link></span>
      </p>
    </section>

  </main>
</template>

<script>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import InfoDialog from '../components/InfoDialog.vue' 

export default {
  name: "Register",
  components: {
    InfoDialog
  },
  data: function () {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    register(e)  {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Completar
          const user = userCredential.user;
          console.log(`Usuario creado correctamente con el correo: ${user.email}` );
          this.$router.push('/');
        })
        .catch((error) => {
          this.error = error;
        });
      e.preventDefault();
    },
  },
};

</script>