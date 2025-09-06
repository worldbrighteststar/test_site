import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
	const router = useRouter();
	
	const {id, name, imageUrl, price} = productDetail;

	const addCart = async () => {
		const response = await createCartItem(productDetail);
		
		alert('Added to cart now!');
		
		router.push('/cart');
	}
	
	return (
		<div className={styles.container}>
			<div>
				<Image
					src={imageUrl}
					width={250}
					height={250}
					alt={name}
				/>
				{/* <img src={imageUrl} alt="" /> */}
			</div>
			<div className={styles.description}>
				<p>{name}</p>
				<p>{price}</p>
				<button onClick={addCart}>Add to Cart</button>
			</div>
		</div>
	);
}
