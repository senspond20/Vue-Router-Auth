<template>
    <div>
        <h4>Login</h4>
        <form>
            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required autofocus>
            </div>
            <div>
                <label for="password" >Password</label>
                <div>
                    <input id="password" type="password" v-model="password" required>
                </div>
            </div>
            <div>
                <button type="submit" @click="handleSubmit">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name :"Login",
        data(){
            return {
                email : "",
                password : ""
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                if (this.password.length > 0) {
                    
                    this.$store
                      .dispatch("login", {
                        email: this.email,
                        password: this.password
                      })
                      .then(() => {
                        this.$router.push({ name: "Home" });
                      }).catch(function (error) {
                         console.log('Error!');
                         console.error(error.response);
                      })

                    // this.$http.post('http://localhost:8080/authenticate', {
                    //     email: this.email,
                    //     password: this.password
                    // })
                    // .then(response => {
                    //    console.log(response.data)
                    //    var token = response.data.token;
                    //    console.log(token);
                    //    localStorage.setItem('user',token);
                      
                    // })
                    // .catch(function (error) {
                    //     console.error(error.response);
                    // });
                }
            }
        }
    }
</script>
