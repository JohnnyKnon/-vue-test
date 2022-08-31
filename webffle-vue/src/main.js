import { createApp } from 'vue'
import App from './App.vue'


// Main Slider
import MainSlider from './components/slider-section'
import i18n from './i18n'

createApp(App).use(i18n).component(MainSlider.name, MainSlider)
createApp(App).use(i18n).mount('#app')
