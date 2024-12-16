import React, { useContext, useState } from "react";
import styles from "../styles/CartItems.module.css";
// import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assests/cart_cross_icon.png";

export default function CartItems() {
  // return (
  //     const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  // // track order status
  // const [orderReceived, setOrderReceived] = useState(false);
  // const [promoCode, setPromoCode] = useState('');
  // const [discount, setDiscount] = useState(0);
  // const [error, setError] = useState('');

  // const calculateSubtotal = () => {
  //     return all_product.reduce((total, e) => {
  //         if (cartItems[e.id] > 0) {
  //             return total + e.new_price * cartItems[e.id];
  //         }
  //         return total;
  //     }, 0);
  // };

  // const subtotal = calculateSubtotal();

  // const handleCheckout = () => {

  //     setOrderReceived(true);
  // };

  // const handleApplyPromoCode = () => {
  //     setError('');

  //     const validPromoCodes = {
  //         'SAVE10': 0.10,  // 10% off
  //         'SAVE20': 0.20,  // 20% off

  //     };

  //     if (validPromoCodes[promoCode]) {
  //         setDiscount(validPromoCodes[promoCode]);
  //         setError('Invalid promo code!');
  //         setDiscount(0);
  //     }
  // };

  // const totalAfterDiscount = subtotal - (subtotal * discount);

  return (
    <div className={styles.cartitems}>
      <div className={styles.cartitems_format_main}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/*
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img
                                    className="cartitems-remove-icon"
                                    src={remove_icon}
                                    onClick={() => { removeFromCart(e.id) }}
                                    alt=""
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })} */}

      <div className={styles.cartitems_down}>
        <div className={cartitems_total}>
          <h1>Cart Totals</h1>
          <div>
            <div className={styles.cartitems_total_items}>
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className={styles.cartitems_total_item}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.cartitems_total_item}>
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
          {/* <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button> */}
        </div>

        <div className={styles.cartitems_promocode}>
          <p>If you have a promo code, enter it here!</p>
          <div className={styles.cartitems_promobox}>
            <input
              type="text"
              placeholder="Enter promo code"
              // value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button>Apply</button>
            {/* <button onClick={handleApplyPromoCode}>Apply</button> */}
          </div>

          {/* {error && <p className="error-message">{error}</p>} */}
        </div>
      </div>

      {/* {orderReceived && ( */}
      <div className={styles.order_success_message}>
        <h2>Your order has been received. Thank you for shopping with us!</h2>
      </div>
      {/* // )} */}
    </div>
  );
}
