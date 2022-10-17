<script>
import { defineComponent, getCurrentInstance } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { date } from "quasar";

export default defineComponent({
  name: "AddMeeting",
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
    var formatted_date = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    const ActualDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    // console.log(ActualDate);
    return {
      date: ref(ActualDate),
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
      formatDate: (dbDate) => {
        // console.log("formatDate", dbDate);
        var str = date.formatDate(new Date(dbDate), "dddd D MMMM, YYYY");

        return str;
      },
      AddMeeting: () => {
        router.push("/AddMeeting");
      },
      client,
      clientInfo,
      clientGroups,
      loadClient,
      formatted_date,
      ActualDate,
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
      <div class="q-ma-sm text-center">
        <q-date v-model="date" flat today-btn color="blue" />
      </div>
      <div class="text-center text-blue q-ma-lg">
        <q-btn flat>Ajouter</q-btn>
      </div>
    </div>
  </q-page>
</template>
