<template>
    <!-- #Left Sidebar ==================== -->
      <div class="sidebar">
        <div class="sidebar-inner">
          <!-- ### $Sidebar Header ### -->
          <div class="sidebar-logo">
            <div class="peers ai-c fxw-nw">
              <div class="peer peer-greed">
                <a class="sidebar-link td-n" href="index.html">
                  <div class="peers ai-c fxw-nw">
                    <div class="peer">
                      <div class="logo">
                        <img src="assets/static/images/logo.png" alt="">
                      </div>
                    </div>
                    <div class="peer peer-greed">
                      <h5 class="lh-1 mB-0 logo-text">Administrator</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="peer">
                <div class="mobile-toggle sidebar-toggle">
                  <a href="" class="td-n">
                    <i class="ti-arrow-circle-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- ### $Sidebar Menu ### -->
          <ul class="sidebar-menu scrollable pos-r">
            <side-menu-item v-for="(item, index) in menuItems" :key="index" :item="item" :isParent="true"></side-menu-item>
            
          </ul>
        </div>
      </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

import SideMenuItem from './helpers/SideMenuItem.vue';

import { MenuItem } from '../../models/helpers/menuItem.model';

@Component({ name: 'sidebar', components: { SideMenuItem } })
export default class Sidebar extends Vue {
    isOpen: boolean;
    menuItems: MenuItem[];

    constructor () {
      super();
      this.isOpen = false;
      this.menuItems = this.getMenuItems();
    }

    getMenuItems(): MenuItem[] {
      let menulist = [];
      menulist.push(new MenuItem('Menu Item', 'c-blue-500 ti-home', []));
      menulist.push(new MenuItem('Menu Item', 'c-brown-500 ti-email', []));
      menulist.push(new MenuItem('Menu Item', 'c-blue-500 ti-share', [
        new MenuItem('Sub Menu Item', 'c-light-blue-500 ti-pencil', []),
        new MenuItem('Sub Menu Item', 'c-light-blue-500 ti-pencil', []),
        new MenuItem('Sub Menu Item', 'c-light-blue-500 ti-pencil', [])
      ]));
      menulist.push(new MenuItem('Menu Item', 'c-deep-orange-500 ti-calendar', [
        new MenuItem('Sub Menu Item', 'c-light-blue-500 ti-pencil', []),
        new MenuItem('Sub Menu Item', 'c-light-blue-500 ti-pencil', [
          new MenuItem('Sub Menu Item 1', 'c-light-blue-500 ti-pencil', []),
          new MenuItem('Sub Menu Item 1', 'c-light-blue-500 ti-pencil', [
            new MenuItem('Sub Menu Item 2', 'c-light-blue-500 ti-pencil', []),
            new MenuItem('Sub Menu Item 2', 'c-light-blue-500 ti-pencil', []),
            new MenuItem('Sub Menu Item 2', 'c-light-blue-500 ti-pencil', [])
          ]),
          new MenuItem('Sub Menu Item 1', 'c-light-blue-500 ti-pencil', [])
        ]),
        new MenuItem('Sub Menu Item', 'c-light-blue-500 ti-pencil', [])
      ]));
      menulist.push(new MenuItem('Menu Item', 'c-deep-purple-500 ti-comment-alt', []));
      menulist.push(new MenuItem('Menu Item', 'c-indigo-500 ti-bar-chart', []));
      menulist.push(new MenuItem('Menu Item', 'c-light-blue-500 ti-pencil', []));
      menulist.push(new MenuItem('Menu Item', 'c-pink-500 ti-palette', []));
      menulist.push(new MenuItem('Menu Item', 'c-orange-500 ti-layout-list-thumb', []));
      menulist.push(new MenuItem('Menu Item', 'c-purple-500 ti-map', []));
      menulist.push(new MenuItem('Menu Item', 'c-red-500 ti-files', []));
      menulist.push(new MenuItem('Menu Item', 'c-teal-500 ti-view-list-alt', []));

      return menulist;
    }
}
</script>

