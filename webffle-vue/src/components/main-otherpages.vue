<template>
    <section id="otherpages">
       <div class="otherpages-wrap">
           <div class="pages-title"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
           >
               <span>ALL</span>
                <h1>BRANDS</h1>
           </div>
           <div class="pages-item-wrap">
               <section id="webffle"
                data-aos="zoom-in-left"
                data-aos-delay="500"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine"
               
               >
                   <div class="images"><div class="images-items"></div></div>
                    <div class="other-info">
                        <h2>{{$t('message.othersinfoH2[2]')}}</h2>
                        <p>{{$t('message.othersinfoP[2]')}}</p>
                        <a href="#">Visit <i class="fas fa-angle-right"></i></a>
                    </div>
               </section>
                <section id="miya"
                    data-aos="zoom-in-left"
                    data-aos-delay="500"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-sine"
                >
                   <div class="images"><div class="images-items"></div></div>
                    <div class="other-info">
                        <h2>{{$t('message.othersinfoH2[0]')}}</h2>
                        <p>{{$t('message.othersinfoP[0]')}}</p>
                        <a href="#">Visit <i class="fas fa-angle-right"></i></a>
                    </div>
               </section>
               <section id="coa"
                   data-aos="zoom-in-left"
                    data-aos-delay="500"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-sine"
               >
                   <div class="images coa-coming"><h3>Coming Soon</h3></div>
                   <div class="other-info">
                       <h2>{{$t('message.othersinfoH2[3]')}}</h2>
                        <p>{{$t('message.othersinfoP[3]')}}</p>
                        <a href="#">Visit <i class="fas fa-angle-right"></i></a>
                   </div>
               </section>
               <div class="waffle-img"
                    data-aos="zoom-in-left"
                    data-aos-delay="500"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-sine"
               ></div>
           </div>
       </div>
    </section>
</template>

<script>

export default{
    name: 'main-others',
    data() {
        return {
            
        }
    },
    components:{

    }
}
</script>

<style>
    

    #otherpages{
        /* position */
        position: relative;
        /* padding */
        padding: 70px 0;
    }


    .pages-title{
        /* font */
        font-family: var(--font-eng);
        /* padding */
        padding-left: 15px;
    }
    .pages-title > span{
        /* font */
        font-weight: var(--weight-light);
        font-size: 1.5rem;
        color: var(--color-dark-highlight);
        /* position */
        position: relative;
    }
    .pages-title > span::after{
        /* content */
        content: "";
        /* position */
        position: absolute;
        left: -25px;
        top: 14px;
        /* size */
        width: 20px; height: 1px;
        /* background */
        background-color: var(--color-dark-highlight);
    }

    .pages-title > h1{
        /* font */
        font-size: 4.5rem;
        color: var(--main-color);
    }

    .otherpages-wrap{
        /* max-width */
        max-width: 1300px;
        /* size */
        width: 90%;
        /* margin */
        margin: 0 auto;
    }
    .pages-item-wrap{
        /* font */
        font-family: var(--font-kr);
        /* max-width */
        max-width: 1000px;
        /* size */
        width: 100%;
        /* margin */
        margin: 0 auto;
    }

    .pages-item-wrap >section{
        /* padding */
        padding-bottom: 60px;
    }

    .images{
        /* size */
        width: 100%; height: 100%;
        /* padding */
        padding: 50px 0;
        /* background */
        background-color: var(--color-white);
        /* border */
        border-radius: 10px;

    }

    .images-items{
        /* size */
        width: 100%; height: 70px;
    }

    /* webffle */
    #webffle{
        /* padding */
        padding-top: 60px;
    }
    
    #webffle > .images > .images-items{
        /* background */
        background: url("../../public/images/others/Webffle_Logo.jpg") no-repeat center/contain;
    }

    /* miya */
    #miya > .images > .images-items{
        /* background */
        background: url("../../public/images/others/miyadesign.jpeg") no-repeat center/contain;
    }

    /* COA */
    .coa-coming{
        /* flex */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .coa-coming > h3{
        /* font */
        font-size: 2rem;
        color: var(--color-dark-grey);
    }

    .other-info {
        /* padding */
        padding-top: 15px;
        padding-left: 10px;
    }
     .other-info > h2 {
         /* font */
         font-size: 1.8rem;
         color: var(--main-color);
     }

     .other-info > p{
         /* font */
         font-size: 0.9rem;
         color: var(--color-dark-grey);
         /* padding */
         padding: 4px 0;
     }

     .other-info > a {
         /* font */
         color: var(--color-dark-highlight);
         /* position */
         position: relative;
         /* padding */
         padding-left: 40px;
     }

     .other-info > a::after{
         /* contents */
         content: "";
         /* position */
         position: absolute;
         left: 0;
         top: 13px;
        /* size */
        width: 30px; height: 1px;
        /* background */
        background-color: var(--color-dark-highlight);
        /* transition */
        transition: all 250ms ease-in;
     }
     
     .other-info > a:hover::after{
         /* size */
         width: 120px;
     }

     .waffle-img{
         /* size */
         width: 200px; height: 200px;
         /* margin */
         margin: 0 auto;
         /* background */
         background: url(../../public/images/svg/waffle.svg);
     }
</style>