<template>
    <div v-if="returnMessagessuccess != ''" class="warning-box-success">
        <span class="closebtn" @click="removeNotificationsucess()">&times;</span> 
        <strong v-text="returnMessagessuccess"></strong>
    </div>
</template>
<style scoped lang="scss">
@import './Snackbarsuccess.scss';
</style>
<script type='module' src='./Snackbarsuccess.js'></script>