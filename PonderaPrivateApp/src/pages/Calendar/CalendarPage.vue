<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CalendarPage",
  setup() {
    const actualOnly = ref(false);
    const router = useRouter();
    var clientGroups = {
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
    };
    var clientGroupsActual = {
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
    };
    var clients = [
      { nom: "AELLA", prenom: "Zala", actual: 0 },
      { nom: "AELLA", prenom: "Zale", actual: 0 },
      { nom: "BELLA", prenom: "Zali", actual: 1 },
      { nom: "BELLA", prenom: "Zala", actual: 1 },
      { nom: "CELLA", prenom: "Zalu", actual: 1 },
      { nom: "CELLA", prenom: "Zala", actual: 1 },
      { nom: "DELLA", prenom: "Zale", actual: 1 },
      { nom: "EELLA", prenom: "Zale", actual: 1 },
      { nom: "FELLA", prenom: "Zale", actual: 0 },
      { nom: "GELLA", prenom: "Zale", actual: 1 },
      { nom: "HELLA", prenom: "Zale", actual: 1 },
      { nom: "IELLA", prenom: "Zale", actual: 1 },
      { nom: "JELLA", prenom: "Zale", actual: 1 },
      { nom: "KELLA", prenom: "Zale", actual: 1 },
      { nom: "LELLA", prenom: "Zale", actual: 1 },
      { nom: "MELLA", prenom: "Zale", actual: 0 },
      { nom: "NELLA", prenom: "Zale", actual: 1 },
      { nom: "OELLA", prenom: "Zale", actual: 1 },
      { nom: "PELLA", prenom: "Zale", actual: 1 },
      { nom: "QELLA", prenom: "Zale", actual: 0 },
      { nom: "RELLA", prenom: "Zale", actual: 0 },
      { nom: "SELLA", prenom: "Zale", actual: 0 },
      { nom: "TELLA", prenom: "Zale", actual: 1 },
      { nom: "UELLA", prenom: "Zale", actual: 1 },
      { nom: "VELLA", prenom: "Zale", actual: 1 },
      { nom: "WELLA", prenom: "Zale", actual: 1 },
      { nom: "XELLA", prenom: "Zale", actual: 1 },
      { nom: "YELLA", prenom: "Zale", actual: 0 },
      { nom: "ZELLA", prenom: "Zale", actual: 0 },
    ];
    for (const client of clients) {
      clientGroups[client.nom[0]].push(client);
    }
    for (const clientActual of clients) {
      if (clientActual.actual === 1) {
        clientGroupsActual[clientActual.nom[0]].push(clientActual);
      }
    }
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
      actualOnly,
      clientGroups,
      clientGroupsActual,
    };
  },
});
</script>

<template>
  <q-page class="bg-grey-2">
    <!-- Top bar with buttons and options if it's available -->
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
          class="q-ml-sm shadow-2"
          size="17px"
          icon="event"
          @click="GoCalendarPage()"
        />
        <q-btn
          round
          flat
          color="blue"
          class="q-ml-sm"
          size="17px"
          icon="wallet"
          @click="GoWalletPage()"
        />
      </q-toolbar>
    </div>
  </q-page>
</template>
