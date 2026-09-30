<script>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="impressum">
        <div class="impressum__wrap">
            <h1>Impressum</h1>
            <p>Super Bro's GbR</p>
            <p>Oeder Weg 55-57 60318 Frankfurt</p>
            <p>Telefon: +49 (0) 6926497580</p>
            <p>Ust.Id.Nr. 30 94 801 33</p>
            <p>ciao@super-bros.de</p>
            <p>www.super-bros.de</p>
            <p>Inhaber:</p>
            <p>V. und P. Mazzella</p>
            <p>Haftungshinweis:</p>
            <span>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                Copyright / Urheberrechte:
                Die Internetpräsentation der Super Bro's GbR ist urheberrechtlich geschützt und umfasst das Layout, das Logo, die eigenen Bilder, Videos sowie die einzelnen Textbeiträge. Die Vervielfältigung von Informationen oder Daten, insbesondere die Verwendung von Texten, Textteilen oder Bildmaterial bedarf der vorherigen Zustimmung der Super Bro's GbR. Sofern nicht ausdrücklich anderslautend hinterlegt, liegt das Urheberrecht bei der Super Bro's GbR.
            </span>
            <RouterLink to="/">Zurück zur Startseite</RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.impressum {
    background-color: #000;
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        height: 100%;
    }

    &__wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 900px;
        width: 100%;

        @media screen and (max-width: 1024px) {
            max-width: none;

            p {
                font-size: 13px;
                margin: 10px 0;
            }

            span {
                font-size: 12px;
            }

            a {
                margin: 40px 0 !important; 
            }
        }
    }


    h1, p, span {
        color: #f0f0f0;
    }

    a {
        color: #FFBAC9;
        margin-top: 50px;
    }
}

</style>