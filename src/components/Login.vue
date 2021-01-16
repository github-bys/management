<template>
    <div class="login_cont">
        <img src="../assets/dlxt.jpg" alt="">
        <!-- 登录盒子 -->
        <div class="login_box">
            <div class="login_page">
                <img src="../assets/css/zhongse.png" title="河北华勘地质勘查有限公司" alt="河北华勘地质勘查有限公司">
            </div>
            <h1>物资管理系统</h1>
            <!-- 登录表单区域 -->
            <el-form ref="formref" :model="loginform" :rules="loginrules" class="login_use" >
                <!-- 用户名 -->
                <el-form-item  prop="username">
                    <el-input v-model="loginform.username" prefix-icon="el-icon-user" placeholder="请输入用户账号"></el-input>
                </el-form-item>

                <!-- 密码登录 -->
                <el-form-item  prop="password">
                    <el-input v-model="loginform.password" prefix-icon="el-icon-goods" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>

                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetform">重置</el-button>
                </el-form-item>
            </el-form> 
        </div>

        
        <!-- 跳转按钮 -->
        <router-link to="/home"><el-button type="primary" icon="el-icon-share" class="tiaoz">跳转</el-button></router-link>
    </div>
</template>

<script>
export default {
    data() {
      return {
        //   登录表单数据绑定对象
        loginform: {
          username: '',
          password: ''
        },
        //   表单的验证规则对象
        loginrules: {
            //  验证用户名
          username: [
            { required: true, message: '请输入登录名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
            //  验证密码
          password:[
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        // 点击重置按钮,重置登录表单
        resetform() {
            // console.log(this)
            this.$refs.formref.resetFields();
        },
        login() {
            this.$refs.formref.validate(valid => {
                console.log(valid);
            });
        }
    }
};
</script>

<style lang="less" scoped>

    // 跳转按钮
    .tiaoz {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    // 登录页面
    .login_cont {
        height: 100%;
        position: relative;
        img {
            width: 100%;
            height: 100%;   
        }
    }

    // 登录框
    .login_box {
        height: 450px;
        width: 350px;
        background-color: #fff;
        position: absolute;
        top: 20%;
        right: 5%;
    }
    h1 {
        position: absolute;
        top: 20%;
        left: 25%;
        color: #409EFF;
    }
    // 头像框
    .login_page {
        height: 130px;
        width: 130px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #ddd;
        padding: 10px;
        box-shadow: 0 0 10px #999;
        background-color: #eee;
        img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
        }
    }

    // 用户密码框
    .login_use {
        position: absolute;
        bottom: 15%;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .btns {
        display: flex;
        justify-content: flex-end;

    }
</style>