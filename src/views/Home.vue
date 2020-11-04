<template>
<div class="landing-wrapper">
    <div class="image">
        <img :src="require(`@/assets/landing-image.png`)" alt="Vinyl player image">
    </div>
    <div class="landing-typo">
        <img :src="require(`@/assets/naggn-typo_test.svg`)" alt="Naggn typography">
    </div>
</div>
<div class="show-cards">
    <router-link :to="{ name: 'Show', params: { id: '1'} }">Show #1</router-link>
</div>
</template>

<style>
.landing-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    padding-bottom: 10%;
}

.image {
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 501;
    padding-left: 5%;
    overflow: hidden;
    width: 100vw;
    padding-top: 5%
}

.image img {
    width: clamp(39rem, 75vw, 50rem);
    height: auto;
}

.landing-typo {
    margin-top: -23%;
    padding-right: 15%;
    z-index: 1;
}

.landing-typo img {
    width: clamp(70rem, 160vw, 118rem);
    height: auto;
}

.show-cards {
    width: 100%;
}

@media (max-width: 1000px) {
    .image img {
        transform: rotate(10deg);
        padding-top: 25%;
    }

    .landing-typo img {
        transform: rotate(42deg);
        padding-left: 2%;
        padding-right: 10%;
        padding-bottom: 10%;
    }
}
</style>
