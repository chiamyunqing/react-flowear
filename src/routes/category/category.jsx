import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card';
 
import { ProductContext } from '../../contexts/products';
import './category.scss';

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const [pdts, setProducts] = useState(products[category]);

  useEffect(() => {
    setProducts(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {pdts &&
          pdts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
