<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model.trim="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img src=""></ion-img>
        </ion-thumbnail>
        <ion-button fill="clear" type="button" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take a Photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image Url</ion-label>
        <ion-input type="url" required v-model.trim="enteredImage" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea
          rows="5"
          type="text"
          required
          v-model.trim="enteredDescription"
        />
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Add & Save</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon,
  IonImg,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
import { Plugins, CameraResultType, CameraSource  } from '@capacitor/core';

const { Camera } = Plugins;

export default {
  emits: ["save-memory"],

  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail,
    IonIcon,
    IonImg,
  },

  data() {
    return {
      enteredTitle: "",
      enteredImage: "",
      enteredDescription: "",
      previewImageUrl: '',
      camera,
    };
  },

  methods: {
    submitForm() {
      const memoryData = {
        title: this.enteredTitle,
        imageUrl: this.enteredImage,
        description: this.enteredDescription,
      };
      this.$emit("save-memory", memoryData);
    },
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60
      });

      this.takenImageUrl = photo.webPath;
    }
  },
};
</script>
