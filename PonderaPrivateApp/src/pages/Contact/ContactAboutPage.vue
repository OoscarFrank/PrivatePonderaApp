<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ContactAbout",
  setup() {
    const epingler = ref(false);
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
      {
        nom: "AELLA",
        prenom: "Zala",
        numero: "0612345678",
        actual: 0,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "BELLA",
        prenom: "Zali",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "CELLA",
        prenom: "Zalu",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "DELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "EELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "FELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 0,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "GELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "HELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "IELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "JELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "KELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "LELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "MELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 0,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "NELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "OELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "PELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "QELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 0,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "RELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 0,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "SELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 0,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "TELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "UELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "VELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "WELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "XELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 1,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "YELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 0,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
      {
        nom: "ZELLA",
        prenom: "Zale",
        numero: "0612345678",
        actual: 0,
        programme: "Accompagnement Pondera Ballon",
        debut: "12/06/2022",
        fin: "12/06/2022",
        mail: "test@gmail.com",
        poids_perdu: "-15kg",
        en_cb_temps: "42 jours",
        old_meeting1: "15/07/2022",
        old_meeting2: "15/08/2022",
        old_meeting3: "15/09/2022",
        next_meeting1: "15/10/2022",
        next_meeting2: "15/11/2022",
        next_meeting1: "15/12/2022",
        birth_date: "11/05/1984",
        adresse_postale: "1 rue oui",
        city: "Mulhouse",
        cp: "68100",
      },
    ];
    for (const client of clients) {
      clientGroups[client.nom[0]].push(client);
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
      <q-btn flat style="font-size: 10px" class="q-mx-sm text-blue float-right"
        >modifier</q-btn
      >
      <q-card class="q-mx-sm" flat>
        <q-card-section class="text-center">
          <span class="text-bold" style="font-size: 18px">AZERTY Uiop</span>
          <br />
          <span> Accompagnement Pondera Ballon </span>
        </q-card-section>
        <q-card-section class="text-center">
          <span>15/07/2022 - - - - - - - - - - - - - - - - - - 15/07/2022</span>
        </q-card-section>
        <q-card-section class="text-center">
          <q-btn
            flat
            class="text-blue"
            style="font-size: 15px"
            href="telto:0612345678"
            >06 12 34 56 78</q-btn
          >
          <br />
          <q-btn
            flat
            class="text-blue"
            style="font-size: 15px"
            href="mailto:test@gmail.com"
            >test@gmail.com</q-btn
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
