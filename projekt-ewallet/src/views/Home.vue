<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Top :title="title" :cardTitle="cardTitle" />
    <div
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @click="removeCard()"
    >
      <Card :card1="activeCard" />
    </div>
    <CardStack :cards="cards" />
    <button @click="clicker" class="cta">Add card</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack";
export default {
  name: "Home",
  components: {
    Top,
    Card,
    CardStack,
  },
  computed: {
    cards() {
      return this.$root.cards;
    },
    activeCard() {
      return this.cards.find((card) => card.active === true);
    },
  },
  data() {
    return {
      title: "WALLET",
      cardTitle: "Active card",
    };
  },
  methods: {
    clicker() {
      this.$router.push("/AddCard");
    },
    removeCard() {
      this.$root.removeActiveCard();
    },
  },
};
</script>

<style scoped>

button:hover {
  background: rgb(104, 103, 103);
  color: #ddd;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  color: rgb(0, 0, 0);
  box-sizing: border-box;
  text-decoration: none;
  border-width: 0.125rem;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-image: initial;
  border-radius: 0.5rem;
  margin: 2rem 0px;
  height: 4rem;
  width: 100%;
}
.topActive {
  cursor: pointer;
}
</style>





