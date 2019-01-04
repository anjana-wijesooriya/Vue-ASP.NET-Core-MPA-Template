<template>
<li class="notifications dropdown" :class="[ isShow ? 'show' : '']">
    <span class="counter bgc-blue">3</span>
    <a href="#" class="dropdown-toggle no-after" ref="maildropdown" @click="isShow = !isShow">
                  <i class="ti-email"></i>
                </a>

    <ul class="dropdown-menu" :class="[ isShow ? 'show' : '']" v-click-outside="{exclude: ['maildropdown'], handler: 'onClose' }">
        <li class="pX-20 pY-15 bdB">
            <i class="ti-email pR-10"></i>
            <span class="fsz-sm fw-600 c-grey-900">Emails</span>
        </li>
        <li>
            <ul class="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                <connection-item v-for="(item, index) in connectionList" :key="index" :connectionbox="item" />
            </ul>
        </li>
        <li class="pX-20 pY-15 ta-c bdT">
            <span>
                      <a href="email.html" class="c-grey-600 cH-blue fsz-sm td-n">View All Email <i class="fs-xs ti-angle-right mL-10"></i></a>
                    </span>
        </li>
    </ul>
</li>
</template>
<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'

import ConnectionItem from './helpers/connectionItem.vue'
import '../../directives/clickoutside.js'

import {
    ConnectionBoxModel
} from '../../models/helpers/connectionBox.model'

@Component({
    name: 'connection-box',
    components: {
        ConnectionItem
    },
})
export default class ConnectionBox extends Vue {
    isShow: boolean;
    connectionList: ConnectionBoxModel[];

    constructor() {
        super();
        this.isShow = false;
        this.connectionList = this.getConnectionList();
    }

    getConnectionList(): ConnectionBoxModel[] {
        let conList: ConnectionBoxModel[] = [];
        conList.push(new ConnectionBoxModel(
            'John Doe',
            'dist/assets/images/github.png',
            'Want to create your own customized data generator for your app...',
            '5 mins ago'
        ));
        conList.push(new ConnectionBoxModel(
            'Moo Doe',
            'dist/assets/images/dribbble.png',
            'Want to create your own customized data generator for your app...',
            '15 mins ago'
        ));
        conList.push(new ConnectionBoxModel(
            'Lee Doe',
            'dist/assets/images/dropbox.png',
            'Want to create your own customized data generator for your app...',
            '25 mins ago'
        ));

        return conList;
    }
    onClose(): void {
        this.isShow = false
    }
}
</script>
