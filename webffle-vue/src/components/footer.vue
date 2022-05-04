<template>
    <footer id="footer">
        <!-- wrap -->
        <div class="footer-wrap">
            <h1 class="footer-logo">webffle</h1>
            <div class="footer-info">
                <span class="footer-tel">T.070-4610-1415, F.031-629-5436</span>
                <span class="footer-email">johnny@webffle.kr</span>
                <span class="footer-address">{{$t("message.address")}}</span>
            </div>
            <span class="copyright">copyright &copy; webffle 2022</span>
        </div>
    </footer>
</template>

<script>

export default{
    name: 'footer-webffle',
    data() {
        return {
            
        }
    },
    components:{

    }
}
</script>

<style>
    #footer{
        /* size */
        width: 100vw; height: 100%;
        /* padding */
        padding: 50px 0;
        /* background */
        background-color: var(--scd-bg-color);
    }
    /* footer wrap*/
    .footer-wrap{
        /* max-width */
        max-width: 1400px;
        /* size */
        width: 100%;
        /* margin */
        margin: 0 auto;
        /* flex */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .footer-logo{
        /* font */
        font-family: var(--font-highlight);
        font-size: 1.5rem;
        color: var(--main-color);
    }
    .footer-info{
        /* text */
        text-align: center;
        /* size */
        width: 90%;
        /* font */
        font-family: var(--font-kr);
        font-size: 0.8rem;
        color: var(--color-dark-grey);
        /* padding */
        padding-bottom: 20px;
        /* border */
        border-bottom: 1px solid var(--color-light-grey);
        /* flex */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .copyright{
        /* font */
        font-family: var(--font-eng);
        font-size: 0.8rem;
    }

</style>
