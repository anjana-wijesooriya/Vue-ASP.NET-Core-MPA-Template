<template>
<li class="notifications dropdown" :class="[ isShowNotification ? 'show' : '' ]">
    <span class="counter bgc-red">3</span>
    <a href="#" class="dropdown-toggle no-after" ref="navbarDropdown" @click="isShowNotification = !isShowNotification">
                  <i class="ti-bell"></i>
                </a>

    <ul class="dropdown-menu" 
    :class="[ isShowNotification ? 'show' : '' ]"
    v-click-outside="{exclude: ['navbarDropdown'], handler: 'onClose' }">
        <li class="pX-20 pY-15 bdB">
            <i class="ti-bell pR-10"></i>
            <span class="fsz-sm fw-600 c-grey-900">Notifications</span>
        </li>
        <li>
            <ul class="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
               <notification-item v-for="(item, index) in notificationList" :key="index" :notification="item"></notification-item>
            </ul>
        </li>
        <li class="pX-20 pY-15 ta-c bdT">
            <span>
                <a href="" class="c-grey-600 cH-blue fsz-sm td-n">View All Notifications <i class="ti-angle-right fsz-xs mL-10"></i></a>
            </span>
        </li>
    </ul>
</li>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import '../../directives/clickoutside.js'
import NotificationItem from './helpers/NotificationItem.vue'

import {NotificationModel} from '../../models/helpers/notification.model'

@Component({
    name: 'notification',
    components: {
        NotificationItem
    },
})
export default class Notification extends Vue {
    isShowNotification: boolean;
    //ops: {bar: {background: '#5969ff'},rail: {border: '1px solid #cecece',size: '20px'},scrollButton: { enable: false }}
    notificationList: NotificationModel[];

    constructor(){
        super();
        this.isShowNotification = false;
        this.notificationList = this.getNotificationList();
    }

    getNotificationList(): NotificationModel[] {
        let notList: NotificationModel[] = [];
        notList.push(new NotificationModel(
            'post',
            '/dist/assets/images/avatar-2.jpg',
            'John Abraham',
            'liked your',
            '2 mins ago'
        ));
        notList.push(new NotificationModel(
            'cover image',
            '/dist/assets/images/avatar-3.jpg',
            'Jeremy Rakestraw',
            'commented on your',
            '12 min ago'
        ));
        notList.push(new NotificationModel(
            'video',
            '/dist/assets/images/avatar-4.jpg',
            'Monaan Pechi',
            'liked your',
            '22 days ago'
        ));
        return notList;
    }

    onClose() {
            this.isShowNotification = false
        }
}
</script>