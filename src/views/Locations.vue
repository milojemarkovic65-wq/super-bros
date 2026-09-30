<script setup>
import { ref } from 'vue'

const menuModal = ref(false);
const openHoursModal = ref(false);

import menuPdf from '../../public/menu.pdf'
</script>

<template>
    <div class="location">
        <h2>Location</h2>
        <div class="location_section">
            <div class="location_section__location">
                <div>
                    <h3>Oeder Weg 55-57</h3>
                    <p>60318 Frankfurt am Main</p>
                    <p>069-26497580</p>
                </div>
            </div>

            <div @click="openHoursModal = true" class="location_section__workdays">
                <h3>Öffnungzeiten</h3>
            </div>

            <div @click="menuModal = true" class="location_section__menu">
                <h3>Getränke & Speisekarte</h3>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <div v-if="menuModal" class="modal-overlay" @click="menuModal = false">
            <div class="modal-content" @click.stop>
                <button @click="menuModal = false">X</button>
                <iframe :src="menuPdf" width="100%" height="500px" frameborder="0"></iframe>
            </div>
        </div>
    </Teleport>

    <Teleport to="body">
        <div v-if="openHoursModal" class="modal-overlay" @click="openHoursModal = false">
            <div class="open-hours-modal-content" @click.stop>
                <div v-if="openHoursModal">
                    <button @click="openHoursModal = false">X</button>

                    <h4>Unsere Öffnungzeiten</h4>
                    <p>Herbst / Winter</p>
                    <p>Dienstag - Donnerstag von 16:00 bis 22:00 Uhr</p>
                    <p>Freitag von 16:00 bis 23:00 Uhr</p>
                    <p>Samstag  von 14.00 bis 23.00 Uhr</p>
                    <p>Sonntag von 14.00 bis 22.00 Uhr</p>
                    <p>Montag ist Ruhetag</p>

                    <p>Tischreservierungen sind bei uns leider nicht möglich.</p>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.location {
    background-color: #f0f0f0;
    padding: 50px 0;
    overflow: hidden;

    h2 {
        margin: 0 0 50px 20px;
        font-size: 38px;
        text-decoration: underline;
        color: #FFBAC9;

        @media screen and (max-width: 1024px) {
            font-size: 30px;
            margin-left: 10px;
        }
    }
}

.location_section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &__location,
    &__workdays,
    &__menu {
        flex: 1;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform .3s;


        @media screen and (max-width: 1024px) {
            flex: none;
            width: 100%;

            p {
                font-size: 16px;
                margin: 0;
            }

            h3 {
                font-size: 20px !important;
                margin: 10px 0 10px 0;
            }
        }
    }

    &__location:hover,
    &__workdays:hover,
    &__menu:hover {
        transform: scale(1.05);

        @media screen and (max-width: 1024px) {
            transform: none;
        }
    }

    &__location {
        background-color: #fff;
        font-size: 20px;
        text-align: center;
    }

    &__workdays {
        background-color: #000;

        h3 {
            font-size: 28px;
            color: #f0f0f0;
        }
    }

    &__menu {
        background-color: #FFBAC9;

        h3 {
            font-size: 28px;
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

  @media screen and (max-width: 1024px) {
    max-width: none;
    width: 100%;
  }
}

.open-hours-modal-content {
    background: #161616;
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

        @media screen and (max-width: 1024px) {
            right: 8px;
        }
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

    @media screen and (max-width: 1024px) {
        max-width: none;
        width: 100%;
        border-radius: 0;
        max-height: 400px;
        height: 100%;

        p {
            font-size: 14px;
        }
    }
}
</style>