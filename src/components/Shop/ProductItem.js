import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartStore'

const ProductItem = (props) => {

  const dispatch = useDispatch();
  const { title, price, description } = props.item;

  const AddToCart = (product) => {
    dispatch(cartActions.addToCart(
      {
        title: product.title,
        price: product.price,
        quantity: 1
      })
    )
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => { AddToCart(props.item) }}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;