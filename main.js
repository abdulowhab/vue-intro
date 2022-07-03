const app = Vue.createApp({
    data() {
        return {
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
                    id: 01, color: "green"
                },
                {
                    id: 02, color: "blue"
                }
            ],

            sizes: ["L", "XL", "XXL", "M"],




            
        }
    },
})