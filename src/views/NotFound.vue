<template>
    <main>
        <section class="box-error">
            <div class="container">
                <h2 class="title-lined"><span>404</span></h2>
                <p>We're sorry, the page you requested cannot be found.</p>
            </div>    
        </section>
    </main>    
</template>

<script>
export default {
    name: "NotFound",
}
</script>

<style>
    .box-error {
        background: transparent;
        padding: 40px 100px;
        text-align: center;
        max-width: 800px;
        margin: 150px auto 350px;
    }
</style>