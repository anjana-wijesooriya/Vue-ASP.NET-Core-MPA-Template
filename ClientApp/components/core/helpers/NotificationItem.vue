<template>
<li>
    <a href="" class='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
        <div class="peer mR-15">
            <img class="w-3r bdrs-50p" :src="notification.imgPath" alt="">
        </div>
        <div class="peer peer-greed">
            <span>
                              <span class="fw-500">{{ notification.user }}</span>
            <span class="c-grey-600">{{ notification.title }} <span class="text-dark">{{ notification.type }}</span>
            </span>
            </span>
            <p class="m-0">
                <small class="fsz-xs">{{ notification.time }}</small>
            </p>
        </div>
    </a>
</li>
</template>
<script>
export default {
    name: 'notofiacation-item',
    props: {
        notification: {
            type: Object,
            default: {}
        }
    }
}
</script>
<style lang="scss" scoped>
.list-group-item {
    border-radius: 0px;
    padding: 12px;
    margin-top: -1px;
    border-left: transparent;
    border-right: transparent;
    .notification-info {
        .notification-date {
            display: block;
            font-size: 11px;
            margin-top: 4px;
            text-transform: uppercase;
            color: #71748d;
        }
        .notification-list-user-img {
            float: left;
            .user-avatar-md {
                height: 32px;
                width: 32px;
            }
        }
        .notification-list-user-block {
            padding-left: 50px;
            font-size: 14px;
            line-height: 21px;
            .notification-list-user-name {
                color: #5969ff;
                font-size: 14px;
                margin-right: 8px;
            }
        }
    }
}

.list-group-item.active {
    z-index: 2;
    color: #3d405c;
    background-color: #f7f7fb;
    border-color: #e1e1e7;
}

.list-group-item-action:focus,
.list-group-item-action:hover {
    color: #404040;
    text-decoration: none;
    background-color: #f7f7fb;
}
</style>

