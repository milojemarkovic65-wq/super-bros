<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="footer_section">
        <div class="footer_section__social">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
        </div>

        <div class="footer_section__policy">
            <!-- <a href="">Impressum</a> -->
            <RouterLink to="/impressum">Impressum</RouterLink>
            <a href="">Datenschutz</a>
            <p>©Super Bro's GbR</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer_section {
    background-color: #000;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>