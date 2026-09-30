<template>
    <div class="logo_wrap">
        <div class="logo_wrap__image">
            <img src="/857313.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
.logo_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    &__image {
        max-width: 100px;
        transform: scale(1);
        animation: pulse 2s infinite;
        
        img {
            width: 100%;
        }
    }

}
</style>