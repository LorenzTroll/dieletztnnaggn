<template>
     <div>
          <h1>Home page</h1>
          <router-link :to="{ name: 'Show', params: { id: '1'} }">Show #1</router-link>
      </div>
</template>