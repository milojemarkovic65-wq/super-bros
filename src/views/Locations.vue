<script setup>
import { ref } from 'vue'

const isOpen = ref(false);
const salateModal = ref(false);
const desertModal = ref(false);

const pdfUrl = ref('/public/menu.pdf');
</script>

<template>
    <div class="locations_section">
        <h2>Locations</h2>
        <div class="locations_section_oderweg">
            <div class="locations_section_oderweg__workdays">
                <h3>Oeder Weg</h3>
                <p>Oeder Weg 55-57</p>
                <p>60318 Frankfurt am Main</p>
                <p>069-26497580</p>
                <p>Unsere Öffnungzeiten:</p>
                <p>Herbst / Winter</p>
                <p>Dienstag - Donnerstag von 16:00 bis 22:00 Uhr</p>
                <p>Freitag von 16:00 bis 23:00 Uhr</p>
                <p>Samstag  von 14.00 bis 23.00 Uhr</p>
                <p>Sonntag von 14.00 bis 22.00 Uhr</p>
                <p>Montag ist Ruhetag</p>

                <p>Tischreservierungen sind bei uns leider nicht möglich.</p>
            </div>

            <div class="locations_section_oderweg__menu">
                <a @click="isOpen = true">Getränke & Speisekarte</a>
            </div>
        </div>

        <div class="locations_section_grunebur">
            <div class="locations_section_grunebur__menu">
                <a @click="isOpen = true">Getränke & Speisekarte</a>
                <a @click="salateModal = true">SALATE</a>
                <a @click="desertModal = true">DESSERT</a>
            </div>


            <div class="locations_section_grunebur__workdays">
                <h3>Grüneburgweg</h3>
                <p>Grüneburgweg 78 / Parkstrasse 1</p>
                <p>60322 Frankfurt am Main</p>
                <p>069-21029842</p>
                <p>Dienstag - Donnerstag von 12:00 bis 22:00 Uhr</p>
                <p>Freitag von 12:00 bis 23:00 Uhr</p>
                <p>Samstag  von 14.00 bis 23.00 Uhr</p>
                <p>Sonntag von 14.00 bis 22.00 Uhr</p>
                <p>Montag ist Ruhetag</p>

                <p>Tischreservierungen ab 6 Personen sind möglich. Bitte senden Sie Ihre Anfrage per E-Mail an Luca@super-bros.de</p>
            </div>

        </div>
    </div>

    <Teleport to="body">
        <div v-if="isOpen" class="modal-overlay" @click="isOpen = false">
            <div class="modal-content" @click.stop>
                <button @click="isOpen = false">X</button>
                <iframe :src="pdfUrl" width="100%" height="500px"></iframe>
            </div>
        </div>
    </Teleport>

    <Teleport to="body">
        <div v-if="salateModal || desertModal" class="modal-overlay" @click="(salateModal = false) || (desertModal = false)">
            <div class="salate-desert-modal-content" @click.stop>
                <div v-if="salateModal">
                    <button @click="salateModal = false">X</button>
                    <h4>SALATE</h4>
                    <p>BURRATA LOVER -17,5-</p>
                    <p>Rucola , Burrata, Bunte Kirschtomaten, Basilikum, Tropea Zwiebeln, Karamellisierte Pflaumen, Haselnüsse, Chili-Balsamico Creme</p>
    
                    <hr>

                    <p>FINOCCHIO E ARANCIA -16,5-</p>
                    <p>Wildkräutersalat, Fenchel, Chiliflocken, Orangen, Minze, Granatapfel, Chili- Mango Creme</p>
    
                    <hr>

                    <p>TROPEANA -14,5-</p>
                    <p>Tomaten, Thunfisch, Kapern, Tropea Zwiebeln, Oliven, Basilikum, Oregano, Balsamico Creme</p>
                </div>

                <div v-else>
                    <button @click="desertModal = false">X</button>
                    <h4>DESSERT</h4>
                    <p>SMASH CANNOLO -9-</p>
                    <p>Cannolo Kekse / Ricotta Creme / Pistazienreme / Waldfrüchte / Puderzucker</p>
    
                    <hr>
                    
                    <p>LOTUS CHEESECAKE (VEGAN) -9-</p>
                    <p>Lotus Kekse / Butter / Frischkäse / Sahne / Lotus Karamell Creme</p>

                    <hr>
    
                    <p>TIRAMISU AL PISTACCHIO -9-</p>
                    <p>Savoiardi Kekse / Kaffee / Mascarpone / Pistazien Creme / Kakao Pulver</p>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.locations_section {
    background-color: #f0f0f0;
    // text-align: center;

    h2 {
        margin: 0 0 30px 20px;
        font-size: 38px;
        text-decoration: underline;
    }
}

.locations_section_oderweg,
.locations_section_grunebur {

    display: flex;
    justify-content: center;
    align-items: center;

    &__workdays {
        background-color: #000;
        width: 100%;
        text-align: center;
        padding: 0 15px;

        h3,p {
            color: #f0f0f0;
        }

        h3 {
            font-size: 28px;
            text-decoration: underline;
        }
    }

    &__menu {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;

        a {
            font-size: 24px;
            cursor: pointer;
            transition: all .3s;
        }
        a:hover {
            color: #000000b8;
        }
    }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #000;
  text-align: right;
  padding: 5px;
  border-radius: 8px;
  max-width: 900px;
  width: 100%;
}

.salate-desert-modal-content {
    background: #000;
    text-align: center;
    padding: 5px;
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    height: fit-content;
    position: relative;

    button {
        position: absolute;
        right: 5px;
        top: 5px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    
    h4 {
        font-size: 22px;
    }

    h4, p, button {
        color: #f0f0f0;
    }

    hr {
        width: 60%;
    }
}
</style>