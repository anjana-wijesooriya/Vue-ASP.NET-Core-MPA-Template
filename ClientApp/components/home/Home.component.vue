<template>
<main class="main-content bgc-grey-100">
 <div id='mainContent'>
        <h1>This is Home Component</h1>
    </div>
</main>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    name: 'home-component'
})
export default class HomeComponent extends Vue {
    
}
</script>

