<template>
    <div v-if="returnMessages != ''" class="warning-box">
        <span class="closebtn" @click="removeNotification()">&times;</span> 
        <strong v-text="returnMessages"></strong>
    </div>
</template>
<style scoped lang="scss">
@import './Snackbar.scss';
</style>
<script type='module' src='./Snackbar.js'></script>