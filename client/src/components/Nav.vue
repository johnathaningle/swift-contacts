<template>
    <div>
        <nav>
            <img src="../assets/icon.png" alt="">
            <h1>Welcome to Flack</h1>
        </nav>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
$small-padding: 10px;
$image-height: 50px;
$header-height: 60px;

img {
    height: $image-height;
    position: absolute;
    top: ($header-height - $image-height) /2;
    left: $small-padding;
}

h1 {
    position: relative;
    left: $image-height *1.5;
    top: $image-height / 4;
    font-size: $image-height / 2 !important; 
    font-family: "Lato", Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;   
}

    nav {
        background: #fff;
        height: $header-height;
        -webkit-box-shadow: 0px 1px 5px #b9b9b9;
        -moz-box-shadow: 0px 1px 5px #b9b9b9;
        box-shadow: 0px 1px 5px #b9b9b9;
    }
</style>