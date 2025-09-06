import ProductHeader from '@/components/product/ProductHeader';
import ProductList from '@/components/product/ProductList';

function ProductPage() {
	const headerTitle = 'Product List';
	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductList></ProductList>
		</div>
	);
}

/**
 * 1. product list page
 * 2. product detail page
 * 3. ...
 */

export default ProductPage;
