<template>
    <div class="home_cont">
        <el-container>
            <!-- 头部区域 -->
            <el-header>
                <!-- 公司login -->
                <div class="header_1">
                    <img src="@/assets/css/zhongse.png" title="河北华勘地质勘查有限公司" alt="河北华勘地质勘查有限公司">
                    <span>物资管理系统后台</span>
                </div>

                <div class="header_2">

                    <!-- 用户头像 -->
                    <el-avatar icon="el-icon-user-solid"></el-avatar>

                    <!-- 退出和用户信息 -->
                    <router-link to="/login">
                        <el-dropdown split-button type="primary">
                            退出
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>个人中心</el-dropdown-item>
                                <el-dropdown-item>设置</el-dropdown-item>
                                <el-dropdown-item>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </router-link>
                </div>
            </el-header>

            <el-container>
                <!-- 左边侧边栏 -->
                <el-aside width="200px">
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router
                        >

                        <el-menu-item index="/home">
                            <i class="el-icon-house"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>

                        <el-menu-item index="/supplies">
                            <i class="el-icon-phone-outline"></i>
                            <span slot="title">采购申请</span>
                        </el-menu-item>

                        <el-menu-item index="/instorage">
                            <i class="el-icon-sell"></i>
                            <span slot="title">物资入库</span>
                        </el-menu-item>
                
                        <el-menu-item index="/outstorage">
                            <i class="el-icon-sold-out"></i>
                            <span slot="title">物资出库</span>
                        </el-menu-item>
                    
                        <el-menu-item index="/storages">
                            <i class="el-icon-s-grid"></i>
                            <span slot="title">库存管理</span>
                        </el-menu-item>

                        <!-- 一级菜单 -->
                        <el-submenu index="5">
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-s-check"></i>
                            <!-- 文本 -->
                            <span>角色与权限管理</span>
                            </template>

                            <el-menu-item-group>
                            <template slot="title">角色与权限管理</template>
                            </el-menu-item-group>

                            <!-- 二级菜单 -->
                            <el-submenu index="4-2">
                            <template slot="title">选项1</template>
                            <el-menu-item index="/permission">选项1</el-menu-item>
                            </el-submenu>

                        </el-submenu>
                        
                    </el-menu>
                </el-aside>

                <!-- 右侧内容主体区域 -->
                <el-main>

                    <!-- 子路由出口 -->
                    <router-view></router-view>
                </el-main>

            </el-container>
            
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'HomeIndex',
}
</script>

<style lang="less" scoped>

    // 页面盒子
    .home_cont {
        height: 100%;
    }
    .el-container {
        height: 100%;
    }

    // header 头部区域
    .el-header {
        width: 100%;
        background-color: #333;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 25px;

        // 公司login
        .header_1 {
            display: flex;
            align-items: center;
        }
        img {
            width: 60px;
            height: 60px;
        }
        span {
            margin-left: 20px;
        }

        // 用户头像
        .header_2 {
            display: flex;
            align-items: center;
            .el-dropdown {
                margin-left: 20px;
            }
        }
    }

    // 侧边栏
    .el-aside {
        height: 100%;
        background-color: #666;
    }

</style>