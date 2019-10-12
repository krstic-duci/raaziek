<template>
  <div class="sign__in__box">

    <the-header></the-header>

    <div class="section sign__in__box--centered">
      <div class="container">
        <div class="columns is-centered is-vcentered sign__in__wrapper">
          <div class="column">
            <h3>Create an account</h3>
            <form @submit.prevent="onSignIn">
              <!-- USER NAME -->
              <ValidationProvider
                rules="required|min:6|max:100|alpha"
                v-slot="{ errors }"
                tag="div"
                name="username"
                class="form__box is-relative"
              >
                <label
                  class="form__box__label"
                  for="sign-in-name"
                  :class="{'form__box__label--active': labelName}"
                >
                  Name
                </label>
                <input
                  v-model="signInName"
                  type="text"
                  id="sign-in-name"
                  class="form__box__input"
                  :class="{'form__box__input--active': labelName}"
                  @focus="onInputNameFocus"
                  @blur="onInputNameBlur"
                >
                <ul class="form__box__errors">
                  <li v-for="(error, i) in errors" :key="i" class="has-text-danger">
                    {{ error }}
                  </li>
                </ul>
              </ValidationProvider>

              <!-- EMAIL -->
              <ValidationProvider
                rules="required|email"
                v-slot="{ errors }"
                tag="div"
                name="email"
                class="form__box is-relative"
              >
                <label
                  class="form__box__label"
                  for="sign-in-email"
                  :class="{'form__box__label--active': labelEmail}"
                >
                  Email
                </label>
                <input
                  v-model="signInEmail"
                  type="email"
                  id="sign-in-email"
                  class="form__box__input"
                  :class="{'form__box__input--active': labelEmail}"
                  @focus="onInputEmailFocus"
                  @blur="onInputEmailBlur"
                >
                <ul class="form__box__errors">
                  <li v-for="(error, i) in errors" :key="i" class="has-text-danger">
                    {{ error }}
                  </li>
                </ul>
              </ValidationProvider>

              <!-- Password -->
              <ValidationProvider
                rules="required|min:6|max:50"
                v-slot="{ errors }"
                tag="div"
                name="user password"
                class="form__box is-relative"
              >
                <label
                  class="form__box__label"
                  for="sign-in-pass"
                  :class="{'form__box__label--active': labelPass}"
                >
                  Password
                </label>
                <input
                  v-model="signInPassword"
                  type="password"
                  id="sign-in-pass"
                  class="form__box__input"
                  :class="{'form__box__input--active': labelPass}"
                  @focus="onInputPassFocus"
                  @blur="onInputPassBlur"
                >
                <ul class="form__box__errors">
                  <li v-for="(error, i) in errors" :key="i" class="has-text-danger">
                    {{ error }}
                  </li>
                </ul>
              </ValidationProvider>

              <!-- reCaptcha -->
              <div class="recaptcha__box">
                <span>
                  This page is protected by reCAPTCHA, and subject to the
                  <br class="is-hidden-mobile"/>
                  <router-link to="/">
                    Privacy Policy
                  </router-link>
                  and
                  <router-link to="/">
                    Terms of service.
                  </router-link>
                </span>
              </div>

              <!-- Checkbox -->
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                tag="div"
                name="checkbox"
              >
                <input
                  v-model="signInChecked"
                  type="checkbox"
                  id="sign-in-checked"
                  class="form__box__input--checbox"
                >
                <label class="form__box__label--checkbox is-relative" for="sign-in-checked">
                  I agree to the company terms
                </label>
                <ul class="form__box__errors">
                  <li v-for="(error, i) in errors" :key="i" class="has-text-danger">
                    {{ error }}
                  </li>
                </ul>
              </ValidationProvider>

              <div class="is-flex button__wrapper">
                <!-- Create account -->
                <button class="has-text-white bg-navy-blue generic-btn">Create an account</button>
                <span>
                  or
                </span>
                <!-- Log In -->
                <button class="bg-silver txt-navy-blue generic-btn">Log In</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>

    <the-footer></the-footer>

  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'home',
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter
  },
  data () {
    return {
      signInName: '',
      signInEmail: '',
      signInPassword: '',
      signInChecked: false,
      labelName: false,
      labelEmail: false,
      labelPass: false
    }
  },
  methods: {
    onSignIn () {
      alert('submited')
    },
    // Input name field
    onInputNameFocus () {
      this.labelName = true
    },
    onInputNameBlur () {
      this.labelName = false
    },
    // Input email field
    onInputEmailFocus () {
      this.labelEmail = true
    },
    onInputEmailBlur () {
      this.labelEmail = false
    },
    // Input password field
    onInputPassFocus () {
      this.labelPass = true
    },
    onInputPassBlur () {
      this.labelPass = false
    }
  }
}
</script>
