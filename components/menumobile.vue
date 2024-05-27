<template>
    <div class="font-family">
        <nav class="navbar is-transparent is-hidden-desktop">
            <div class="navbar-brand is-flex-direction-row-reverse box py-0">
                <a class="is-hidden-desktop" href="/">
                    <img src="logo.png" alt="logoagency">
                </a>
                <div class="navbar-burger" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="navbar-menu pr-6 is-hidden-desktop" :class="{ 'is-active': isMobileMenuOpen }">
                <ul>
                    <li class="my-4">
                        <NuxtLink class="has-text-black has-text-weight-semibold" to="/boncard">
                            بن کارت
                        </NuxtLink>
                    </li>
                    <li class="my-4">
                        <NuxtLink class="has-text-black has-text-weight-semibold" to="/contactus">
                            پشتیبانی
                        </NuxtLink>
                    </li>
                    <li class="my-4">
                        <NuxtLink class="has-text-black has-text-weight-semibold" to="/Organization-services">
                            خدمات به سازمان
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    }
}
</script>