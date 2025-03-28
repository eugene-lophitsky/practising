function BlendList() {
    const blends = [
        {
            id: 1,
            image: "src/assets/img/capuccino.webp",
            name: "Capuccino",
            proportions: "Coffee 50% | Milk 50%",
            price: "$8.50",
            orderButton: "Order Now",
        },

        {
            id: 2,
            image: "src/assets/img/chai__latte.webp",
            name: "Chai Latte",
            proportions: "Coffee 50% | Milk 50%",
            price: "$8.50",
            orderButton: "Order Now",
        },

        {
            id: 3,
            image: "src/assets/img/macchiato.webp",
            name: "Macchiato",
            proportions: "Coffee 50% | Milk 50%",
            price: "$8.50",
            orderButton: "Order Now",
        },

        {
            id: 4,
            image: "src/assets/img/espresso.webp",
            name: "Espresso",
            proportions: "Coffee 50% | Milk 50%",
            price: "$8.50",
            orderButton: "Order Now",
        },
    ];

    return (
        <div className="blend">
            <div className="blend-wrapper">
                <div className="blend__title"></div>
                <div className="blend__subtitle"></div>
                <div className="blend-cards">
                {blends.map((item)=>(
                        <div className="blend__card" key={item.id}>
                            <div className="blend__card-image">
                            <img src={item.image} alt="" />
                            </div>
                            <div className="blend__card-title">{item.name}</div>
                            <div className="blend__card-proportions">{item.proportions}</div>
                            <div className="blend__card-price">{item.price}</div>
                            <div className="blend__card-orderButton">{item.orderButton}</div>
                        </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default BlendList;
