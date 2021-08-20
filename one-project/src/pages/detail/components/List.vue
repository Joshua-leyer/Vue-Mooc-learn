<template>
    <div>
        <div class="item" v-for="(item,index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{ item.title }}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailList',
        props: {
            list: Array
        },
        mouted() {
            console.log(this.list)
        }
    }
</script>

<style lang="stylus" scoped>
    .item-title 
        line-height: .8rem
        font-size: .24rem
        padding: 0 .2rem
    .item-children 
        padding: 0 .24rem
</style>