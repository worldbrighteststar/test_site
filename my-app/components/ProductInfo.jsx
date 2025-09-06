import Image from 'next/image';
import styles from './ProductInfo.module.css';

export default function ProductInfo({ productDetail }) {
	return (
		<div className={styles.container}>
			<div>
				<Image
					src={productDetail.imageUrl}
					width={250}
					height={250}
					alt={productDetail.name}
				/>
				{/* <img src={productDetail.imageUrl} alt="" /> */}
			</div>
			<div className={styles.description}>
				<p>{productDetail.name}</p>
				<p>{productDetail.price}</p>
				<button>Add to Cart</button>
			</div>
		</div>
	);
}
