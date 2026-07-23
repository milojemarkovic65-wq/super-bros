<template>
    <div class="story">
        <div class="story_title">
            <h2>Unser Story</h2>
        </div>
    
        <div class="story_wrap">
            <div class="story_wrap__img"><img src="/Super_bros_story.avif" alt=""></div>
            <div class="story_wrap__text">
                <p>Unser Urgroßopa, ursprünglich Neapolitaner, heiratete eine Kalabresin. Aus dieser Vereinigung entsprangen nicht nur viele Bambini, sondern auch etliche kulinarische Leckerbissen… Geboren und aufgewachsen in Frankfurt am Main, verbrachten wir unsere Ferien immer bei unserer Familie im sonnigen Kalabrien. Dort diente das Essen nicht nur dem Zweck, satt zu werden. Es war vielmehr ein gesellschaftliches Ereignis, das mit Freunden und Nachbarn zelebriert wurde. Während unsere Eltern die Hauptspeise zubereiteten, meistens Pasta mit selbstgemachter Tomatensauce, zauberte unser Papanonno seine berühmt berüchtigte Pizza mit ausgewählten und frischen Zutaten. Dieses Stück Heimat haben wir uns auch in Deutschland bewahrt, und bringen unsere Tradition und das damit verbundene Lebensgefühl in das schöne Frankfurt. Wir sind Zuhause im Nordend (since 2017)sowie im Westend (since 2024). Orte der Geselligkeit und des Genießens.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.story {
    background-color: #f0f0f0;
    padding: 50px 20px;
}

.story_title {
    font-size: 48px;
    text-decoration: underline;

    h2 {
        margin: 0 0 20px;
    }
}

.story_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    &__img {
        flex: 1;
        // width: 450px;

        img {
            width: 100%;
        }
    }

    &__text {
        flex: 1;

        p {
            font-size: 20px;
        }
    }
}
</style>