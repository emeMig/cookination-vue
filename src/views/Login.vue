<template>
  <main class="page-login">
    <info-dialog 
      v-if = "error"
      :error="error"
      @close-dialog="error=null"
    >
    </info-dialog>
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/logos/icon.svg" />
      <h1 class="main-title">Sign in</h1>
      <p class="auth-intro">Log in to your account.</p>

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
        <button class="btn btn-primary btn-lg" @click="login">Sign in</button>
      </form>

      <p class="auth-bottom">
        Not a member? <span class="alink"><router-link to="/register">Register</router-link></span>
      </p>
    </section>
    
  </main>
</template>

<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
  import InfoDialog from '../components/InfoDialog.vue' 

  export default {
    name: "Login",
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
      login: function (e) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Completar
            const user = userCredential.user
            console.log(`Sesion iniciada correctamente con el correo: ${user.email}` )
            this.$router.push('/')
          })
          .catch((error) => {
            this.error = error
          });

        e.preventDefault()
      },
    },
  };

</script>