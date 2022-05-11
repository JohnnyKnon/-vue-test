<template>
  <!-- Navigation -->
    <nav id="nav">
        <ul class="nav-box">
            <li class="toggle" @click="toggleOnOff" :class="{ isToggleActiveBtn: isToggleActive,}">
                <span class="top"></span>
                <span class="middle"></span>
                <span class="bottom"></span>
            </li>
            <li id="logo">
                <h1><a>webffle</a></h1>
            </li>
            <li id="members-btn">
                <a>MEMBERS</a>
                <i class="fas fa-users"></i>
            </li>
        </ul>
        <div class="darkscreen-off" :class="{isDarkScreenOn: isToggleActive,}"></div>
        <section class="nav-cotents-wrap" :class="{ isToggleActive: isToggleActive,}">
            <ul class="nav-items-wrap">
                <li class="nav-item">
                    <a class="top">Top</a>
                </li> 
                <li class="nav-item">
                    <a class="about">About Us</a>
                </li>    
                <li class="nav-item">
                    <a class="service">Service</a>
                </li>  
                <li class="nav-item">
                    <a class="develop">Develop</a>
                </li>
                <li class="nav-item">
                    <a class="contact">Contact Us</a>
                </li>   
            </ul>
            <span class="nav-copy">Copyright &copy; webffle 2022</span>
            <span class="nav-lang"><a @click="[$i18n.locale ='ko',toggleOnOff()]" >KR</a> / 
            <a @click="[$i18n.locale ='jp', toggleOnOff()]">JP</a> / 
            <a @click="[$i18n.locale ='en', toggleOnOff()]">EN</a></span>
        </section>
    </nav>
    <!-- main slider -->
    <div class="main">
        <main-slider></main-slider>
        <!-- main subinfo -->
        <main-sub-info></main-sub-info>
        <!-- main intro -->
        <main-intro></main-intro>
        <!-- main others -->
        <main-others></main-others>
    </div>
    <!-- Footer -->
    <footer-webffle></footer-webffle>

</template>

<script>
import MainSlider from './components/slider-section.vue'
import FooterWebffle from './components/footer.vue'
import mainSubInfo from './components/main-subinfo.vue'
import mainIntro from './components/main-intro.vue'
import mainOthers from './components/main-otherpages.vue'



export default {
  name: 'App',
  components: {
    MainSlider,
    FooterWebffle,
    mainSubInfo,
    mainIntro,
    mainOthers
  },
  data() {
    return {
          isToggleActive: false,
          isLanguageActive: [true, false, false],
    }
  },
  methods: {
    toggleOnOff(){
        if(!this.isToggleActive){
            this.isToggleActive = true;
        } else {
            this.isToggleActive = false;
        }
    },
  
  },
}
</script>


<style>
/* Variable */
  :root{
    /* font */
    --font-kr: 'Noto Sans KR', sans-serif;
    --font-eng: 'Raleway', sans-serif;
    --font-highlight: 'Palette Mosaic', cursive;
    /* weight */
    --weight-light: 300;
    --weight-regular: 400;
    --weight-medium: 500;
    --weight-bold: 700;
    --weight-black: 900;
    /* color */
    --main-color: #FF9B00;
    --bg-color: #FFF7ED;
    --scd-bg-color: #DFE0DF;
    --third-bg-color: #A6A9B0;
    --color-text: #524438;
    --color-highlight: #00D4B5;
    --color-dark-highlight: #009B81;
    --color-light-grey: rgb(201, 200, 200);
    --color-dark-grey: rgb(84, 84, 84);
    --color-black: #000;
    --color-white: #fff;
  }

  *{
    /* reset */
    margin: 0;
    padding: 0;
    /* box-size */
    box-sizing: border-box;
  }
  
  body{
    /* background */
    background-color: var(--bg-color) ;
    /* overflow */
    overflow-x: hidden;
    /* drag block */
    -webkit-user-select:none;
    -moz-user-select:none; 
    -ms-user-select:none;
    user-select:none;
  }

  body::-webkit-scrollbar{
      /* size */
      width: 5px;
  }
  body::-webkit-scrollbar-thumb{
      /* background */
      background-color: var(--color-highlight);
      /* border */
      border-radius: 10px;
  }
   body::-webkit-scrollbar-track{
      /* background */
      background-color: var(--color-black);
  }

  li{
    /* list */
    list-style: none;
  }

  a{
    /* text */
    text-decoration: none;
    /* cursor */
    cursor: pointer;
  }


    /* nav */
  #nav{
        /* position */
        position: fixed;
        /* size */
        width: 100vw; height: 60px;
        /* padding */
        padding: 10px 40px;
        /* background */
        background-color: var(--color-white);
        /* box shadow */
        -webkit-box-shadow: 0px 6px 5px -5px var( --scd-bg-color); 
        box-shadow: 0px 6px 5px -5px var( --scd-bg-color);
        /* flex */
        display: flex;
        justify-content: center;
        align-items: center;
        /* z-index */
        z-index: 1000;
    }
    .nav-box{
        /* size */
        width: 100%;
        /* flex */
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* z-index */
        z-index: 1000;
    }
    /* toggle */
    .toggle{
        /* position */
        position: relative;
        /* height */
        height: 100%;
        padding: 5px;
        /* cursor */
        cursor: pointer;
    }
    .toggle > span{
        /* display */
        display: block;
        /* size */
        width: 30px; height: 2px;
        /* background */
        background-color: var(--color-black);
        /* transition */
        transition: all 250ms ease-in-out;
    }
    .top, .middle{
        /* margin */
        margin-bottom: 5px;
    }
    /* hover */
    .toggle:hover .middle{
        /* size */
        height: 0;
        /* margin */
        margin: 0;
        /* opacity */
        opacity: 0;
    }
    .toggle:hover .top, .toggle:hover .bottom{
        /* margin */
        margin: 0;
    }
     /* on */
    .isToggleActiveBtn > span{
        /* background */
        background-color: var(--color-white);
    }
    .isToggleActiveBtn > .middle{
        /* display */
        display: none;
    }
    .isToggleActiveBtn > .top{
        /* margin */
        margin: 0;
        /* transfrom */
        transform: rotate(45deg);
    }
    .isToggleActiveBtn > .bottom{
        /* position */
        position: absolute;
        top: 5px;
        /* margin */
        margin: 0;
        /* transfrom */
        transform: rotate(-45deg);
    }
    /* logo */
    #logo{
        margin-top: -14px;
        /* font */
        font-family: var(--font-highlight);
        font-size: 1.5rem;
        color: var(--main-color);
        /* transition */
        transition: all 300ms ease-in-out;
    }

    #members-btn{
        /* position */
        position: relative;
        /* font */
        font-family: var(--font-eng);
        font-size: 0.8rem;
        /* padding */
        padding: 0 2px;
         /* transition */
        transition: all 250ms ease-in-out;
    }
    #members-btn > i {
        /* display */
        display: none;
    }
    #members-btn::before{
        content: "";
        /* position */
        position: absolute;
        bottom: -3px;
        left: 0;
        /* display */
        display: inline-block;
        /* size */
        width: 0%; height: 2px;
        /* background */
        background-color: var(--color-dark-highlight);
        /* transition */
        transition: all 250ms ease-in-out;
    }
    /* hover */
    #members-btn:hover, 
    #members-btn:focus{
        /* font */
        color: var(--color-dark-highlight);
    }
    #members-btn:hover::before,
    #members-btn:focus::before{
        /* size */
        width: 100%;
    }

    /* Reponsive */
    @media screen and (max-width: 600px) {
        #members-btn > a{
            /* display */
            display: none;
        }
        #members-btn > i{
            /* font */
            font-size: 1rem;
            /* display */
            display: inline-block;
        }
    }

    .darkscreen-off{
        /* position */
        position: fixed;
        top: 0;
        /* size */
        width: 100%; height: 100%;
        /* background */
        background-color: rgba(0, 0, 0, 0.5);
        /* opacity */
        opacity: 0;
        /* visible */
        visibility: hidden;
        /* transform */
        transition: all 500ms ease-in-out;
    }

    .isDarkScreenOn{
        /* opacity */
        opacity: 1;
        /* visible */
        visibility: visible;
    }

    /* nav contents */
    .nav-cotents-wrap{
        /* position */
        position: fixed;
        top: 0;
        left: 0;
        /* max-width */
        max-width: 400px;
        /* size */
        width: 100%; height: 100%;
        /* background */
        background-color: var(--main-color);
        /* flex */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* transform */
        transform: translateX(-1000px);
        /* transform */
        transition: all 500ms ease-in-out;
    }

    .isToggleActive{
        /* transform */
        transform: translateX(0px);
    }

    .nav-items-wrap{
        /* font */
        font-family: var(--font-eng);
        font-size: 2rem;
        
        /* size */
        width: 60%;
        /* padding */
        padding: 30px 0;
        /* border */
        border-bottom: 1px solid var(--color-white);
        /* flex */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 30px;
    }

    .nav-item{
        /* position */
        position: relative;
    }

    .nav-item > a{
        /* font */
        color: var(--color-white);
    }

     .nav-item::before{
        content: "";
        /* position */
        position: absolute;
        bottom: -5px;
        left: 0;
        /* display */
        display: inline-block;
        /* size */
        width: 0%; height: 2px;
        /* background */
        background-color: var(--color-white);
        /* transition */
        transition: all 250ms ease-in-out;
    }

    .nav-item:hover::before{
        /* size */
        width: 100%;
    }

    .nav-copy{
        /* font */
        font-family: var(--font-eng);
        font-size: 0.7rem;
        color: var(--scd-bg-color);
        /* size */
        width: 60%;
        /* padding */
        padding-top: 10px;
        /* flex */
        display: flex;
        justify-content: flex-end;
    }

    .nav-lang{
        /* font */
        font-family: var(--font-eng);
        font-size: 0.9rem;
        color: var(--color-white);
        /* size */
        width: 60%;
        /* padding */
        padding-top: 10px;
        /* flex */
        display: flex;
        justify-content: flex-end;
    }


   

</style>
