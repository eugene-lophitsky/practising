
const reviews = [
 {   
    id: 1,
        author: "Антон С.",
        avatar: `./images/people/review-1.jpeg`,
        rating: 5,
        commentBody: {
                using: "три месяца",
                advantages: "красивый экран, очень яркий. Нравится громкость звука в микрофоне и шикарная основная камера.",
                disadvantages: "дороговато",
        },
    },
    
 {     
    id: 2,
        author: "Илья Николов",
        avatar: `./images/people/review-2.jpeg`,
        rating: 4,
        commentBody: {
                using: "1 год",
                advantages: "огромный экран, и Face ID есть, приём в основном хороший",
                disadvantages: "цена выше нормальной раза в три, легко разбить заднюю крышку и экран",    
        },
    },
    
];

export default reviews;
