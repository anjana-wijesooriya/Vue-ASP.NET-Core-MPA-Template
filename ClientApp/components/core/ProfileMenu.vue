<template>
<li class="dropdown" :class="[ isShow ? 'show' : '']">
    <a href="#" class="dropdown-toggle no-after peers fxw-nw ai-c lh-1" 
        @click="isShow = !isShow" ref="rightMenuButton"
    >
        <div class="peer mR-10">
            <img class="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt="">
        </div>
        <div class="peer">
            <span class="fsz-sm c-grey-900">John Doe</span>
        </div>
    </a>
    <ul class="dropdown-menu fsz-sm" :class="[ isShow ? 'show' : '']" v-click-outside="{ exclude: ['rightMenuButton'], handler: 'onClose'}">
        <menu-item v-for="(item, index) in menuItems" :key="index" :menuItem="item"></menu-item>
    </ul>
</li>
</template>
<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'

import {
    RightMenuItem
} from '../../models/helpers/rightMenuItem.model'

import MenuItem from './helpers/MenuItem.vue'

@Component({
    name: 'profile-menu',
    components: { MenuItem }
})
export default class ProfileMenu extends Vue {
    isShow: boolean;
    menuItems: RightMenuItem[];

    constructor() {
        super();
        this.isShow = false;
        this.menuItems = this.getMenuItems();
    }

    getMenuItems(): RightMenuItem[] {
        let items: RightMenuItem[] = [];
        items.push(new RightMenuItem('Setting', 'ti-settings'));
        items.push(new RightMenuItem('Profile', 'ti-user'));
        items.push(new RightMenuItem('Messages', 'ti-email'));
        items.push(new RightMenuItem('Logout', 'ti-power-off'));

        return items;
    }

    onClose(): void {
        this.isShow = false;
    }
}
</script>
