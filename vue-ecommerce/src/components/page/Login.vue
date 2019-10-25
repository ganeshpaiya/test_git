<template>
<div class="login">
<div class="loginHeader">
    User Login
</div>
<div class="loginContent">
    <table>
        <tr>
            <td>User Name</td>
            <td>:</td>
            <td><input type="text" placeholder="User name" v-model="user.username"></td>
        </tr>
        <tr>
            <td>Password</td>
            <td>:</td>
            <td><input type="password" placeholder="Password" v-model="user.password"></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td><button class="addBtn" @click="loginNow()">Login</button></td>
        </tr>
    </table>
</div>
</div>


</template>

<script>
export default {
 name: 'Login',
 data()
 {
     return{
         user:{
             username:"",
              password:""
             
         }
     }
 },
 methods: {
     loginNow()
     {
        console.log(this.user);
        this.$eventBus.$emit("loadingstatus",true);
        this.$axios.post("htpp://rimonbd.com/tutorial/api/login",this.user)
        .then(
            res=>{
                 this.$eventBus.$emit("loadingstatus",true);
                 if(res.data.error)
                 {
              alert(res.data.message);        
              
              
              }
                 else
                 {
console.log(res.data)
                 }















        }

        );
        
        ;



     }
 }
}
</script>

<style>

</style>
