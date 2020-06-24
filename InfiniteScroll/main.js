new Vue({
    el:"#root",
    data(){
        return{
        bottom: false,
        beers : []
        }
    },
    watch: {
        bottom : function(bottom){
            if(bottom){
                this.addBeer();
            }
        }
    },
    created(){
        window.addEventListener('scroll',()=>{
            this.bottom = this.bottomVisible();
        });
        this.addBeer();

    },
    methods:{
        bottomVisible(){
            let visible = window.scrollY;
            let clientHeight = document.documentElement.clientHeight;
            let TotalScrollableArea = document.documentElement.scrollHeight;
            let bottomOfPage = visible + clientHeight >= TotalScrollableArea;
            return bottomOfPage;

        },
        addBeer(){
            axios.get("https://api.punkapi.com/v2/beers/random")
            .then(response=>{
                let api = response.data[0];
                let apiInfo = {
                    name: api.name,
                    desc: api.description,
                    img:api.image_url
                };
                this.beers.push(apiInfo);
                if (this.bottomVisible()){
                    this.addBeer();
                }
            })
        }

    }

});