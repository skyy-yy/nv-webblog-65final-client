<template>
  <div>
    <h1>Edit Speaker</h1>
    <form v-on:submit.prevent="editSpeaker">
      <p>model: <input type="text" v-model="speaker.model" /></p>
      <p>brand: <input type="text" v-model="speaker.brand" /></p>
      <p>watt: <input type="text" v-model="speaker.watt" /></p>
      <p>power_input: <input type="text" v-model="speaker.power_input" /></p>
      <p>status: <input type="text" v-model="speaker.status" /></p>
      <p>type: <input type="text" v-model="speaker.type" /></p>
      <p><button type="submit">create speaker</button></p>
    </form>
    <hr />
    <div>
      <p>model: {{ speaker.model }}</p>
      <p>brand: {{ speaker.brand }}</p>
      <p>watt: {{ speaker.watt }}</p>
      <p>power_input: {{ speaker.power_input}}</p>
      <p>status: {{ speaker.status }}</p>
      <p>type: {{ speaker.type }}</p>
      <p></p>
    </div>
  </div>
</template>
<script>
import SpeakerService from "@/services/SpeakerService";
export default {
  data() {
    return {
      speaker: {
        model: "",
        brand: "",
        watt: "",
        power_input: "",
        status: "",
        type: "",
        status: "active"
      }
    };
  },
  methods: {
    async editSpeaker() {
      try {
        await SpeakerService.put(this.speaker);
        this.$router.push({
          name: "speaker"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let speakerId = this.$route.params.userId;
      this.speaker = (await SpeakerService.show(speakerId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
