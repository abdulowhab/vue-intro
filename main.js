const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "Socks",
            desc: "Etymology. The modern English word sock is derived from the Old English word socc, meaning light slipper. This comes from the Latin soccus, a term to describe a light, low-heeled shoe worn by Roman comic actors, and deriving from the Ancient Greek word sykchos",
            image: "./assets/images/socks_green.jpg",
            alt: "Green Socks Image",
            url: "https://abdulowhab.netlify.app",
            class: "isActive",
            inventory: 100,
            details: ["50% cotton", "30% wool", "20% polyester"],

            variants: [
                {
                    id: 01, color: "green", image: "./assets/images/socks_green.jpg"
                },
                {
                    id: 02, color: "blue", image: "./assets/images/socks_blue.jpg"
                }
            ],

            sizes: ["L", "XL", "XXL", "M"],




            
        }

        
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        decreaseCart(){
            this.cart -= 1
        },
        updateImage(variantImage){
            this.image = variantImage;
        }
    },
})