<script setup>


import Sample from "@/models/sample";
import state from "@/store";
import { onMounted } from "vue";


onMounted(() => {
  Sample.objects.many()
    .then((qs) => {
      state.results = qs;
    })
    .catch((error) => {
      console.log(error);
    });
});

</script>

<template>
    <div class="container">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        TITLE
                    </h1>
                    <h2 class="subtitle" v-for="s in state.results">{{s}}</h2>
                </div>
            </div>
        </section>
    </div>
</template>
