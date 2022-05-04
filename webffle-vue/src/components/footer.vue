<template>
    <footer id="footer">
        <!-- wrap -->
        <div class="footer-wrap">
            <h1 class="footer-logo">webffle</h1>
            <div class="footer-info">
                <span class="footer-tel">T.070-4610-1415</span>
                <span class="footer-fax">F.031-629-5436</span>
                <span class="footer-email">johnny@webffle.kr</span>
                <span class="footer-address">{{$t("message.address")}}</span>
            </div>
            <span class="copyright">Copyright &copy; webffle 2022</span>
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

</style>
