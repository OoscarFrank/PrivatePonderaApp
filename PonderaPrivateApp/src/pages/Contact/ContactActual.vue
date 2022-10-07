<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ContactActual",
  setup() {
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
      { nom: "AELLA", prenom: "Zala", actual: "true" },
      { nom: "BELLA", prenom: "Zali", actual: "true" },
      { nom: "CELLA", prenom: "Zalu", actual: "true" },
      { nom: "DELLA", prenom: "Zale", actual: "true" },
      { nom: "EELLA", prenom: "Zale", actual: "true" },
      { nom: "FELLA", prenom: "Zale", actual: "false" },
      { nom: "GELLA", prenom: "Zale", actual: "true" },
      { nom: "HELLA", prenom: "Zale", actual: "true" },
      { nom: "IELLA", prenom: "Zale", actual: "true" },
      { nom: "JELLA", prenom: "Zale", actual: "true" },
      { nom: "KELLA", prenom: "Zale", actual: "true" },
      { nom: "LELLA", prenom: "Zale", actual: "true" },
      { nom: "MELLA", prenom: "Zale", actual: "false" },
      { nom: "NELLA", prenom: "Zale", actual: "true" },
      { nom: "OELLA", prenom: "Zale", actual: "true" },
      { nom: "PELLA", prenom: "Zale", actual: "true" },
      { nom: "QELLA", prenom: "Zale", actual: "false" },
      { nom: "RELLA", prenom: "Zale", actual: "false" },
      { nom: "SELLA", prenom: "Zale", actual: "false" },
      { nom: "TELLA", prenom: "Zale", actual: "true" },
      { nom: "UELLA", prenom: "Zale", actual: "true" },
      { nom: "VELLA", prenom: "Zale", actual: "true" },
      { nom: "WELLA", prenom: "Zale", actual: "true" },
      { nom: "XELLA", prenom: "Zale", actual: "true" },
      { nom: "YELLA", prenom: "Zale", actual: "false" },
      { nom: "ZELLA", prenom: "Zale", actual: "false" },
    ];
    for (const client of clients) {
      clientGroups[client.nom[0]].push(client);
    }
    return {
      ActualOnly: () => {
        router.push("/ContactActual");
      },
      ShowAllContact: () => {
        router.push("/ContactAll");
      },
      clientGroups,
      clients,
    };
  },
});
</script>

<template>
  <q-page>
    <div class="bg-white" />
    <div class="fixed-top bg-white" style="z-index: 999">
      <q-toolbar>
        <q-btn round class="q-mx-sm" icon="person" color="blue" />
        <q-btn round class="q-mx-sm" icon="history" />
        <q-btn round class="q-mx-sm" icon="event" />
        <q-btn round class="q-mx-sm" icon="wallet" />
        <q-space />
        <!-- <q-btn round class="q-mx-sm" icon="more_vert" /> -->

        <q-btn-dropdown dropdown-icon="more_vert">
          <q-list>
            <q-item
              clickable
              v-close-popup
              class="text-center"
              @click="ActualOnly()"
            >
              <q-item-section>
                <q-item-label>Clients actifs</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="ShowAllContact()">
              <q-item-section>
                <q-item-label>Tous les clients</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </div>
    <div style="position: relative; top: 70px" class="shadow-3 q-pa-sm">
      <q-input outlined label="Rechercher">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div style="position: relative; top: 78px">
      <q-list
        dense
        separator
        v-for="(group, index) in clientGroups"
        :key="index"
      >
        <q-item
          class="bg-primary text-bold"
          style="height: 16px; font-size: 18px"
        >
          <span>{{ index }}</span>
        </q-item>
        <q-item clickable v-ripple v-for="client in group" :key="client">
          <span class="q-ma-sm">{{ client.nom }}</span>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>
