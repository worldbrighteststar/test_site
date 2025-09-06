import Image from 'next/image';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';

export default function CartList({ carts }) {
    const totalPrice = carts.reduce((acc, cur) => {
        return acc + parseFloat(cur.price);
    }, 0);

    const removeCart = async id => {
        removeCartItem(id);
    };
    
    return (
        <>
            <div>
                <ul>
                    {carts.map(cart => {
                        return (
                            <li key={cart.id} className={styles.item}>
                                <div><Image src={cart.imageUrl} width={50} height={50} alt={cart.name}></Image></div>
                                <div className={styles.description}>
                                    <div>{cart.name}</div>
                                    <div>{cart.price}</div>
                                    <button onClick={() => removeCart(cart.id)}>delete</button>
                                </div>
                            </li>);
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