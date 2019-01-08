<template>
<div class="header navbar">
    <div class="header-container">
        <ul class="nav-left">
            <sidebar-toggle></sidebar-toggle>
            <li class="search-box" :class="[ showSearchbox ? 'active' : '' ]">
                <a class="search-toggle no-pdd-right" href="javascript:void(0);" @click="showSearchbox = !showSearchbox">
                    <i class="search-icon ti-search pdd-right-10"></i>
                    <i class="search-icon-close ti-close pdd-right-10"></i>
                </a>
            </li>
            <searchbar :showSearchbox="showSearchbox"></searchbar>
        </ul>
        <ul class="nav-right">
            <language-switcher></language-switcher>
            <notification></notification>
            <connection-box></connection-box>
            <profile-menu></profile-menu>
        </ul>
    </div>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SidebarToggle from './helpers/SidebarToggle.vue'
import Searchbar from './helpers/Searchbar.vue'
import Notification from './Notification.vue'
import ConnectionBox from './Connectionbox.vue'
import ProfileMenu from './ProfileMenu.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

@Component({
    name: 'topbar',
    components: { SidebarToggle, Searchbar, Notification, ConnectionBox, ProfileMenu, LanguageSwitcher },
})
export default class Topbar extends Vue {
    showSearchbox: boolean;
    isShowNotification: boolean;

    constructor() {
        super();
        this.showSearchbox = false;
        this.isShowNotification = false;
    }
}
</script>
