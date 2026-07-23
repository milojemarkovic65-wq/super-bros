<template>
    <div class="locations_section">
        <!-- <h2>Locations section</h2> -->
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
                <a>Getränke & Speisekarte</a>
            </div>
        </div>

        <div class="locations_section_grunebur">
            <div class="locations_section_grunebur__menu">
                <a href="">Getränke & Speisekarte</a>
                <p>SALATE</p>
                <p>DESSERT</p>
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
</template>

<style lang="scss" scoped>
.locations_section_oderweg,
.locations_section_grunebur {

    display: flex;
    justify-content: center;
    align-items: center;

    &__workdays {
        background-color: #000;
        width: 100%;
        text-align: center;

        h3,p {
            color: #f0f0f0;
        }
    }

    &__menu {
        width: 100%;
        text-align: center;
    }
}


</style>