<template>
        <div class="box">
            <div class="in-box">
                <span class="sai">SAI</span>
                <div class="box-1"></div>
                <div class="box-2"><p>程序设计</p></div>
                <div class="box-3"><p>禁止查询资料</p><p>有问题举手报告</p></div>
                <div class="box-4"><p>seat</p></div>
                <div class="box-6"><p>考试时间</p></div>
                <div class="box-7"><p>用户名</p></div>
                <div class="box-8"><p>考试网址</p></div>
                <div class="box-9"><p>密码</p></div>
                <div class="box-a"></div>
                <div class="box-b"></div>
                <div class="box-c"></div>
                <div class="box-d"></div>
                <div class="box-e"></div>
                <div class="attention"> <span >注意事项</span></div>
                <div class="seat"> <span>位置</span></div>
                <div class="accout"> <span >账号</span></div>
                <div class="password"> <span >密码</span></div>
                <div  class="time"><span>时间</span></div>
                <div class="web">
                    <span >
                        <a href="">https://oj.dsstudio.tech/</a>
                    </span>
                </div>
                <div  class="thing"><span>请勿泄露账号 诚信考试</span></div>
            </div>
        </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
    .box{
        display: flex;
        height: 900px;
        width: 1700px;
        background-color:#E6E6FA;
        justify-content: center;
        align-items: center;
    }
    .in-box{
        display: flex;
        height: 700px;
        width: 1400px;
        background-color:#6959CD;
        
    }
    .sai{
        font-size: 110px;
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-top: 30px;
        margin-left: 20px;
        margin-right:120px ;
    }
    .box-1{
        position: absolute;
        background-color: #E6E6FA;
        height: 180px;
        width: 350px;
        margin-left: 255px;
        margin-top: 5px;
    }
    .box-2{
        position: absolute;
        font-size: 90px;
        height: 180px;
        width: 600px;
        font-weight: 900;
        color: #6959CD;
        background-color:#E6E6FA;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-right:70px ;
        justify-content: center;
        top: 300px;
        left: 155px;
        line-height: 180px;
        p{
            margin-left: 20px;
        }
    }
    .box-3{
        position: absolute;
        font-size: 55px;
        height: 160px;
        width: 430px;
        color: #6959CD;
        background-color:#E6E6FA;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        justify-content: center;
        line-height: 1px;
        right: 160px;
        top: 120px;
        p{
            margin-left: 10px;
            margin-top: 50px;
            
        }
    }
    .box-4{
        position: absolute;
        font-size: 40px;
        height: 160px;
        width: 200px;
        color: #6959CD;
        background-color:#E6E6FA;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        justify-content: center;
        line-height: 140px;
        right:390px;
        top: 285px;
        p{
            justify-content: center;
            text-align: center;
            
        }
    }
    .box-6{
        position: absolute;
        font-size: 30px;
        font-weight: 800;
        height: 80px;
        width: 150px;
        color: #6959CD;
        background-color:#E6E6FA;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        justify-content: center;
        line-height: 70px;
        left: 450px;
        top: 560px;
        p{
            justify-content: center;
            text-align: center;
            
        }
    }
    .box-7{
        position: absolute;
        font-size: 45px;
        font-weight: 800;
        height: 160px;
        width: 160px;
        color: #6959CD;
        background-color:#E6E6FA;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        justify-content: center;
        line-height: 130px;
        left: 760px;
        top: 485px;
        p{
            justify-content: center;
            text-align: center;
            
        }
    }
     .box-8{
        position: absolute;
        font-size: 60px;
        font-weight: 800;
        height: 140px;
        width: 150px;
        color: #6959CD;
        background-color:#E6E6FA;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        justify-content: center;
        line-height:65px;
        left: 605px;
        top: 650px;
        p{
            justify-content: center;
            text-align: center;
            
        }
    }
     .box-9{
        position: absolute;
        font-size: 30px;
        font-weight: 800;
        height: 140px;
        width: 150px;
        color: #6959CD;
        background-color:#E6E6FA;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        justify-content: center;
        line-height: 130px;
        right: 630px;
        top: 650px;
        p{
            justify-content: center;
            text-align: center;
            
        }
    }
    .box-a{
        height: 50px;
        width: 40px;
        background-color: #E6E6FA;
        position: absolute;
        left: 760px;
        top: 200px;

    }
      .box-b{
        height: 50px;
        width: 80px;
        background-color: #E6E6FA;
        position: absolute;
        left: 760px;
        top: 255px;

    }
     .box-c{
        height: 50px;
        width: 210px;
        background-color: #E6E6FA;
        position: absolute;
        left: 760px;
        top: 310px;

    }
     .box-d{
        height: 50px;
        width: 160px;
        background-color: #E6E6FA;
        position: absolute;
        left: 760px;
        top: 365px;

    }
     .box-e{
        height: 50px;
        width: 100px;
        background-color: #E6E6FA;
        position: absolute;
        left: 760px;
        top: 420px;

    }
    .attention{
        position: absolute;
       color: white;
       font-size: 50px;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
       letter-spacing: 10px;
       width: 150px;
       top: 140px;
       z-index: 999;
       left: 980px;
    }
    .seat{
       display: flex;
       color: white;
       font-size: 60px;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
       margin-top:200px;
       z-index: 999;
       margin-left:900px;
      
    }
     .accout{
       color: white;
       font-size: 50px;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
       letter-spacing: 10px;
       width: 150px;
       margin-top: 450px;
       margin-left: -500px;
    }
    .password{
        color: white;
       font-size: 50px;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
       letter-spacing: 10px;
       width: 150px;
       margin-top: 600px;
       margin-left: 10px;
    }
    .time{
        color: white;
       font-size: 50px;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
       letter-spacing: 10px;
       width: 150px;
       margin-top: 450px;
       margin-left:-1000px;
    }
    .web{
        color: white;
       font-size: 30px;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
       letter-spacing: 5px;
       width: 150px;
       margin-top: 600px;
       margin-left:-280px;
       height: 100px;
    }
    .thing {
        color: white;
        position: relative;
        font-size: 40px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        letter-spacing: 5px;
        overflow: hidden;
        width: 480px;
        animation: scrollLeft 10s linear infinite;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        white-space: nowrap;
        margin-top: 100px;
        
}
@keyframes scrollLeft {
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(-30%);
    }
}
</style>