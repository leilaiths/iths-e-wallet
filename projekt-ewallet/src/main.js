import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({
  router,
  data(){
    return {
      cards: [
        {
        id: "1",
        holder: "Karlson påTaket",
        vendor: "evil",
        number: "1337800813378008",
        Month: "12",
        Year: "5",
        active: true,
        },
        {
        id: "2",
        holder: "Pippi Långstrump",
        vendor: "blockchain",
        number: "2628081506092703",
        Month: "12",
        Year: "5",
        active: false,
        },
        {
        id: "3",
        holder: "Emil iLönneberga",
        vendor: "bitcoin",
        number: "3532334425636152",
        Month: "12",
        Year: "5",
        active: false,
        },
        {
        id: "4",
        holder: "Ronja Rövardotter",
        vendor: "ninja",
        number: "5267103948965635",
        Month: "12",
        Year: "5",
        active: false,
        },
      ],
    }
  },
  methods: {
    setAddCard(data) {
      this.cards.push(data)
    },
    setActiveCard(id) {
      let activeTrue = this.cards.find(card => card.active === true);
      let activeId = this.cards.find(card => card.id === id);
      activeTrue.active = false
      activeId.active = true
    },
    removeActiveCard() {
      if(this.cards.length === 1) {
        alert('No Card')
      } else {
        let cardPlacement = this.cards.map(function(evt) {evt.active;}).indexOf(true);
        this.cards.splice(cardPlacement)
        this.cards[0].active = true;
      }
    },
  },
  render: h => h(App)
}).$mount('#app')