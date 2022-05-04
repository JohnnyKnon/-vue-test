import { createApp } from 'vue'
import App from './App.vue'

// Navigation
import navWebffle from './components/nav-webffle'
createApp(App).use(i18n).component(navWebffle.name, navWebffle)

// Main Slider
import MainSlider from './components/slider-section'
import i18n from './i18n'

createApp(App).use(i18n).component(MainSlider.name, MainSlider)

// Footer
import Footer from './components/footer.vue'
createApp(App).use(i18n).component(Footer.name, Footer)





createApp(App).use(i18n).mount('#app')
