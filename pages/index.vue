<template>
  <div class="font-family">
    <div class="slideshow-container m-auto">

<div v-for="(slide, index) in slides" :key="index" class="mySlides mx-0" v-show="index === currentSlide">
  <img :src="slide.image" alt="بن کارت" class="width-shadow-slider mx-0">
  <div class="tittle-on-poster has-text-info-dark">{{ slide.caption }}</div>
  <div class="subtittle-on-poster  has-text-gray">{{ slide.subtittle }}</div>
</div>
<a class="next has-text-white has-text-weight-bold is-size-6" @click="prevSlide">&#10094;</a>
<a class="prev has-text-white has-text-weight-bold is-size-6" @click="nextSlide">&#10095;</a>
</div>

<div class="has-text-centered mb-4 mx-0">
<span v-for="(dot, index) in slides" :key="index" class="dot" :class="{ 'active': index === currentSlide }" @click="changeSlide(index)"></span> 
</div>

    <div class="columns is-centered mx-4 my-6 is-vcentered" data-aos="fade-right">
      <div class="column line-height-description has-text-justified is-two-fifths margin">
        <h1 class="is-size-3 mb-6 has-text-weight-semibold ">
          بن کارت فروشگاه
        </h1>
        <p class="is-size-6">

          بنکارت، یک روش پرداخت الکترونیکی است که به افراد اجازه می‌دهد بدون نیاز به داشتن کارت اعتباری یا بانکی،
          پرداخت‌های آنلاین انجام دهند. این سرویس بر اساس شماره موبایل کاربران فعال می‌شود و از طریق پیامک یا
          اپلیکیشن‌های مختلف قابل استفاده است. با استفاده از بنکارت، افراد می‌توانند به راحتی و بدون نگرانی از سوء
          استفاده مالی، خریدهای آنلاین خود را انجام دهند و به خدمات مختلف دسترسی پیدا کنند.
        </p>
      </div>
      <div class="column is-two-fifths margin">
        <div class="has-text-centered">
          <img src="boncard.png" alt="">
        </div>
      </div>
    </div>
    <div class="columns is-centered mx-0 my-6 is-vcentered " data-aos="fade-left">
      <div class="column is-two-fifths">
        <div class="has-text-centered">
          <img src="boncard2.png" alt="">
        </div>
      </div>
      <div class="column line-height-description is-two-fifths margin">
        <p class="is-size-3 mb-6 has-text-weight-semibold">
          مزایای بن کارت فروشگاه
        </p>
        <ul class="is-size-6 line-height-description ">
          <li>مجزا از سیستم بانکی کشور</li>
          <li>دستگاه های متنوع</li>
          <li>انواع کارت RFID و NFC</li>
          <li>قابلیت چاپ اختصاصی کارت برای هر سازمان</li>
          <li>استفاده از کیف پول برای کاربران</li>
          <li>استفاده به عنوان کارت هدیه مناسبتی با طرح های دلخواه</li>
        </ul>
      </div>
    </div>
    <h1 class="is-size-3 mb-6 has-text-weight-semibold has-text-centered">بن کارت</h1>
    <div class="columns is-justify-content-center mt-4 mx-0">
      <div class="column is-one-quarter mx-6">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img src="gold-card.jpg" alt="">
            </figure>
          </div>
          <div class="card-content has-text-centered">
            <p class="has-text-weight-semibold is-size-5 has-text-info-dark">پکیج طلایی</p>
            <p class="mt-3"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            <NuxtLink to="/packone" class="button is-link is-rounded mt-6 has-text-weight-semibold">خرید </NuxtLink>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter mx-6">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img src="orange-card.jpg" alt="">
            </figure>
          </div>
          <div class="card-content has-text-centered">
            <p class="has-text-weight-semibold is-size-5 has-text-info-dark">پکیج نارنجی</p>
            <p class="mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>
            <NuxtLink to="/packone" class="button is-link is-rounded mt-6 has-text-weight-semibold">خرید </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered mx-4 my-6 is-vcentered">
      <div class="column line-height-description has-text-justified is-8 has-text-weight-semibold has-text-grey">
        <h1 class="is-size-3 mb-6 has-text-weight-semibold ">
         بهترین بن سازمانی
        </h1>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
        روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
        بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
        می طلبد
      </div>
    </div>
    <div class="columns is-centered mx-0 my-4" v-for="(item, index) in collapses">
      <a class="column is-two-thirds border-question-box">
        <div class="box has-background-grey-lighter">
          <div class="collapse-panel">
            <div class="collapse-header" @click="toggleCollapse(index)">
              <p class="is-size-6 has-text-weight-bold has-text-grey-dark">
                <span>
                  {{ item.titlecollaps }}
                </span>
                <img :src="item.isCollapsed ? '/up-arrow.png' : '/down-arrow.png'" alt="arrow-icon"
                  class="direction-img-left-question" />
              </p>
            </div>
            <div class="collapse-body mr-4 line-height-description"
              :class="{ 'collapse-transition': true, 'collapsed': item.isCollapsed, 'expanded': !item.isCollapsed }">
              <p>{{ item.subCollapse }}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentSlide: 0,
    slides: [
      { image: 'index-page.jpg', caption: 'تکنولوژی امن برای پرداخت' , subtittle:'روشی ساده و امن برای پرداخت آنلاین'},
      { image: 'header_bonus_card.jpg', caption: 'پرداخت با بن کارت', subtittle:'پرداخت آنلاین با استفاده از شماره موبایل.' },
    ],
    collapses: [
        { isCollapsed: true, titlecollaps: "به چه صورت می‌توانم بن کارت را خریداری کنم؟", subCollapse: "شما می‌توانید بن کارت را از فروشگاه‌های آنلاین یا فیزیکی، فروشندگان محلی، یا حتی بانک‌ها و موسسات مالی خریداری کنید." },
        { isCollapsed: true, titlecollaps: "چه مقدار اعتبار در بن کارت‌ها موجود است؟", subCollapse: "مقدار اعتبار در بن کارت‌ها متفاوت است و از چند دلار تا چند صد دلار می‌تواند متغیر باشد، به توجه به نوع بن کارت و محدودیت‌های آن." },
        { isCollapsed: true, titlecollaps: "آیا بن کارت‌ها قابل استفاده برای خرید آنلاین هستند؟", subCollapse: "بله، بن کارت‌ها به طور گسترده برای خرید آنلاین استفاده می‌شوند و معمولاً مشابه کارت اعتباری عمل می‌کنند." },
        { isCollapsed: true, titlecollaps: "آیا بن کارت ممکن است به صورت الکترونیکی تهیه شود؟", subCollapse: "بله، بن کارت معمولاً در قالب کدهای الکترونیکی یا پیامکی عرضه می‌شود که می‌توانید آنها را آنلاین یا از طریق پیامک دریافت کنید." },
     ],
    }
  },
  mounted() {
    this.showSlides();
  },
  methods: {
    toggleCollapse(index) {
      this.collapses[index].isCollapsed = !this.collapses[index].isCollapsed;
    },
    showSlides() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000);
    },
    changeSlide(index) {
      this.currentSlide = index;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }
  },
}
</script>

