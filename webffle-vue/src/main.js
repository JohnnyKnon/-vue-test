import { createApp } from 'vue'
import App from './App.vue'


// Main Slider
import MainSlider from './components/slider-section'
import i18n from './i18n'

createApp(App).use(i18n).component(MainSlider.name, MainSlider)

// Footer
import Footer from './components/footer.vue'
createApp(App).use(i18n).component(Footer.name, Footer)

import mainSubInfo from './components/main-subinfo.vue'
createApp(App).use(i18n).component(mainSubInfo.name, mainSubInfo)

import mainIntro from './components/main-intro.vue'
createApp(App).use(i18n).component(mainIntro.name, mainIntro)

import mainOthers from './components/main-otherpages'
createApp(App).use(i18n).component(mainOthers.name, mainOthers)

import mainAbout from './components/main-about'
createApp(App).use(i18n).component(mainAbout.name, mainAbout)

createApp(App).use(i18n).mount('#app')
