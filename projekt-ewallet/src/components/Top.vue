<template>
  <div>
    <header class="top"> 
      <h1>ADD NEW CARD</h1>
    <p class="card-type">{{Title}}</p>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    Title: String
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
.top p {
  -webkit-box-flex:1;
  -ms-flex:1;
  flex:1;
  font-size:.8rem;
  font-weight:600;
  color:rgba(0,0,0,.4);
  padding:.25rem}
  

.top h1,.top p{
  text-align:center;
  margin:0}

.top h1{
  -webkit-box-flex:2;
  -ms-flex:2;
  flex:2;
  line-height:2rem;
  font-size:2rem;
  padding:1.5rem 0}

.top{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  text-transform:uppercase}




</style>