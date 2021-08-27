import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = (props) => {
 
  const cartItems= useSelector(state => state.cartReducer.cartItems)
 
  console.log(cartItems);

  const items = cartItems.map( (item ) => {
    return  <CartItem
    item={{ title: item.title, 
      quantity: item.quantity,
      total:  parseInt(item.quantity)* parseInt(item.price) , 
      price: item.price }}
  />
  })
 
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
       {/*  <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
        {items}
      </ul>
    </Card>
  );
};

export default Cart;
