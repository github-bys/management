<template>
    <div class="home_cont">
        <el-container>
            <!-- 头部区域 -->
            <el-header>
                <!-- 公司login -->
                <div class="header_1">
                    <img src="../assets/css/zhongse.png" title="河北华勘地质勘查有限公司" alt="河北华勘地质勘查有限公司">
                    <span>物资管理系统后台</span>
                </div>

                <!-- 用户头像 -->
                <div class="header_2">
                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                    <router-link to="/login"><el-button type="primary">退出</el-button></router-link>
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
                        active-text-color="#ffd04b">

                        <!-- 一级菜单 -->
                        <el-submenu index="1">
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-phone-outline"></i>
                            <!-- 文本 -->
                            <span>采购申请</span>
                            </template>

                            <el-menu-item-group>
                            <template slot="title">采购申请</template>
                            </el-menu-item-group>
                            
                            <!-- 二级菜单 -->
                            <el-submenu index="1-2">
                            <template slot="title">选项1</template>
                            <el-menu-item index="1-2-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>

                        <el-submenu index="2">
                            <template slot="title">
                            <i class="el-icon-sell"></i>
                            <span>物资入库</span>
                            </template>

                            <el-menu-item-group>
                            <template slot="title">物资入库</template>
                            </el-menu-item-group>

                            <el-submenu index="2-2">
                            <template slot="title">选项1</template>
                            <el-menu-item index="2-2-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>

                        <el-submenu index="3">
                            <template slot="title">
                            <i class="el-icon-sold-out"></i>
                            <span>物资出库</span>
                            </template>

                            <el-menu-item-group>
                            <template slot="title">物资出库</template>
                            </el-menu-item-group>

                            <el-submenu index="3-2">
                            <template slot="title">选项1</template>
                            <el-menu-item index="3-2-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>

                        <el-submenu index="4">
                            <template slot="title">
                            <i class="el-icon-s-grid"></i>
                            <span>库存管理</span>
                            </template>

                            <el-menu-item-group>
                            <template slot="title">库存管理</template>
                            </el-menu-item-group>

                            <el-submenu index="4-2">
                            <template slot="title">选项1</template>
                            <el-menu-item index="4-2-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>

                        <el-submenu index="5">
                            <template slot="title">
                            <i class="el-icon-s-check"></i>
                            <span>角色与权限管理</span>
                            </template>

                            <el-menu-item-group>
                            <template slot="title">角色与权限管理</template>
                            </el-menu-item-group>

                        </el-submenu>
                        
                    </el-menu>
                </el-aside>

                <!-- 右侧内容主体区域 -->
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
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
        .header_2 {
            display: flex;
            align-items: center;
            .el-button {
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