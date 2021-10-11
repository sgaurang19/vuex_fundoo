<template>
    <div class="main-header">
        <div align="center" class="header-container">
            <img class="header-logo" src="../../../images/logo-discoveryland.png" alt="logo">
            <div class="header-nav" id="Nav">
                <div v-for="link in links" :key="link.id" >
                <!-- <div class="header-nav"> -->
                    
                    <!-- <router-link to="/">Home</router-link>  -->
                    <a><router-link v-bind:to="link.url" class="hover-3">{{link.urlName}}</router-link></a>
                    <!-- <router-link to="/about">About DLC</router-link>
                    <router-link to="/about">Our Worlds</router-link>
                    <router-link to="/about">Experience</router-link>
                    <router-link to="/about">Gallery</router-link>
                    <router-link to="/about">Press</router-link> -->

                </div>
                  
            </div>
              <button class="nav-toggler" @click="isToggled = !isToggled">
                        <svg width="16" height="16" fill="#fff" class="toggler-svg">
                            <rect width="16" height="4" x="0" y="0" />
                            <rect width="16" height="4" x="0" y="6" />
                            <rect width="12" height="4" x="0" y="12" />
                        </svg>
              </button>
            <!-- <div class="hidden-nav">
                <a href="#" class="navbar">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                </a>
            </div> -->
            <router-view/>
                
        
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import './Header.scss';
export default defineComponent({
    data(){
        return{
            links:[
                // {
                //     id:1,
                //     url: "/",
                //     urlName:"Home",
                // },
                {
                    id:2,
                    url: "/about-dlc",
                    urlName:"About DLC",
                },
                {
                    id:3,
                    url: "/our_world",
                    urlName:"Our World",
                },
                {
                    id:3,
                    url: "/experience",
                    urlName:"Experience",
                },
                {
                    id:3,
                    url: "/gallery",
                    urlName:"Gallery",
                },
                {
                    id:3,
                    url: "/press",
                    urlName:"Press",
                },
            ]
        }
    },
    // methods:{
    //         Navbar():void{
    //             let x = < HTMLInputElement > document.getElementById("Nav");
    //                 if (x.className === "header-nav") {
    //                     x.className += 'responsive';
    //                 } else {
    //                     x.className = "header-nav";
    //                 }
    //             } 
    //     }
});
</script>



// npm install vue bootstrap bootstrap-vue
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Vue.use(BootstrapVue)