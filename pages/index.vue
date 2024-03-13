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
            <a class="has-text-black has-text-weight-semibold" href="#anali-card">
              بن کارت
            </a>
          </li>
          <li class="my-4">
            <a class="has-text-black has-text-weight-semibold" href="#iran-card">
              پشتیبانی
            </a>
          </li>
          <li class="my-4">
            <a class="has-text-black has-text-weight-semibold" href="#mashhad-card">
              خدمات به سازمان
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="box is-hidden-mobile py-3">
      <div class="columns">
        <div class="column is-half py-0">
          <div class="navbar-start is-hidden-mobile ">
            <a class="pt-1" href="/">
              <img src="logo.png" class="logo" />
            </a>
            <a class="navbar-item mr-6 has-text-weight-semibold" href="#anali-card">
              بن کارت
            </a>
            <a class="navbar-item has-text-weight-semibold" href="#iran-card">
              پشتیبانی
            </a>
            <a class="navbar-item has-text-weight-semibold" href="#mashhad-card">
              خدمات به سازمان
            </a>
          </div>

        </div>

        <div class="column is-half">
          <div class="navbar-end is-hidden-mobile">

            <a href="tel:09100036700" class="button is-info is-rounded ml-6 has-text-weight-bold" width="20%">
              <img src="icons8-support-64.png">
              <p class="pr-4">123456789</p>
            </a>
            <NuxtLink to="/login" class="button is-success is-hovered has-text-weight-bold">ثبت نام | ورود</NuxtLink>

          </div>
        </div>
      </div>
    </div>
    <div class="poster has-text-centered has-text-info-dark is-hidden-mobile">
      <img src="Cheese.jpg" alt="Cheese-poster" style="width: 100%;">
      <div class="centered is-size-2 has-text-weight-semibold">بن کارت</div>
    </div>
    <div class="is-hidden-desktop">
      <h1 class="has-text-centered is-size-4 has-text-info-dark is-hidden-deskto has-text-weight-semibold">
        بن کارت
      </h1>
      <div class="has-text-centered mt-6">
        <img src="header_bonus_card.png" alt="">
      </div>
    </div>
    <div class="columns is-centered mx-4 my-6 is-vcentered">
      <div class="column line-height-description has-text-justified is-two-fifths margin">
        <p class="is-size-3 mb-6 has-text-weight-semibold">
          بن کارت فروشگاه ...
        </p>
        <p class="is-size-5">
          بن کارت ایرانیان کارت الکترونیکی می‌باشد که سازمان‌ها، ارگان‌ها، و شرکت‌های دولتی و خصوصی می‌توانند مبالغ
          کمک‌های غیرنقدی اهدایی به کارکنان خود را به جای اینکه به صورت کالا و یا بن‌کارت‌های کاغذی ارائه دهند در این
          کارت شارژ نموده و بر حسب نیاز کارمندان خود، از فروشگاه‌های آنلاین و فیزیکی طرف قرارداد <strong>شرکت
            الف</strong> استفاده
          نمایند.
        </p>
      </div>
      <div class="column is-two-fifths margin">
        <div class="has-text-centered">
          <img src="boncard.png" alt="">
        </div>
      </div>
    </div>
    <div class="columns is-centered mx-4 my-6 is-vcentered">
      <div class="column is-two-fifths">
        <div class="has-text-centered">
          <img src="boncard.png" alt="">
        </div>
      </div>
      <div class="column line-height-description is-two-fifths margin">
        <p class="is-size-3 mb-6 has-text-weight-semibold">
          مزایای بن کارت فروشگاه
        </p>
        <ul class="is-size-5 line-height-description dot">
          <li>تسهیل در ارائه کمک‌های غیرنقدی به کارکنان</li>
          <li>امکان شارژ مجدد کارت در دفعات متعدد</li>
          <li>طراحی کارت با طرح و لوگوی اختصاصی سازمان</li>
          <li>امکان محدود کردن کارت در فروشگاه‌های خاص</li>
          <li>امکان شارژ کارت به صورت اعتباری</li>
        </ul>
      </div>
    </div>
    <h1 class="is-size-3 mb-6 has-text-weight-semibold has-text-centered">بن کارت</h1>
    <div class="columns is-justify-content-center mt-4 mx-0">
      <div class="column is-one-quarter mx-6">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="Cheese.jpg" alt="">
            </figure>
          </div>
          <div class="card-content has-text-centered">
            <p class="has-text-weight-semibold is-size-5" style="color: orange;">پکیج 1</p>
            <p class="mt-3">بن کارت</p>
<a href="/packone" class="button is-link is-rounded mt-6 has-text-weight-semibold">خرید </a>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter mx-6">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="Cheese.jpg" alt="">
            </figure>
          </div>
          <div class="card-content has-text-centered">
            <p class="has-text-weight-semibold is-size-5" style="color: orange;">پکیج 2</p>
            <p class="mt-3">بن کارت</p>
<a href="/" class="button is-link is-rounded mt-6 has-text-weight-semibold">خرید </a>
          </div>
        </div>
      </div>
    </div>
    <section>
      <hr>
      <div class="columns has-text-right has-background-light mx-0">
        <div class="column mx-6 mt-4">
          <p class="has-text-info-dark has-text-weight-bold"> دسترسی سریع</p>
          <ul>
            <li class="my-4">
              <a href="#" class="pr-4 has-text-grey-dark">تماس با ما</a>
            </li>
            <li class="my-4">
              <a href="#" class="pr-4 has-text-grey-dark"> درباره ما </a>
            </li>
          </ul>
        </div>
        <div class="column mx-6 mt-4">
          <p class="has-text-info-dark has-text-weight-bold"> راهنمای سایت </p>
          <ul>
            <li class="my-4">
              <a href="#" class="pr-4 has-text-grey-dark"> گارانتی محصول </a>
            </li>
            <li class="my-4">
              <a href="#" class="pr-4 has-text-grey-dark"> قوانین و مقررات </a>
            </li>
          </ul>
        </div>
        <div class="column mx-6 mt-4">
          <p class="has-text-info-dark has-text-weight-bold"> تماس با ما </p>
          <ul>
            <li class="my-4">
              <a href="#" class="pr-4 has-text-grey-dark"> تلفن : 123456789</a>
            </li>
            <li class="my-4">
              <a href="#" class="pr-4 has-text-grey-dark"> واتس آپ</a>
            </li>
          </ul>
        </div>
        <div class="column mx-6 pt-5">
          <p class="has-text-info-dark has-text-weight-bold"> ادرس : </p>
        </div>
      </div>
      <div class="columns has-background-light mx-0 mb-0  is-vcentered">
        <div class="column mx-6">
          <p class="has-text-weight-bold has-text-justified has-text-grey line-height-description ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
        <div class="column mx-6 mt-4">
          <div class="has-text-centered">
            <img src="starenamad.png" alt="">
            <img src="starenamad.png" alt="">
          </div>
        </div>
      </div>
      <div class="has-background-grey-dark has-text-white py-2 has-text-centered subtitle is-7 has-text-weight-normal">
        استفاده از مطالب فروشگاه اینترنتی دلیان برای مقاصد غیرتجاری و با ذکر منبع بلامانع است.
      </div>
    </section>
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
