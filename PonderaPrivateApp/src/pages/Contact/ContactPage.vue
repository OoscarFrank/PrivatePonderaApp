<script>
import { defineComponent, getCurrentInstance } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ContactPage",
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
          console.log("that2222: ", that);
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
              clientGroups.value[client.nom[0].toUpperCase()].push(client);
            }
            for (const clientActual of clients.value) {
              if (clientActual.actual === 1) {
                clientGroupsActual.value[
                  clientActual.nom[0].toUpperCase()
                ].push(clientActual.toUpperCase());
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

    var inputSearch = ref("");
    const actualOnly = ref(false);
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
    var clientGroupsActual = ref({
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
      ActualOnly: () => {
        actualOnly.value = true;
      },
      ShowAllContact: () => {
        actualOnly.value = false;
      },
      GoAboutContactPage: () => {
        router.push("/ContactAbout");
        console.log("coucou");
      },
      clientGroups,
      clientGroupsActual,
      clients,
      actualOnly,
      inputSearch,
    };
  },
});
</script>

<template>
  <q-page>
    <div class="bg-white" />

    <!-- Top bar with buttons and options if it's available -->
    <div class="fixed-top bg-white shadow-2 q-pb-sm" style="z-index: 999">
      <q-toolbar>
        <q-btn
          round
          class="q-mx-sm"
          icon="person"
          color="blue"
          @click="GoContactPage()"
        />
        <q-btn round class="q-mx-sm" icon="history" @click="GoCallsPage()" />
        <q-btn round class="q-mx-sm" icon="event" @click="GoCalendarPage()" />
        <q-btn round class="q-mx-sm" icon="wallet" @click="GoWalletPage()" />
        <q-space />
        <q-btn-dropdown dropdown-icon="more_vert">
          <q-list>
            <q-item
              clickable
              v-close-popup
              class="text-center bg-grey-4"
              @click="ActualOnly()"
            >
              <q-item-section>
                <q-item-label>Clients actifs</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-close-popup
              @click="ShowAllContact()"
              class="text-center bg-grey-4"
            >
              <q-item-section>
                <q-item-label>Tous les clients</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </div>

    <!-- Serach bar to find a contact -->
    <div style="position: relative; top: 70px" class="shadow-3 q-pa-sm">
      <q-input outlined label="Rechercher" v-model="inputSearch">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <!-- Create list of contact when ActualOnly is disable -->
    <div style="position: relative; top: 78px" v-if="actualOnly === false">
      <q-list
        dense
        separator
        v-for="(group, index) in clientGroups"
        :key="index"
      >
        <q-item class="bg-primary">
          <q-item-section class="text-bold"> {{ index }} </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          v-for="client in group"
          :key="client"
          @click="GoAboutContactPage()"
        >
          <q-item-section>
            {{ client.nom }} {{ client.prenom }} {{ client.id }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <!-- Create list of contact when ActualOnly is enable -->
    <div style="position: relative; top: 78px" v-if="actualOnly === true">
      <q-list
        dense
        separator
        v-for="(group, index) in clientGroupsActual"
        :key="index"
      >
        <q-item class="bg-primary">
          <q-item-section class="text-bold"> {{ index }} </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          v-for="clientActual in group"
          :key="clientActual"
          @click="GoAboutContactPage()"
        >
          <q-item-section>
            {{ clientActual.nom }} {{ clientActual.prenom }}
            {{ clientActual.id }}</q-item-section
          >
        </q-item>
      </q-list>
    </div>

    <div
      class="fixed-right text-blue text-bold"
      style="z-index: 998; top: 145px"
    >
      <q-list
        clickable
        dense
        v-for="(group, index) in clientGroups"
        :key="index"
      >
        <q-btn flat class="text-bold" style="font-size: 10px; height: 10px">
          {{ index }}
        </q-btn>
      </q-list>
    </div>
  </q-page>
</template>
