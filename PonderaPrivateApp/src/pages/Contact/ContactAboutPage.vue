<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "ContactAbout",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.client = to.query;
    });
  },
  setup() {
    const epingler = ref(false);
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
      ChangeInfosClientPage: (selectedItem) => {
        const selectedClient = JSON.parse(JSON.stringify(selectedItem));
        console.log(selectedClient);
        router.push({
          path: "/EditInfosClient",
          query: { ...selectedClient },
        });
      },
      client,
      epingler,
    };
  },
});
</script>

<template>
  <q-page class="bg-primary">
    <div class="bg-white" />
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
      </q-toolbar>
    </div>
    <!-- <div style="position: relative; top: 70px" class="q-ml-sm">
    </div> -->

    <div style="position: relative; top: 75px">
      <q-btn
        style="font-size: 10px"
        class="text-blue q-mb-sm q-mx-sm"
        round
        icon="arrow_back_ios_new"
        @click="GoBack()"
      ></q-btn>
      <q-btn
        flat
        style="font-size: 10px"
        class="q-mx-sm text-blue float-right"
        @click="ChangeInfosClientPage(client)"
        >modifier</q-btn
      >
      <q-card class="q-mx-sm" flat>
        <q-card-section class="text-center">
          <span class="text-bold" style="font-size: 18px"
            >{{ client.nom }} {{ client.prenom }}</span
          >
          <br />
          <span> Accompagnement Pondera Ballon </span>
        </q-card-section>
        <q-card-section class="text-center">
          <span>{{ client.programStartDate }} - - - - 15/07/2022</span>
        </q-card-section>
        <q-card-section class="text-center">
          <q-btn
            flat
            class="text-blue"
            style="font-size: 15px"
            href="telto:0612345678"
            >{{ client.mobile }}</q-btn
          >
          <br />
          <q-btn
            flat
            class="text-blue"
            style="font-size: 15px"
            href="mailto:test@gmail.com"
            >{{ client.mail }}</q-btn
          >
        </q-card-section>
      </q-card>
      <div class="q-mx-sm q-mt-sm">
        <span class="q-ma-sm float-left">- 42kg en 42 jours</span>
        <span class="q-ma-sm float-right">42 jours restants</span>
        <br />
        <br />
        <span class="q-ma-sm text-grey">Note</span>
        <q-card class="q-pa-sm q-ma-sm" flat>
          <q-input outlined class="q-ma-sm" />
        </q-card>
        <q-card class="q-pa-sm q-ma-sm" flat style="height: 55px">
          <span class="float-left q-ma-sm">Épingler</span>
          <q-toggle v-model="epingler" class="float-right" color="blue" />
        </q-card>
        <q-btn
          flat
          style="font-size: 10px"
          class="q-mx-sm float-right text-blue"
          >Ajouter un rendez-vous</q-btn
        >
        <q-list bordered separator class="q-mt-xl q-mx-sm bg-white">
          <q-item>
            <q-item-section>
              <span class="float-left text-blue">Jeudi 13 Octobre</span>
            </q-item-section>
            <q-item-section avatar>
              <span class="float-right text-blue">15h00</span>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <span>Jeudi 20 Octobre</span>
            </q-item-section>
            <q-item-section avatar>
              <span>15h00</span>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>
