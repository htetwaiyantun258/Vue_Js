Vue.component('my-title',{
    template:
    `
    <div>
    <h1>Totla Vote   {{count}} </h1>
    <button @click="voteCount">Click Vote</button>
    </div>
    
    
    
    `,
    data(){
        return{
            count: 0
        }
    },
    methods:{
        voteCount(){
            this.count++;
        }
    }
    

})



new Vue({
    el: "#app",
})