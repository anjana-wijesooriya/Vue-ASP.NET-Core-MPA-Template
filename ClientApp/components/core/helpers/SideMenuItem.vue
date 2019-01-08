<template>

<li class="nav-item" 
    v-if="isParent && item.children && item.children.length === 0" 
>
    <a class="sidebar-link" v-bind:href="item.url">
        <span class="icon-holder">
            <i :class="item.icon"></i>
        </span>
        <span class="title">{{ item.title }}</span>
    </a>
</li>

<li v-else-if="item.children && item.children.length > 0 && isParent" 
    class="nav-item dropdown" :class="[isOpen ? 'open' : '']">
    <a class="dropdown-toggle" href="#" @click="isOpen = !isOpen">
    <span class="icon-holder">
        <i :class="item.icon"></i>
        </span>
    <span class="title">{{ item.title }}</span>
    <span class="arrow">
        <i class="ti-angle-right"></i>
        </span>
    </a>
    <ul class="dropdown-menu">
    <side-menu-item v-for="(child, index) in item.children" :key="index" :item="child" :isParent="false"></side-menu-item>
    </ul>
</li>

<li v-else-if="!isParent && item.children && item.children.length === 0">
     <a v-bind:href="item.url">{{ item.title }}</a>
</li>

<li v-else class="nav-item dropdown" :class="[isOpen ? 'open' : '']">
    <a href="#" @click="isOpen = !isOpen">
    <span>{{ item.title }}</span>
    <span class="arrow">
        <i class="ti-angle-right"></i>
    </span>
    </a>
    <ul class="dropdown-menu">
        <side-menu-item v-for="(child, index) in item.children" :key="index" :item="child" :isParent="false"></side-menu-item>
    </ul>
</li>


</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { MenuItem } from '../../../models/helpers/menuItem.model';

@Component({ 
    name: 'side-menu-item',
    props: {
        item: {
            type: Object,
            default: {}
        },
        isParent: {
            type: Boolean,
            default: false
        }
    }    
})
export default class SideMenuItem extends Vue {
    hasChildren: boolean;
    isOpen: boolean;

    constructor(){
        super();
        this.hasChildren = false;
        this.isOpen = false;
    }
}
</script>
