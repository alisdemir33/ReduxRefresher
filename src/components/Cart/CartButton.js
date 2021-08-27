import classes from './CartButton.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {cartActions} from '../../store/CartStore'

const CartButton = (props) => {

  const dispatch = useDispatch();
  const showCart= useSelector(state => state.cartReducer.showCart)
  const cartItems= useSelector(state => state.cartReducer.cartItems)
  
  const ToggleCartShow = ()=> {
    if(showCart)
    dispatch(cartActions.hideCart())
    else
    dispatch(cartActions.displayCart())
  }

  return (
    <button onClick ={ ()=> {ToggleCartShow()}}  className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
