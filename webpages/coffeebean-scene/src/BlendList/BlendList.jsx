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
                <div className="blend__title">Enjoy a new blend of coffee style</div>
                <div className="blend__subtitle">
                    Explore all flavours of coffee with us. There is always a new cup worth experiencing
                </div>
                <div className="blend-cards">
                    {blends.map((item)=>(
                            <div className="blend-card" key={item.id}>
                                <span className="blend-card__image">
                                    <img src={item.image} alt="" />
                                </span>
                                <div className="blend-card__body">
                                    <div className="blend-card__title">{item.name}</div>
                                    <div className="blend-card__proportions">{item.proportions}</div>
                                    <div className="blend-card__price">{item.price}</div>
                                    <div className="blend-card__orderButton">{item.orderButton}</div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlendList;
