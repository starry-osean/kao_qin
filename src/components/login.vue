<template>
    <div class="content">
                <div class="min_box" >
                    <form action="" v-show="ChangeShow== 2">
                        <div class="row">
                            <p>学号</p>
                            <input type="text" :v-model="studenID">
                        </div>
                        <div class="row">
                            <p>比赛</p>
                            <input type="text" :v-model="race">
                        </div>
                        <div class="row">
                            <p>时间</p>
                            <input type="text" :v-model="time">
                        </div>
                    </form>
                    <form action="" v-show="ChangeShow==0">
                            <div class="row">
                            <p>学号</p>
                            <input type="text" :v-model="studenID">
                        </div>
                    </form>
                    <button class="qian_dao" @click="CheckIn">签到</button>
                    <button class="jiao_yan" @click="Check">校验</button>
                </div>
                <div class="wx"  v-show="ChangeShow== 1">
                        <p >请使用微信扫描二维码登录</p>
                </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref} from 'vue';
import { checkIn,checkOut,check } from '../api/login';
import type{CheckInResponse} from '../types/check'
import CheCk from './check.vue';
const router=useRouter();
const secret = '/secret'; // 定义 secret 为一个有效的路由路径
const studenID=ref('')
const race = ref('');
const time =ref('');
const ChangeShow=ref(0);
const qrCode = ref<string | null>(null);
const checkIn=async()=> {
   router.push('/CheCk')
}
const CheckIn=async()=>{
    /*let redirect_URL=encodeURIComponent(window.location.origin+'/wxlogin');
    let result:WXLoginResponseData=await reqWxLogin(redirect_URL);
    await checkIn;
     new WxLogin({
        self_redirect: true,//true:手机点击确认登录后可以在 iframe 内跳转到 redirect_uri
        id: "login_container",//显示二维码容器 ID
        appid: result.data.appid,//应用的唯一标识 appid
        scope: "snsapi_login",//代表微信扫描登录的页面已经授权了，应用授权的作用域
        redirect_uri: result.data.redirectUri,//填写授权回调域的路径，就是用户授权成功以后微信服务器向公司后台推送 code 地址
        state: result.data.state,//state 就学校服务器重定向地址，携带用户的信息
        style: "black",//文字颜色
        href: "" //自定义样式链接       
    });*/
     const response = await checkIn({StudentID: studenID.value});
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userInfo', JSON.stringify(response.data.userInfo));

}
const Check=async()=>{
    ChangeShow.value=2;
    await check;
    

}
</script>
<style scoped>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}
        .content{
            display: flex;
            height: 500px;
            width: 500px;
            background-color:whitesmoke;
            margin-left: 600px;
            margin-top: 200px;
            border-radius: 10px;
            box-shadow: 10px;
            justify-content: center;
            align-items: center;
            line-height: 100px;
        }
        
    .min_box{
            .row{
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 30px;
                    font-weight: 200;
                    input{
                        height: 40px;
                        width: 300px;
                    }
            }
            button{
                    height: 50px;
                    width: 100px;
                    margin-right: 40px;
                    font-size: 20px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            }    
            }
    .qian_dao{
        background-color: deepskyblue;
    }
</style>