<template>
  <div class="home">
    {{msg}}
    <button @click="logout">logout</button>
  </div>
</template>

<script>
var myHeaders = new Headers({
    'Content-Type': 'text/xml'
});

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {

      
      fetch("http://localhost:8080/account/all",{ 
          method:"GET",
          headers: {
                'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset = utf-8',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZW5zcG9uZEBnbWFpbC5jb20iLCJleHAiOjE2MTU5MDQ5MDEsImlhdCI6MTYxNTg2ODkwMX0.M98-ad3ISFGJtlb7Qo7VKzqx0Vqg6lx-YbWA_Rsgfpc"
            },
      })
     .then(function(response) {
            return response.json();
      })
      .then(function(myJson) {
            console.log(JSON.stringify(myJson));
       });

    // this.$http.get("http://localhost:8080/account/all").then(({ data }) => {
    //   console.log(data);
    // });
  },
  methods : {
    logout : function(e){
        e.preventDefault()
         this.$router.push({ name: "Login" });
        this.$store.dispatch("logout");
    }
  }
}
</script>
