<script>
import { defineComponent, getCurrentInstance } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "RemindersPage",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.client = to.query;
    });
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const that = getCurrentInstance();
    const $axios = that.appContext.app.config.globalProperties.$axios;
    const $q = that.appContext.app.config.globalProperties.$q;
    const $apiUrl = that.appContext.app.config.globalProperties.$apiUrl;
    const loadClients = function () {
      $axios.defaults.headers.common["api-key"] = localStorage.tokenpro;
      $axios
        .post($apiUrl, {
          route: "user",
          cmd: "getClients",
        })
        .then((response) => {
          if (response.data.error === "nok") {
            $q.notify({
              color: "negative",
              position: "top",
              message: response.data.error,
              icon: "fal fa-exclamation-triangle",
            });
          } else {
            clients.value = response.data;
            for (const client of clients.value) {
              if (client.nom !== "") {
                clientGroups.value[client.nom[0].toUpperCase()].push(client);
              }
            }
          }
        })
        .catch(() => {
          $q.notify({
            color: "negative",
            position: "top",
            message: "erreur",
            icon: "fal fa-exclamation-triangle",
          });
        });
    };
    const router = useRouter();
    var clientGroups = ref({
      A: [],
      B: [],
      C: [],
      D: [],
      E: [],
      F: [],
      G: [],
      H: [],
      I: [],
      J: [],
      K: [],
      L: [],
      M: [],
      N: [],
      O: [],
      P: [],
      Q: [],
      R: [],
      S: [],
      T: [],
      U: [],
      V: [],
      W: [],
      X: [],
      Y: [],
      Z: [],
    });
    var clients = ref([
      {
        attribution: null,
        civility: "1",
        codeInstitute: "pondera",
        codepostal: "68200",
        country: "250",
        createTimestamp: "2017-03-21 11:07:57",
        datenaissance: "1980-01-01",
        enabled: "0",
        id: "206",
        lieunaissance: "",
        mail: "address@email.com",
        mobile: "0606060606",
        newPwd: "",
        nom: "NOM",
        pays: "FRANCE",
        paysnaissance: "",
        phone: "",
        prenom: "PRENOM",
        programStartDate: "2020-04-30 12:37:25",
        rue: "28, RUE DE THANN",
        test: "0",
        ville: "MULHOUSE",
      },
    ]);
    loadClients();
    return {
      GoContactPage: () => {
        router.push("/Contact");
      },
      GoCallsPage: () => {
        router.push("/RecentCallsPage");
      },
      GoCalendarPage: () => {
        router.push("/CalendarPage");
      },
      GoWalletPage: () => {
        router.push("/RemindersPage");
      },
      GoAboutContactPage: (selectedItem) => {
        const selectedClient = JSON.parse(JSON.stringify(selectedItem));
        console.log(selectedClient);
        window.selectedClient = { ...selectedClient };

        /*
        router.push({
          path: "/ContactAbout",
          query: { ...selectedClient },
        });
        */

        router.push("/ContactAbout");
      },
      clientGroups,
      clients,
    };
  },
});
</script>

<template>
  <q-page class="bg-grey-2">
    <div class="bg-white" />
    <div class="fixed-top bg-grey-2 q-pb-sm shadow-1" style="z-index: 999">
      <q-toolbar class="q-pa-sm">
        <q-btn
          flat
          round
          class="q-ml-sm"
          size="17px"
          icon="person"
          color="blue"
          @click="GoContactPage()"
        />
        <q-btn
          round
          flat
          color="blue"
          class="q-ml-sm"
          size="17px"
          icon="history"
          @click="GoCallsPage()"
        />
        <q-btn
          round
          flat
          color="blue"
          class="q-ml-sm"
          size="17px"
          icon="event"
          @click="GoCalendarPage()"
        />
        <q-btn
          round
          flat
          color="blue"
          class="q-ml-sm shadow-2"
          size="17px"
          icon="wallet"
          @click="GoWalletPage()"
        />
      </q-toolbar>
    </div>
    <div style="position: relative; top: 75px">
      <q-list
        class="bg-white"
        dense
        separator
        v-for="(group, index) in clientGroups"
        :key="index"
      >
        <template v-for="client in group" :key="client">
          <q-item
            clickable
            v-ripple
            v-if="client.pinned === '1'"
            @click="GoAboutContactPage(client)"
          >
            <q-item-section>
              {{ client.nom }} {{ client.prenom }}
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>
  </q-page>
</template>
