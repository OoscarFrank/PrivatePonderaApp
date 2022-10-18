<script>
import { defineComponent, getCurrentInstance } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "EditInfosClient",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.client = window.selectedClient;
    });
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const that = getCurrentInstance();
    const $axios = that.appContext.app.config.globalProperties.$axios;
    const $q = that.appContext.app.config.globalProperties.$q;
    const $apiUrl = that.appContext.app.config.globalProperties.$apiUrl;

    const router = useRouter();
    var client = ref({
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
    });
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
      SaveModifications: () => {
        // push infos modified
        console.log("save");

        const updatedData = { ...client.value };
        const clientid = updatedData.id;

        delete updatedData.id;
        delete updatedData.attribution;
        delete updatedData.codeInstitute;
        delete updatedData.createTimestamp;
        delete updatedData.enabled;
        delete updatedData.note;
        delete updatedData.pinned;
        delete updatedData.programStartDate;
        delete updatedData.test;
        delete updatedData.newPwd;
        delete updatedData.datenaissance;

        $axios
          .post($apiUrl, {
            route: "user",
            cmd: "updateClient",
            userid: clientid,
            data: updatedData,
          })
          .then((response) => {
            Object.assign(window.selectedClient, updatedData);
            router.go(-1);

            /*
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
          */
          })
          .catch(() => {
            $q.notify({
              color: "negative",
              position: "top",
              message: "erreur",
              icon: "fal fa-exclamation-triangle",
            });
          });
      },
      GoBack: () => {
        router.go(-1);
      },
      client,
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
          class="q-ml-sm"
          size="17px"
          icon="wallet"
          @click="GoWalletPage()"
        />
      </q-toolbar>
    </div>

    <div style="position: relative; top: 84px">
      <q-btn
        style="font-size: 10px"
        class="text-blue q-mb-sm q-mx-sm"
        round
        icon="arrow_back_ios_new"
        @click="GoBack()"
      ></q-btn>
      <q-card flat class="q-mt-sm q-mx-sm bg-white">
        <q-list bordered separator>
          <q-item dense>
            <q-item-section avatar>
              <span class="float-left">Nom</span>
            </q-item-section>
            <q-item-section>
              <q-input
                input-class="text-right"
                dense
                borderless
                v-model="client.nom"
              />
            </q-item-section>
          </q-item>
          <q-item dense>
            <q-item-section avatar>
              <span class="float-left">Prénom</span>
            </q-item-section>
            <q-item-section>
              <q-input
                input-class="text-right"
                dense
                borderless
                v-model="client.prenom"
              />
            </q-item-section>
          </q-item>
          <q-item dense>
            <q-item-section avatar>
              <span class="float-left">Mobile</span>
            </q-item-section>
            <q-item-section>
              <q-input
                input-class="text-right"
                dense
                borderless
                v-model="client.mobile"
              />
            </q-item-section>
          </q-item>
          <q-item dense>
            <q-item-section avatar>
              <span class="float-left">E-mail</span>
            </q-item-section>
            <q-item-section>
              <q-input
                input-class="text-right"
                dense
                borderless
                v-model="client.mail"
              />
            </q-item-section>
          </q-item>
          <q-item dense>
            <q-item-section avatar>
              <span class="float-left">Code postale</span>
            </q-item-section>
            <q-item-section>
              <q-input
                input-class="text-right"
                dense
                borderless
                v-model="client.codepostal"
              />
            </q-item-section>
          </q-item>
          <q-item dense>
            <q-item-section avatar>
              <span class="float-left">Commune</span>
            </q-item-section>
            <q-item-section>
              <q-input
                input-class="text-right"
                dense
                borderless
                v-model="client.ville"
              />
            </q-item-section>
          </q-item>
          <q-item dense>
            <q-item-section avatar>
              <span class="float-left">Rue</span>
            </q-item-section>
            <q-item-section>
              <q-input
                input-class="text-right"
                dense
                borderless
                v-model="client.rue"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <div class="text-center">
        <q-btn flat class="q-ma-lg text-blue" @click="SaveModifications()"
          >Enregistrer</q-btn
        >
      </div>
    </div>
  </q-page>
</template>
