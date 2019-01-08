<template>
<div id="app-template">
    <div class="app" :class="[ openSidebar ? 'is-collapsed' : '' ]">
    <!-- #Left Sidebar ==================== -->
    <sidebar/>
    <div class="page-container">
        <!-- ### $Topbar ### -->
        <topbar/>
        <!-- ### $Content ### -->
        <home-component></home-component>
    </div>
</div>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Sidebar from '../../components/core/Sidebar.vue'
import Topbar from '../../components/core/Topbar.vue'
import HomeComponent from '../../components/home/About.component.vue'

@Component({
    // name: 'core-view',
    components: { Sidebar, Topbar, HomeComponent },
    computed: {
        openSidebar () {
            return this.$store.state.Sidebar.sidebarOpen
        }
    }
})
export default class HomeApp extends Vue {
    constructor(){
        super()
    }
}
</script>
<style>
#loader {
    transition: all 0.3s ease-in-out;
    opacity: 1;
    visibility: visible;
    position: fixed;
    height: 100vh;
    width: 100%;
    background: #fff;
    z-index: 90000;
}

#loader.fadeOut {
    opacity: 0;
    visibility: hidden;
}

.spinner {
    width: 40px;
    height: 40px;
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    background-color: #333;
    border-radius: 100%;
    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
    animation: sk-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
    0% {
        -webkit-transform: scale(0)
    }
    100% {
        -webkit-transform: scale(1.0);
        opacity: 0;
    }
}

@keyframes sk-scaleout {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    100% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
        opacity: 0;
    }
}
</style>