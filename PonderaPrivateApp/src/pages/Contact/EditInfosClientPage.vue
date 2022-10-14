<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "EditInfosClient",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.client = to.query;
    });
  },
  setup() {
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
        router.go(-1);
        console.log("save");
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
  <q-page class="bg-primary">
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
      <q-list bordered separator class="q-mt-sm q-mx-sm bg-white">
        <q-item>
          <q-item-section>
            <span class="float-left">Nom :</span>
          </q-item-section>
          <q-item-section avatar>
            <q-input filled v-model="client.nom" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <span class="float-left">Prénom :</span>
          </q-item-section>
          <q-item-section avatar>
            <q-input filled v-model="client.prenom" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <span class="float-left">Mobile :</span>
          </q-item-section>
          <q-item-section avatar>
            <q-input filled v-model="client.mobile" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <span class="float-left">E-mail :</span>
          </q-item-section>
          <q-item-section avatar>
            <q-input filled v-model="client.mail" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <span class="float-left">Code postale :</span>
          </q-item-section>
          <q-item-section avatar>
            <q-input filled v-model="client.codepostal" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <span class="float-left">Commune :</span>
          </q-item-section>
          <q-item-section avatar>
            <q-input filled v-model="client.ville" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <span class="float-left">E-mail :</span>
          </q-item-section>
          <q-item-section avatar>
            <q-input filled v-model="client.rue" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <span class="float-left">Date de naissance :</span>
          </q-item-section>
          <q-item-section avatar>
            <q-input filled v-model="client.datenaissance" />
          </q-item-section>
        </q-item>
      </q-list>
      <div class="text-center">
        <q-btn flat class="q-ma-lg text-blue" @click="SaveModifications()"
          >Enregistrer</q-btn
        >
      </div>
    </div>
  </q-page>
</template>
