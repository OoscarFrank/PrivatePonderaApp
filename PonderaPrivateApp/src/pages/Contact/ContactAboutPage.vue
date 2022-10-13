<script>
import { defineComponent, getCurrentInstance } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { date } from "quasar";

export default defineComponent({
  name: "ContactAbout",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // vm.client = to.query;
      vm.client = window.selectedClient;
      vm.loadClient();
    });
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const that = getCurrentInstance();
    const $axios = that.appContext.app.config.globalProperties.$axios;
    const $q = that.appContext.app.config.globalProperties.$q;
    const $apiUrl = that.appContext.app.config.globalProperties.$apiUrl;

    const loadClient = function () {
      $axios.defaults.headers.common["api-key"] = localStorage.tokenpro;
      $axios
        .post($apiUrl, {
          route: "user",
          cmd: "getClientForMobileStaff",
          userid: client.value.id,
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
            clientInfo.value = response.data;
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

    var clientInfo = ref({
      weight: [
        {
          id: "27784",
          imcdate: "2022-09-15 14:35:47",
          size: null,
          weight: "89.70",
          id_customer: null,
          id_client: "4645",
          abdocircumference: null,
          bycoach: "0",
          fat: "45.00",
          water: "39.27",
          bone: "1.63",
          visceralFat: "-384.41",
          muscle: "47.71",
          rawdata: null,
        },
        {
          id: "28489",
          imcdate: "2022-10-12 07:43:09",
          size: null,
          weight: "86.00",
          id_customer: null,
          id_client: "4645",
          abdocircumference: null,
          bycoach: "0",
          fat: null,
          water: null,
          bone: null,
          visceralFat: null,
          muscle: null,
          rawdata: null,
        },
      ],
      extraFields: [],
      rdvs: [
        {
          id: "1873",
          date: "2022-09-15",
          id_eventtype: "31",
          id_resources: "s5",
          canceled: "0",
        },
      ],
      contract: {
        contratId: "302",
        start: "2022-09-15 00:00:00",
        end: "2023-03-15 00:00:00",
        type: "contratBallonEllipse",
        passed: "28",
        remaining: "153",
        duration: "181",
        progress: 0.15469613259668508,
      },
    });

    return {
      loadClient,
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
      formatDate: (dbDate) => {
        console.log("formatDate", dbDate);
        var str = date.formatDate(new Date(dbDate), "DD/MM/YYYY");

        return str;
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
      clientInfo,
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
          <span>{{ formatDate(clientInfo.contract.start) }} - 15/07/2022</span>
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
        <q-btn
          flat
          style="font-size: 10px"
          class="q-mx-sm float-right text-blue"
          >editer</q-btn
        >
        <q-card class="q-pa-sm q-ma-sm" flat>
          <q-input outline class="q-ma-sm" />
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
