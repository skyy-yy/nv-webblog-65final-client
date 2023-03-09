<template>
  <div>
    <h1>Get All Users</h1>
    <div>จํานวนผู้ใช้งาน {{ speaker.length }}</div>
    <div v-for="speaker in speaker" v-bind:key="speaker.id">
      <div>id: {{ speaker.id }}</div>
      <div>model: {{ speaker.model }}</div>
      <div>brand: {{ speaker.brand }}</div>
      <div>watt: {{ speaker.watt }}</div>
      <div>power_input: {{ speaker.power_input }}</div>
      <div>status: {{ speaker.status }}</div>
      <div>type: {{ speaker.type }}</div>
      <p>
        <button v-on:click="navigateTo('/speaker/' + speaker.id)">
          ดูข้อมูลผู้ใช้
        </button>
        <button v-on:click="navigateTo('/speaker/edit/' + speaker.id)">
          แก้ไขข้อมูล
        </button>
        <button v-on:click="deleteSpeaker(speaker)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import SpeakerServices from "@/services/SpeakerService";
export default {
  data() {
    return {
      speaker: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteSpeaker(speaker) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await SpeakerServices.delete(speaker);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.speaker = (await SpeakerServices.index()).data;
    }
  },
  async created() {
    this.speaker = (await SpeakerServices.index()).data;
  }
};
</script>
<style scoped></style>







