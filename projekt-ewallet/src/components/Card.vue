<!-- info om kort ex css från kortet add card -->
<template>
  <div>
    <article class="card" :class="card1.vendor">


      <header>
        <img v-if="card1.vendor === 'bitcoin'"
        src="../assets/chip-dark.svg"
        alt="evil"
        > 
        <img v-else src="../assets/chip-light.svg" alt="light"/>
        
        <img v-if="card1.vendor === 'bitcoin'"
        src="../assets/vendor-bitcoin.svg"/>
        
        <img v-else-if="card1.vendor === 'blockchain'" src="../assets/vendor-blockchain.svg" alt="blockchain"/>
        
        <img v-else-if="card1.vendor === 'ninja'" src="../assets/vendor-ninja.svg" alt="ninja"/>
        
        <img v-else-if="card1.vendor === 'evil'" src="../assets/vendor-evil.svg" alt="evil"/>

        
      </header> 
      <section class="number">
        {{ card1.number }}
      </section> 

      <section class="info"> 

        <aside class="holder">

          <span>Cardholder Name</span>

          <p>{{ card1.holder }}</p>

        </aside> 

        <aside class="valid">

          <span>Valid until</span>
          <p>{{ card1.Month }}/{{ card1.Year }}</p>

        </aside>


      </section>
    </article>
  </div>
</template>

<script>
export default {
  props: {
  card1: Object
  },

  computed: {
      card1holder() {
          return this.card.holder;
      },
      card1number() {
          return this.card1.number.match(/.{1,4}/g).join("");
      },
  },

};
</script>

<style scoped>


.card header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    grid-column: auto / span 2;
    grid-row: auto / span 2;
}

.card {
    max-width: 24rem;
    height: 14rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-shadow: rgba(255, 255, 255, 0.4) -1px -1px 2px;
    border-radius: 0.6rem;
    background: rgb(238, 238, 238);
    padding: 1rem;
    gap: 0.5rem 0;
    grid-template-columns:1fr 1fr;
    grid-auto-rows:2.8rem;
    text-shadow:-1px -1px 2px hsla(0,0%,100% / 40%);
}

.card header {
  align-self: flex-end;
  opacity: 1;
}



.card section aside p {
    display: block;
    text-transform: uppercase;
    margin: 0px;
    padding: 0px;
}

.card section.info,
.card section.number {
    display: flex;
    grid-column: auto / span 2;
    grid-row: auto / span 1;
}
.card section
.info aside.holder {
    flex: 1;
}
aside {
    display: block;
}
.card section.number {
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0;
  text-transform: uppercase;
}
.card section aside
.valid span {
    text-align: right;
}
.card section aside span {
    display: block;
    text-transform: uppercase;
    font-size: 0.7rem;
    margin: 0px 0px 0.25rem;
}
.card section aside.valid p {
    text-align: right;
}
.card section aside p {
    display: block;
    text-transform: uppercase;
    margin: 0px;
    padding: 0px;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

aside {
    display: block;
}

.evil {
    background: linear-gradient(248.3deg,rgba(0,0,0,.16),transparent),#f33355;color: #fff;
}
.blockchain {
    color: black;
    background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, transparent), rgb(139, 88, 249);
}
.bitcoin {
    background: linear-gradient(.689turn,hsla(0,0%,100%,.15),hsla(0,0%,100%,0) 99.07%),#ffae34;color: #222;
}
.ninja {
    background: linear-gradient(248.3deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0)),#222;color: #fff;
}

.blank {
    background: linear-gradient(237.75deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0)), rgb(208, 208, 208);
}

.h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.card header img {
  opacity: 0.8;
}

/*klar*/
</style>