<template>
  <ion-img :src="image" :alt="title"></ion-img>
  <h2 class="ion-text-center">{{ title }}</h2>
  <p class="ion-text-center">{{ desc }}</p>
</template>

<script>
import { IonImg } from '@ionic/vue';

export default {
  components: { IonImg },

  props: ['image', 'title', 'desc'],
}
</script>