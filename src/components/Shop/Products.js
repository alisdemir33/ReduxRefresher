import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const products = [
    {
      title: 'lego',
      price: 10,
      description: 'This is a LEGO - amazing!'
    }, {
      title: 'knex',
      price: 15,
      description: 'This is a KNEX - emberassing!'
    }
  ]

  const ProdList = products.map((item) => {
    return <ProductItem
      item={{
        title: item.title,
        price: item.price,
        description: item.description
      }}
    />
  })

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {ProdList}
      </ul>
    </section>
  );
};

export default Products;
