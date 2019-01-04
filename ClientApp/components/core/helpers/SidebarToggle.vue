<template>
<li>
    <a id='sidebar-toggle' class="sidebar-toggle" href="#" @click="sidebarToggle">
        <i class="ti-menu"></i>
    </a>
</li>
</template>
<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'

@Component({ name: 'sidebar-toggle' })
export default class SidebarToggle extends Vue {

    constructor() {
        super()
    }

    sidebarToggle() {
        this.$store.dispatch('toggleSidebar')
    }
}
</script>

