<template>
         <div class="goods-list" v-html="contentDesc">
    </div>
   
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import {getHash} from '../getHash'
export default {
    computed: {
        ...mapState(['goodActiveId','goodsList'])
        
    },
    data() {
        return {
            contentDesc: ''
        }
    },
    created() {
        this.navActiveRefresh(location.hash)
        if(this.goodsList.length !== 0) {
            this.goodsListFilter(getHash())
        }
    },
    methods: {
        ...mapMutations(['navActiveRefresh']),
        goodsListFilter(id) {
            this.goodsList.forEach(item => {
                item.id === id ? this.contentDesc = item.contentDesc : ''
            })
        }
    },
    watch: {
        goodActiveId(e) {
            this.goodsListFilter(e)
        },
        goodsList() {
            this.goodsListFilter(getHash())
        }
    }
}
</script>

<style lang="less">
.goods-list {
       p{
           display: block;
           min-width: 1200px;
           width: 100%;
           img{
                width: 100% !important;
                height: auto !important;
           }
       }
}
</style>