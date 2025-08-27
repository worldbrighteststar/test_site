import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductPage() {
	const [products, setProducts] = useState();
	useEffect(() => {
		axios.get('http://localhost:4000/products').then(response => {
			setProducts(response.data);
		});
	}, []);

	console.log(products);
	return <div style={{ color: 'blue' }}>Hello Next</div>;
}

/**
 * 1. product list page
 * 2. product detail page
 * 3. ...
 */

export default ProductPage;
