<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=PT+Mono|Source+Sans+Pro:600,700&display=swap);

body{
  margin:0;
  box-sizing: border-box;
  }

#app{
  font-family:Avenir,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  font-family:PT Mono,monospace;
  padding:1rem;
  height:100vh;
  max-width:24rem;
  margin:0 auto;
  -webkit-box-sizing:border-box;
  box-sizing:border-box}

h1,h2,h3{
  font-family:Source Sans Pro,sans-serif}


.blank{
  background:linear-gradient(237.75deg,hsla(0,0%,100%,.24),hsla(0,0%,100%,0)),#d0d0d0}


.card section aside.valid span{
  text-align:right}

.card section aside.valid p{
  text-align:right}

.card section.info aside.holder{
  -webkit-box-flex:1;
  -ms-flex:1;flex:1}


a.cta{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  height:4rem;
  font-size:1.2rem;
  text-transform:uppercase;
  font-weight:700;
  text-decoration:none;
  color:#000;
  border:.125rem solid #000;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
  border-radius:.5rem;
  margin:2rem 0}
  
a.cta:hover{
  background:#000;
  color:#ddd}

a.cta:active{
  background:#000;color:#fff}

.card-form{
  margin:2rem 0 0;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:0 1rem}
  
.card-form label{
  padding:.25rem 0;
  font-size:.7rem;
  text-transform:uppercase}

  
.col-1{grid-column:auto/span 1}
.col-2{grid-column:auto/span 2}

</style>
