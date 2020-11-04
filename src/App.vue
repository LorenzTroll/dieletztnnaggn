<template>
<div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'List' }">Übersicht</router-link>
</div>
<router-view />
</template>

<style>
html {
    width: 100vw;
}

body {
    margin: 0px;
    background-color: #FCDAD3;
    width: 100vw;
    display: flex;
    justify-content: center;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
    width: 100vw;
    height: auto;
}

#nav {
    display: flex;
    padding: 30px 0px 30px 30px;
    position: absolute;
    z-index: 1001;
    width: 90%;
    justify-content: flex-end;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
