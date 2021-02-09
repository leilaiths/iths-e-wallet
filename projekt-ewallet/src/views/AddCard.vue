<template>
  <div> 
    <Top :title="title" :cardTitle="cardTitle"/>
    <Card v-bind:card1="card"/>
     <CardForm v-bind:card1="card" v-on:clicker="addCard"/>
 
  </div>
</template> 

<script>
import Top from "../components/Top.vue"
import Card from "../components/Card.vue"
import CardForm from "../components/CardForm.vue"

export default {
  components: { CardForm, Top, Card },
   computed: {
    cardToSend() {
      return {
        id: Date.now(),
        holder: this.card.holder,
        vendor: this.card.vendor,
        number: this.card.number,
        Month: this.card.Month,
        Year: this.card.Year,
        active: false,
      };
    },
  },
  data () {
    return { 
         title: "ADD NEW CARD",
         cardTitle: "NEW CARD",
         card: {
          holder: "",
          vendor: "",
          number: "",
          Month: "",
          Year: "",
          },
        };
      },
methods: {
    addCard() {
      this.$root.setAddCard(this.cardToSend);
    },
    expiryDate() {
      return this.$root.form.Month;
    },
  },
};
</script>

<style>

</style>