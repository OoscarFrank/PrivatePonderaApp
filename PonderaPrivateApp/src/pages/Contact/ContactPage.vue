<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ContactPage",
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
        console.log(clientGroupsActual.B);
      }
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
        <q-btn round class="q-mx-sm" icon="person" color="blue" />
        <q-btn round class="q-mx-sm" icon="history" />
        <q-btn round class="q-mx-sm" icon="event" />
        <q-btn round class="q-mx-sm" icon="wallet" />
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
        clickable
        v-for="(group, index) in clientGroups"
        :key="index"
        @click="GoAboutContactPage()"
      >
        <q-item
          class="bg-primary text-bold"
          style="height: 16px; font-size: 18px"
        >
          <span>{{ index }}</span>
        </q-item>

        <q-item v-ripple v-for="client in group" :key="client">
          <span class="q-ma-sm"> {{ client.nom }} {{ client.prenom }}</span>
        </q-item>
      </q-list>
    </div>

    <!-- Create list of contact when ActualOnly is enable -->
    <div style="position: relative; top: 78px" v-if="actualOnly === true">
      <q-list
        dense
        separator
        clickable
        v-for="(group, index) in clientGroupsActual"
        :key="index"
        @click="GoAboutContactPage()"
      >
        <q-item
          class="bg-primary text-bold"
          style="height: 16px; font-size: 18px"
        >
          <span>{{ index }}</span>
        </q-item>

        <q-item v-ripple v-for="clientActual in group" :key="clientActual">
          <span class="q-ma-sm">
            {{ clientActual.nom }} {{ clientActual.prenom }}</span
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

<!-- v-if="
actualOnly === false ||
(actualOnly === true && client.actual === 1)
" -->
