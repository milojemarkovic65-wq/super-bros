<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="footer_section">
        <div class="footer_section__social">
            <a target="_blank" href="https://www.instagram.com/superbrosfrankfurt/"><img src="/insta.png" alt=""></a>
            <a target="_blank" href="https://www.facebook.com/superbrosfrankfurt/"><img src="/face.webp" alt=""></a>
            <a target="_blank" href="https://wolt.com/de/deu/frankfurt/restaurant/super-bros"><img src="/wolt.png" alt=""></a>
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

    &__social {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin: 15px 0;

        a {
            max-width: 40px;
            img {
                width: 100%;
            }
        }
    }

    &__policy {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        a,p {
            text-decoration: none;
            color: #FFBAC9;
        }

        @media screen and (max-width: 1024px) {
            margin-top: 20px;
            flex-direction: column;
            gap: 10px;

            p {
                margin: 0;
            }
        }
    }
}
</style>