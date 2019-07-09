<template>
    <section>
        <p v-html="$t('message.footInfo')">You can find more details about Double Lucky in our terms of use and privacy policy.</p>
        <p v-html="$t('message.copyright')">Copyright © 2019 DOUBLE LUCKY BIOPHARMACEUTICAL LTD</p>
    </section>
</template>
<style lang="less" scoped>
    section{
        height: 132px;
        text-align: center;
        font-size: 14px;
        background-color: #0f1118;
        color:white;
        p:nth-of-type(1){
           padding: 42px 0 28px 0;
        }
    }
</style>
