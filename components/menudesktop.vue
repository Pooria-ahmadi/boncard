<template>
    <div>
        <div class="box is-hidden-mobile py-3">
      <div class="columns">
        <div class="column is-half py-0">
          <div class="navbar-start is-hidden-mobile ">
            <a class="pt-1" href="/">
              <img src="logo.png" class="logo" />
            </a>
            <NuxtLink class="navbar-item mr-6 has-text-weight-semibold" to="/boncard">
              بن کارت
            </NuxtLink>
            <NuxtLink to="/contactus" class="navbar-item has-text-weight-semibold">
              پشتیبانی
            </NuxtLink>
            <NuxtLink class="navbar-item has-text-weight-semibold" to="/Organization-services">
              خدمات به سازمان
            </NuxtLink>
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
    </div>
</template>