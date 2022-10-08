<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const router = useRouter();
    return {
      LogIn: () => {
        router.push("/Contact");
      },
    };
  },
});
</script>

<template>
  <q-page>
    <q-btn @click="LogIn()">LogIn</q-btn>
  </q-page>
</template>
