import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';

export default function ProductDatialPage({ productId, productInfo }) {
	const headerTitle = 'Product Detail Page';

	return (
		<div>
			<ProductHeader title={headerTitle} />
			<div>Product Id : {productId}</div>
			<div>Product Name : {productInfo.name}</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const id = context.params.id;
	const response = await fetchProductById(id);

	return {
		props: {
			productId: context.params.id,
			productInfo: response.data,
		},
	};
}
