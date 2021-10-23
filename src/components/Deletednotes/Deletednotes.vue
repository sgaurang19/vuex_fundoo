<template>
    <div>
        <div class="warn" v-if="allNotes == '' ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
                    <p>No notes in Trash</p>
        </div>
        <div class="grid-notes" >
            <div class="Notes" v-for="notes in allNotes.slice().reverse()" :key="notes._id" :style="{backgroundColor :notes.color}">
               <!-- <p style="font-size:small" v-text="notes._id"></p> -->
               <div>
                   <h3 v-text="notes.title" ></h3>
                    <p v-text="notes.description"></p>
               </div>
                <div class="icons-empty">
                    
                    &nbsp;
                </div>
                <div class="icons">
                    
                     <Icons v-bind:RouteActive="'Trash'" v-bind:Noteid="notes._id"/>
                </div>
            </div>
            

        </div>
    </div>
</template>
<script type=" module" src="./Deletednotes.js">
// import axios from 'axios';

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './Deletednotes.scss';
</style>
