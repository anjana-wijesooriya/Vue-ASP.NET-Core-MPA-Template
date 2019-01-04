<template>
<li>
    <a href="" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
        <i :class="menuItem.icon" class="mR-10"></i>
        <span>{{ menuItem.title }}</span>
    </a>
</li>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    name: 'menu-item',
    props: {
        menuItem: {
            type: Object,
            default: {}
        }
    }
})
export default class MenuItem extends Vue {
    
}
</script>

