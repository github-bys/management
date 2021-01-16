<template>
    <div class="home_cont">
        HOME 主页

        <router-link to="/login"><el-button type="primary" icon="el-icon-share" class="tiaoz">跳转</el-button></router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    // 跳转按钮
        .tiaoz {
            position: absolute;
            left: 0;
            bottom: 0;
        }
</style>