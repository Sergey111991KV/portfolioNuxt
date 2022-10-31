<template>
  <div>
    WEBSDK
    <div id="sumsub-websdk-container"></div>
  </div>
</template>

<script>
import snsWebSdk from '@sumsub/websdk';

export default {
  name: 'IndexPage',
  beforeMount () {
    this.launchWebSdk('_act-b8ebfb63-5f24-4b89-9c08-5bbabeec986e')
  },
  methods: {
     launchWebSdk(accessToken, applicantEmail, applicantPhone, customI18nMessages) {
  let snsWebSdkInstance = snsWebSdk.init(
    accessToken,
    // token update callback, must return Promise
    // Access token expired
    // get a new one and pass it to the callback to re-initiate the WebSDK
    () => this.getNewAccessToken()
  )
    .withConf({
      lang: 'en', //language of WebSDK texts and comments (ISO 639-1 format)
      email: applicantEmail,
      phone: applicantPhone,
      i18n: customI18nMessages, //JSON of custom SDK Translations
      uiConf: {
        // customCss: "https://url.com/styles.css"
        // URL to css file in case you need change it dynamically from the code
        // the similar setting at Customizations tab will rewrite customCss
        // you may also use to pass string with plain styles `customCssStr:`
      },
    })
    .withOptions({ addViewportTag: false, adaptIframeHeight: true})
    // see below what kind of messages WebSDK generates
    .on('idCheck.stepCompleted', (payload) => {
      console.log('stepCompleted', payload)
    })
    .on('idCheck.onError', (error) => {
      console.log('onError', error)
    })
    .build();

  // you are ready to go:
  // just launch the WebSDK by providing the container element for it
  snsWebSdkInstance.launch('#sumsub-websdk-container')
},

 getNewAccessToken() {
  return Promise.resolve($NEW_ACCESS_TOKEN)// get a new token from your backend
}
  }
}
</script>


