
<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <router-link class="navbar-brand" to="/">
                    <img src="../assets/logos/logo.png" class="img-fluid brand-logo" alt="Cookination logo" />
                </router-link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-content">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/recipes">Recipes</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="#">Shop</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="#">Contact</router-link>
                            </li>
                        </ul>
                        <ul v-if="!isLoggedIn" class="nav-buttons">
                            <li><router-link to="/register" class="btn btn-primary btn-register">Register</router-link></li>
                            <li><router-link to="/login" class="btn btn-outline-primary btn-login">Sign in</router-link></li>                            
                        </ul>
                        <ul v-else class="profile-area">
                          <li class="pt-1"><router-link to="/myrecipes"><p>{{ currentUser }}</p></router-link></li>
                          <li><router-link to="/myrecipes"><span class="avatar"></span></router-link></li>
                          <li><button class="btn logout-button" @click="logout"></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>    
</template>

<script>

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";


export default {
  name: "Header",

  data() {
    return {
      isLoggedIn: false,
      currentUser: 'noUser'
    }
  },

  methods: {
    logout(){
      const auth = getAuth();
      signOut(auth)
        .then(() => {
        this.$router.push('/')
      })
        .catch((error) => {
          console.log(error);
      });      
    }
  },

  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
        this.currentUser = user.email;
      } 
      else {
        this.isLoggedIn = false;
        this.currentUser = 'noEmail'
      }
    });
  }

}
</script>

<style scoped>

  header {
      background-color: #fff;
      position: fixed;
      width: 100%;
      z-index: 10;
  }

  .navbar-brand {
      padding: 0;
  }

  .brand-logo {
      max-height: 70px;
  }

  .navbar {
      box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, .25);
  }

  .nav-item {
      padding-right: 15px;
  }

  .navbar-light .navbar-nav .nav-link {
      color: var(--text-color);
      font-size: 16px;
      font-weight: 600;
  }

  .navbar-light .navbar-nav .nav-link:hover {
      color: var(--accent-color);
  }

  .navbar-toggler {
      border: 0;
      padding: 1px 2px;
  }

  .navbar-brand {
      margin-right: 0;
  }

  .nav-buttons {
      display: flex;
  }

  .btn-register {
      margin-right: 10px;
  }

  .btn-register:hover {
    color: var(--accent-color); 
    background-color: #fff;
  }

  .navbar-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;
      margin-left: 25px;
  }

  .profile-area {
      display: flex;
      position: relative;
      top: 14px;
  }

  .profile-area li {
      font-size: 16px;
      color: var(--text-color);
      font-weight: 600;
      margin-left: 15px;
  }

  .profile-area .avatar {
    height: 52px;
    width: 52px;
    border-radius: 36px;
    background-image: url('../assets/avatar.svg');
    background-repeat: no-repeat;
    background-size: 32px 32px;
    background-position: center;
    background-color: #f1f1f1;
    position: relative;
    top: -15px;
    display: inline-block;
  }

  .profile-area .logout-button { 
    background: url('../assets/icon_logout.svg') center no-repeat;
    height: 30px;
    width: 30px; 
    position: relative;
    border-radius: 15px;
  }

  .profile-area .logout-button:hover { 
    background-color: #f1f1f1;
  }


  @media (max-width: 991px) {
      .navbar-content {
          margin-top: 0;
          margin-left: 0;
          align-items: flex-end;
      }

      .nav-buttons {
          margin-bottom: 10px;
      }

      .nav-buttons a {
          padding: 6px 10px;
      }

      .brand-logo {
          max-height: 50px;
      }
  }
</style>
