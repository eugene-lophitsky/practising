import React from "react";
import { useState } from "react";
import "../Sidebar/sidebar.css";

import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct, incrementCounter } from "../../store/reducers/cart-reducer";
import {addToFavorites, removeFromFavorites} from "../../store/reducers/favorites-reducer";

const Sidebar = (props) => {
  const productsInCart = useSelector((store) => store.cart.productsInCart);
  const allProducts = useSelector((store) => store.cart.allProducts);
  const likedProducts = useSelector((store) => store.favorites.likedProducts);

  const handleClick = (e) => {
    e.preventDefault();

    if (likedProducts) {
      dispatch(removeFromFavorites());
      localStorage.removeItem("iLikeThis");
    } else {
      dispatch(addToFavorites());
      localStorage.setItem("iLikeThis", "true");
    }
  };

  const dispatch = useDispatch();
  const hasInCart = productsInCart.some(currentProductInCart => {
      return allProducts.some(currentProductInAllProducts=>{
        return  currentProductInCart.id === currentProductInAllProducts.id;
      });
  });

  function handleAddProduct(e, product) {
    const nextProductsInCart = new Set(productsInCart);
    nextProductsInCart.add(product);
    dispatch(addProduct(product));
    localStorage.setItem(`products`, JSON.stringify(Array.from(nextProductsInCart)));
  }

  function handleRemove(e, product) {
    dispatch(removeProduct(product));
    localStorage.removeItem(`products`);
  }

  return (
    <div className="main-commerce">
      <div className="main-commerce-cart main-commerce-cart_indents-va">
        <div className="main-commerce-cart-price">
          <div className="main-commerce-cart-price__old">
            <div>
              <div>75 990₽</div>
              <div>- 8%</div>
            </div>
            <button className="main-commerce-cart-price__favorites" value="iPhone 13"
                  onClick={handleClick}>
             <span>
              <svg height="20" role="img" viewBox="0 0 48 48" width="26"
                   style={likedProducts ? { fill: "#f36223", stroke: "#f36223" } : { fill: "#ffffff" }}>
                <path
                  d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
              </span>
                <input type="checkbox" name="favorites" id="favorites-add" />
              </button>
          </div>
          <div className="main-commerce-cart-price__new">
            <div>67 990₽</div>
          </div>
        </div>
        <div className="main-commerce-cart-delivery">
          <div className="main-commerce-cart-delivery__conditions">
            <span>Самовывоз в четверг, 1 сентября&nbsp;</span>
            <span
              className="main-commerce-cart-delivery__conditions main-commerce-cart-delivery__conditions_cost-free">
                — бесплатно
              </span>
          </div>

          <div className="main-commerce-cart-delivery__conditions">
            <span>Курьером в четверг, 1 сентября&nbsp;</span>
            <span
              className="main-commerce-cart-delivery__conditions main-commerce-cart-delivery__conditions_cost-free">
                — бесплатно
              </span>
          </div>
        </div>
        <div>

        
          {hasInCart ? (
            <button className="main-commerce-cart-delivery__button_added" onClick={(e) => handleRemove(e, allProducts[0])}>
              Товар уже в корзине
            </button>
          ) : (
            <button className="main-commerce-cart-delivery__button" onClick={(e) => handleAddProduct(e, allProducts[0])}>
              Добавить в корзину
            </button>
          )}
        </div>
      </div>
      <div className="main-commerce-advertising">
        <div className="main-commerce-advertising__caption">Реклама</div>
        <div className="main-commerce-advertising__banners">
          <iframe
            title="first-adv-banner"
            className="main-commerce-advertising__iframe"
            src={"ads.html"}
          ></iframe>
          <iframe
            title="second-adv-banner"
            className="main-commerce-advertising__iframe"
            src={"ads.html"}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
