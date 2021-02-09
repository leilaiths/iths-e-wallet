<template>
  <div>
    <ul>
      <li
        class="card-stack"
        v-for="card in cards"
        :key="card.id"
        @click="makeActiveCard(card.id)"
      >
        <Card :card1="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  props: {
    cards: Array,
  },
  components: {
    Card,
  },
  methods: {
    makeActiveCard(cardData) {
      this.$root.setActiveCard(cardData);
    },
  },
};
</script>

<style scoped>

div {
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
ul,
li {
  margin: 0px;
}
.card-stack {
  margin-top: -10rem;
  position: relative;
  width: 100%;
}
li:first-child {
  margin-top: 10%;
}
</style>