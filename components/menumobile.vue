<template>
    <div>
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
                        <a class="has-text-black has-text-weight-semibold" href="#">
                            بن کارت
                        </a>
                    </li>
                    <li class="my-4">
                        <a class="has-text-black has-text-weight-semibold" href="#">
                            پشتیبانی
                        </a>
                    </li>
                    <li class="my-4">
                        <a class="has-text-black has-text-weight-semibold" href="#">
                            خدمات به سازمان
                        </a>
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