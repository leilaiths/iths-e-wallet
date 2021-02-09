<!-- alla inputs-->
<template>
<!-- här är min nya syntax  -->
<section> 
  <div id="app">
    <header class="top"> 
  <main id="add-card">
  <div class="about">
   <form class="card-form" @submit.prevent="clicker">

  <label for="Cardnumber" class="col-2"> CARD NUMBER</label>
    <input class="col-2" v-model="card1.number" maxlength="16" type="text" name="Cardnumber">
    
  <label for="Cardholder" class="col-2"> CARDHOLDER NAME</label>
    <input class="col-2" v-model="card1.holder" type="text" name="Cardholder">
    <div> 
  <label for="month" class="col-1">MONTH</label>
            <select
                name="month"
                v-model="card1.Month"
            >
                <option value=""></option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            </div>
            <div>
     <label for="year" class="col-1">YEAR</label>
     <select
                name="YEAR"
                v-model="card1.Year"
            >
                <option value=""></option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
            
            </select>
      </div>
     <label for="VENDOR" class="col-2">VENDOR</label>
     <select
                name="VENDOR" class="col-2"
                v-model="card1.vendor"
            >
                <option value="bitcoin">Bitcoin inc</option>
                <option value="blockchain">Blockchain inc</option>
                <option value="evil">Evil Crop</option>
                <option value="ninja">Ninja Bank</option>
            
            </select>
            
           <button class="col-2" v-on:click="selectVendor">Add card</button>
   </form>
  </div>   
   </main>
    </header>
   </div>
  </section>
  </template>

<script>

export default {
  props: {
  card1: Object,
  },
  methods: {
    clicker() {
      this.$emit("clicker");
      this.$router.push("/");
    },
    selectVendor() {
      this.$root.cards.vendor = this.card.vendor;
    },
  },

};
</script>

<style scoped>


 .card-form {
  
    margin: 2rem 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1rem;
}


.col-1 {
  grid-column: auto/span 1;
  padding: 1px 2px;
}

input {
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 2px;
  border-width: 2px;
  border-style: inset;
  border-image: initial;
}

.card-form label {
  padding: 0.25rem 0;
  font-size: 0.7rem;
  text-transform: uppercase;
}

.col-2 {
    grid-column: auto/span 2;
    padding: 1px 2px;
}

input[type="text" i] {
    padding: 1px 2px;
}

input.col-2 {
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: blue;
    display: inline-block;
    text-align: start;
    appearance: auto;
   
}


.card-form input,
select {
  border:1px solid #000;
  border-radius:.25rem;
  padding: 0.5rem;
  height: 2.6rem;
  margin: 0 0 .8rem;
  box-sizing:border-box;
  font-size:1rem;
  width:100%
  }

label{
cursor: default;
}

.cta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 4rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    border: .125rem solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: .5rem;
    margin: 2rem 0;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.card header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    grid-column: auto/span 2;
    grid-row: auto/span 2;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

header {
    display: block;

}


select:not(:-internal-list-box) {
  overflow: visible !important;
}
.card {
    max-width: 24rem;
    height: 14rem;
    border-radius: .6rem;
    background: #eee;
    padding: 1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 0 0.5rem rgb(0 0 0 / 40%);
    box-shadow: 0 0 0.5rem rgb(0 0 0 / 40%);
    display: grid;
    gap: .5rem 0;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 2.8rem;
    text-shadow: -1px -1px 2px hsl(0deg 0% 100% / 40%);
}

option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
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
}

button:hover {

  background:rgb(102, 100, 100);
  color: whitesmoke;
}

section {
  display: block;
}

select:not(:-internal-list-box) {
  overflow: visible !important;
}

.cta {
  background-color: black;
  color: white;
}

</style>
