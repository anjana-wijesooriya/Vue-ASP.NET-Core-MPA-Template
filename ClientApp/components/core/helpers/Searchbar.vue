<template>
<li class="search-input" :class="[ showSearchbox ? 'active' : '' ]">
    <input class="form-control" type="text" placeholder="Search...">
</li>
</template>
<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'

@Component({
    name: 'search-bar',
    props: {
        showSearchbox: {
            type: Boolean,
            default: false
        }
    }
})
export default class Searchbar extends Vue {
}
</script>

