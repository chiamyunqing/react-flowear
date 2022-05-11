
import { useContext, Fragment } from 'react';

import { ProductContext } from '../../contexts/products';
import CategoryPreview from '../../components/category-preview/category-preview';

const CategoriesPreview = () => {
  const { products } = useContext(ProductContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => {
        const pdts = products[title];
        return (
          <CategoryPreview key={title} title={title} products={pdts} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;