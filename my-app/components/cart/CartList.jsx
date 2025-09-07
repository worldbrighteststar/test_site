import Image from 'next/image';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function CartList({ carts }) {
	const router = useRouter();

	const totalPrice = carts.reduce((acc, cur) => {
		return acc + parseFloat(cur.price);
	}, 0);

	const removeCart = async id => {
		const { data } = await axios.post('http://localhost:3000/api/carts', {
			id: id,
		});
		console.log(data);
		// const { data } = await removeCartItem(id);
		// alert(`${data.name} is deleted`);
		router.replace(router.asPath); //This leads reload the current page
	};

	return (
		<>
			<div>
				<ul>
					{carts.map(cart => {
						return (
							<li key={cart.id} className={styles.item}>
								<div>
									<Image
										src={cart.imageUrl}
										width={50}
										height={50}
										alt={cart.name}
									></Image>
								</div>
								<div className={styles.description}>
									<div>{cart.name}</div>
									<div>{cart.price}</div>
									<button onClick={() => removeCart(cart.id)}>delete</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<p>count : {totalPrice}</p>
				<p>total price : {carts.length}</p>
			</div>
		</>
	);
}
