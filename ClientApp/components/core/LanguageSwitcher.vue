<template>
<li class="dropdown" :class="[ isShow ? 'show' : '']">
    <a href="#" class="dropdown-toggle no-after peers fxw-nw ai-c lh-1" @click="isShow = !isShow" ref="rightMenuButton">
        <div class="peer mR-10">
            <img class="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt="">
        </div>
        <div class="peer">
            <span class="fsz-sm c-grey-900">Language</span>
        </div>
    </a>
    <ul class="dropdown-menu fsz-sm" :class="[ isShow ? 'show' : '']" v-click-outside="{ exclude: ['rightMenuButton'], handler: 'onClose'}">
        <!-- <menu-item v-for="(item, index) in menuItems" :key="index" :menuItem="item"></menu-item> -->
        <li>
            <a href="#" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700" @click="changeLanguage('en')">
                <!-- <i :class="menuItem.icon" class="mR-10"></i> -->
                <span>English</span>
            </a>
        </li>
        <li>
            <a href="#" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700" @click="changeLanguage('fr')">
                <!-- <i :class="menuItem.icon" class="mR-10"></i> -->
                <span>French</span>
            </a>
        </li>
        <li>
            <a href="#" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700" @click="changeLanguage('nl')">
                <!-- <i :class="menuItem.icon" class="mR-10"></i> -->
                <span>Dutch</span>
            </a>
        </li>
    </ul>
</li>
</template>
<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'

@Component({
    name: 'language-switcher'
})
export default class LanguageSwitcher extends Vue {
    isShow: boolean;

    constructor() {
        super();
        this.isShow = false;
    }

    onClose(): void {
        this.isShow = false;
    }

    changeLanguage( lang: string ): void {
        this.$i18n.locale = lang;
    }
}
</script>
