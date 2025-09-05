import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/ProductInfo';
import axios from 'axios';

export default function ProductDetailPage({ productDetail }) {
	const headerTitle = 'Product Detail Page';

	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductInfo productDetail={productDetail}></ProductInfo>
		</div>
	);
}

export async function getServerSideProps(context) {
	const id = context.params.id;
	const { data } = await fetchProductById(id);

	return {
		props: {
			productDetail: data,
		},
	};
}
