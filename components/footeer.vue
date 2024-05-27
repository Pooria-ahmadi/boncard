<template>
  <div class="font-family">
    <section>
      <div :class="{ 'phone-image': true, 'animate': animate }">
        <a href="tel:123456789">
          <img src="telephone-fixed.png" alt="پشتیبانی" />
        </a>
      </div>
      <hr class="mt-6">
      <div class="columns has-text-right has-background-light mx-0">
        <div class="column mr-6 mt-4 is-2">
          <h4 class="has-text-weight-medium">
            فروشگاه ما در فضای مجازی :
          </h4>
          <div class="mt-4">
            <img src="insta-logo2.png" alt="insta-logo2" class="apps-logo-one" />
            <img src="telegram-logo.png" alt="telegram-logo" class="apps-logo-two" />
          </div>
        </div>

        <div class="column mx-6 mt-4">
          <p class="has-text-info-dark has-text-weight-bold"> دسترسی سریع</p>
          <ul>
            <li class="my-4">
              <a href="/contactus" class="pr-4 has-text-grey-dark">تماس با ما</a>
            </li>
            <li class="my-4">
              <NuxtLink to="/aboutwe" class="pr-4 has-text-grey-dark"> درباره ما </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="column mx-6 mt-4">
          <p class="has-text-info-dark has-text-weight-bold"> راهنمای سایت </p>
          <ul>
            <li class="my-4">
              <NuxtLink to="/Rules" class="pr-4 has-text-grey-dark"> قوانین و مقررات </NuxtLink>
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
        استفاده از مطالب فروشگاه اینترنتی بن ایران برای مقاصد غیرتجاری و با ذکر منبع بلامانع است.
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animate: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.animate = false;
    }, 10000);
  }
}
</script>