<template>
  <div class="loginpage">
    <div class="centerColumn fixed-center">
      <div class="h50">
        <img :class="logoAnimClass" src="logo.png" />
        <div class="pondera text-faded">PONDERA</div>
      </div>
      <div class="h50 top">
        <q-input
          bottom-slots
          v-model="email"
          label="email"
          dark
          color="white"
          label-color="white"
          standout="bg-green-8 text-white"
          class="logininputs"
        >
          <template v-slot:prepend>
            <q-icon name="fal fa-envelope" />
          </template>
          <template v-slot:append>
            <q-icon
              name="fal fa-times"
              @click="email = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>
        <q-input
          bottom-slots
          v-model="password"
          label="mot de passe"
          :type="isPwd ? 'password' : 'text'"
          dark
          color="white"
          label-color="white"
          standout="bg-green-8 text-white"
          class="logininputs"
        >
          <template v-slot:prepend>
            <q-icon name="fal fa-lock-alt" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'fal fa-eye-slash' : 'fal fa-eye'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
              style="margin-right: 10px"
            />
            <q-icon
              name="fal fa-times"
              @click="password = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>
        <q-btn
          :class="loginBtClass"
          size="md"
          style="width: 100%"
          no-caps
          unelevated
          label="se connecter"
          @click="trylogin"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fakron-Login",
  data() {
    return {
      email: "",
      password: "",
      isPwd: true,
      loginStep: "",
      logoAnimClass: "loginlogo",
      loginStart: 0,
      loginTimeout: 1000,
      spinStartTimer: null,
      loginBtClass: "login-btn",
    };
  },
  mounted() {
    // on view load, we load cache
    localStorage.removeItem("token"); // delete token

    if (localStorage.username) {
      this.email = localStorage.username;
      this.password = localStorage.password;
    }
  },
  methods: {
    trylogin() {
      if (this.loginStep === "") {
        // start logo's animation
        this.logoAnimClass = "loginlogo spin-start";
        this.loginStart = window.performance.now();
        this.spinStartTimer = window.setTimeout(() => {
          this.logoAnimClass = "loginlogo spin-loop";
        }, 1000);

        // call login api
        this.$axios
          .post(this.$apiUrl, {
            route: "authPro",
            cmd: "login",
            usr: this.email,
            pwd: this.password,
          })
          .then((response) => {
            // this.data = response.data
            if (response.data.error === "nok") {
              // login error
              this.stopLoginLoader(true);
            } else {
              // login ok
              console.log(response);

              // cach the data for the next time the user open the page
              localStorage.username = this.email;
              localStorage.password = this.password;
              localStorage.tokenpro = response.data.auth.token;
              localStorage.userid = response.data.auth.id;
              // this.$store.state.user = response.data.auth
              localStorage.rights = response.data.auth.rights.split(",");

              localStorage.facilityID = 1;

              // var d = JSON.parse(JSON.stringify(response.data.auth))
              // this.$store.commit('setUser', { d })

              this.$axios.defaults.headers.common["api-key"] =
                response.data.auth.token;


              this.stopLoginLoader();
            }
          })
          .catch(() => {
            this.$q.notify({
              color: "negative",
              position: "top",
              message: "erreur de connexion",
              icon: "report_problem",
            });

            clearTimeout(this.spinStartTimer);
            this.spinStartTimer = null;
            this.logoAnimClass = "loginlogo spin-end";
          });
      }
    },
    stopLoginLoader(withError = false) {
      const min = this.loginStart + this.loginTimeout;
      const now = window.performance.now();

      if (min > now) {
        window.setTimeout(this.stopLoginLoader_force(withError), min - now);
      } else {
        this.stopLoginLoader_force(withError);
      }
    },
    stopLoginLoader_force(loginError = false) {
      clearTimeout(this.spinStartTimer);
      this.spinStartTimer = null;
      this.logoAnimClass = "loginlogo spin-end";

      if (loginError) {
        //
        this.loginBtClass = "login-btn loginError";
        setTimeout(() => {
          this.loginBtClass = "login-btn";
          this.$q.notify({
            color: "negative",
            position: "bottom",
            message: "erreur d'identification",
            icon: "fal fa-exclamation-triangle",
          });
        }, 1200);
      } else {
        // login successful, go to homepage
        this.loginBtClass = "login-btn loginSuccess animSuccess";

        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      }
    },
  },
};
</script>
