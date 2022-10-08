<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ContactAbout",
  setup() {
    var inputSearch = ref("");
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
    var clients = [
      { nom: "AELLA", prenom: "Zala", actual: 0 },
      { nom: "BELLA", prenom: "Zali", actual: 1 },
      { nom: "CELLA", prenom: "Zalu", actual: 1 },
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
    return {
      ActualOnly: () => {
        actualOnly.value = true;
      },
      ShowAllContact: () => {
        actualOnly.value = false;
      },
      GoAboutContactPage: () => {
        router.push("/ContactAbout");
      },
      GoBack: () => {
        router.go(-1);
      },
      clientGroups,
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
    <div class="fixed-top bg-white shadow-2 q-pb-sm" style="z-index: 999">
      <q-toolbar>
        <q-btn round class="q-mx-sm" icon="person" color="blue" />
        <q-btn round class="q-mx-sm" icon="history" />
        <q-btn round class="q-mx-sm" icon="event" />
        <q-btn round class="q-mx-sm" icon="wallet" />
        <q-space />
      </q-toolbar>
    </div>
    <div style="position: relative; top: 70px" class="q-ml-sm">
      <q-btn
        style="font-size: 10px"
        class="text-blue"
        round
        icon="arrow_back_ios_new"
        @click="GoBack()"
      ></q-btn>
    </div>
  </q-page>
</template>
