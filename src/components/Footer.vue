<template>
    <footer>
        <div class="container">
            <div class="footer-top">
                <p>Simple recipes that make you feel good</p>
                <div class="footer-social">
                    <p>Follow us on</p>

                    <ul class="footer-menu footer-menu-social">
                        <li><a href="" title="Follow us on twitter"><img src="../assets/icons/icon-twitter.svg"
                                    alt="logo twitter" /></a></li>
                        <li><a href="" title="Follow us on instagram"><img src="../assets/icons/icon-instagram.svg"
                                    alt="logo instagram" /></a></li>
                        <li><a href="" title="Follow us on youtube"><img src="../assets/icons/icon-youtube.svg"
                                    alt="logo youtube" /></a></li>
                        <li><a href="" title="Follow us on facebook"><img src="../assets/icons/icon-facebook.svg"
                                    alt="logo facebook" /></a></li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="footer-bottom">
                <p>2022 cookination</p>
                <ul class="footer-menu">
                    <li><router-link to="/terms" title="Terms and conditions">Terms and conditions</router-link></li>
                    <li><router-link to="/privacy" title="Privacy policy">Privacy policy</router-link></li>
                    <li><router-link to="/cookies" title="Cookies">Cookies</router-link></li>
                </ul>
            </div>
        </div>
    </footer>  
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    footer {
        margin: 0;
        padding: 30px 0 40px 0;
        background: var(--text-color);
        color: #fff;
    }

    footer hr {
        border-bottom: 2px solid #fff;
    }

    footer a:hover {
        opacity: 0.7;
        color: var(--accent-color);
    }

    .footer-top p {
        font-weight: 600;
        margin-bottom: 10px;
    }

    .footer-bottom {
        font-size: 13px;
    }

    .footer-menu {
        display: flex;
        align-items: center;
        margin-bottom: 0;
    }

    .footer-menu li {
        margin-right: 15px;
    }

    @media (min-width: 768px) {
        .footer-top p {
            max-width: 300px;
            margin-bottom: 0;
        }

        .footer-top,
        .footer-bottom,
        .footer-social {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-menu li {
            margin-left: 15px;
            margin-right: 0;
        }
    }
</style>