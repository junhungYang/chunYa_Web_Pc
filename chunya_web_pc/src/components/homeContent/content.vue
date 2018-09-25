<template>
    <div class="content">
        <div class="goods"></div>
        <div class="goods"></div>
        <div class="goods"></div>
    </div>
</template>
<style lang="less" scoped>
.content {
    .goods:nth-of-type(1) {
        height: 800px;
        border: 1px solid red; 
    }
    .goods:nth-of-type(2) {
        height: 900px;
        border: 1px solid red;
    }
    .goods:nth-of-type(3) {
        height: 900px;
        border:1px solid red; 
    }
}
</style>

