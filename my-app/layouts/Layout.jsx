import Link from 'next/link';
import React from 'react';

export default function Layout({ children }) {
	return (
		<div>
			<nav>
				<Link href={'/'}>Product List</Link> | <Link href={'/cart'}>Cart</Link>
			</nav>
			<div>{children}</div>
		</div>
	);
}
