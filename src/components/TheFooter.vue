<template>
  <footer class="has-text-centered-tablet">
    <div class="columns is-centered">

      <div class="column is-1-fullhd is-2-desktop is-half-mobile has-text-left is-inline-block-mobile footer__column">
        <p class="footer__column__headline">
          Company name
        </p>
          <span class="is-block">
            <router-link to="/">Home</router-link>
          </span>
          <span class="is-block">
            <router-link to="/">
              Pricing
            </router-link>
          </span>
          <span class="is-block">
            <router-link to="/">
              Features
            </router-link>
          </span>
      </div>

      <div class="column is-1-fullhd is-2-desktop is-half-mobile has-text-left is-inline-block-mobile footer__column">
        <p class="footer__column__headline">
          Support
        </p>
        <span class="is-block">
          <router-link to="/">
            FAQs
          </router-link>
        </span>
        <span class="is-block">
          <router-link to="/">
            Support
          </router-link>
        </span>
        <span class="is-block">
          <router-link to="/">
            Contact
          </router-link>
        </span>
      </div>

      <div class="column is-1-fullhd is-2-desktop is-half-mobile has-text-left is-inline-block-mobile footer__column">
        <p class="footer__column__headline">
          Company
        </p>
        <span class="is-block">
          <router-link to="/">
            About us
          </router-link>
        </span>
        <span class="is-block">
          <router-link to="/">
            Privacy policy
          </router-link>
        </span>
        <span class="is-block">
          <router-link to="/">
            Terms of service
          </router-link>
        </span>
      </div>

      <div class="column is-1-fullhd is-2-desktop is-half-mobile has-text-left is-inline-block-mobile footer__column">
        <p class="footer__column__headline">
          Social
        </p>
        <span class="is-block">
          <router-link to="/">
            Facebook
          </router-link>
        </span>
        <span class="is-block">
          <router-link to="/">
            Twitter
          </router-link>
        </span>
        <span class="is-block">
          <router-link to="/">
            Instagram
          </router-link>
        </span>
        <span class="is-block">
          <router-link to="/">
            Youtube
          </router-link>
        </span>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
