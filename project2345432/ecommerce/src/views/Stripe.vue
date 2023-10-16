<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' @click="submit">Pay now!</button>
 
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import store from '../store'


export default {
  components: {
    StripeCheckout,
  },

  data () {
    // this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    this.publishableKey = "pk_test_51O0lh2JjnkxQvXhjSbpbo9WhO4Z7jppBFYSTDtzlFMzlQjRlx8d0pwTV4P1C62bvkFoBn8U7wnbbLCVDwkRw2nTM00NvEXNaNM";
    return {
     
      loading: true,
      lineItems:store.state.payment,
      // lineItems: [
      //   {
      //     price: 'price_1O19B1JjnkxQvXhjIksTQPDu', // The id of the one-time price you created in your Stripe dashboard
      //     quantity: 1,
      //   },
      //   {
      //     price: 'price_1O18UMJjnkxQvXhjHsV1EwQe', // The id of the one-time price you created in your Stripe dashboard
      //     quantity: 1,
      //   },
      // ],
      successURL: 'http://localhost:3001/success',
      cancelURL: 'http://localhost:3001/',
    };
  },
  methods: {
    

 
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>