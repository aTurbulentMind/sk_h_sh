<script lang="ts">
	import ProductCard from '$lib/productCard.svelte';
	import { get } from 'svelte/store';
	import { cartItems } from '../../../cart';

	let colors = 'Purple,  green, red,  blue,  pink';
	let Pu = 'Purple';

	const products: Product[] = [
		{
			id: 'price_1MlEF9BVmXelB3TrbtxiGhAZ',
			name: 'The Classic',
			price: 25,
			image: '../img/test_2.jpg',
			info: 'The classic T',
			colors: Pu
		},
		{
			id: 'price_1MlEFoBVmXelB3TrmWXGNXur',
			name: 'Hilltop',
			price: 25,
			image: '../img/test_o.jpg',
			info: 'The classic T',
			colors: Pu
		},
		{
			id: 'price_1MlEGFBVmXelB3TrURpn5oIU',
			name: 'Eastside',
			price: 25,
			image: '../img/test_1.jpg',
			info: 'The classic T',
			colors: colors
		},
		{
			id: 'price_1MlEGnBVmXelB3TrHOu7K6rv',
			name: 'Tacoma Love',
			price: 25,
			image: '../img/test_3.jpg',
			info: 'Home',
			colors: colors
		}
	];

	async function checkout() {
		await fetch('api/stripeCheckout', {
			// http://localhost:5173/api/stripeCheckout
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ items: get(cartItems) })
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				window.location.replace(data.url);
			});
	}
</script>

<h1>Shirts</h1>

<div class="big_box">
	<div class="box">
		<div class="name">
			<h2>That store</h2>
		</div>
		{#each products as product}
			<ProductCard {product} />
		{/each}

		<div class="sell_button">
			<button on:click={() => checkout()}>checkout</button>
		</div>
	</div>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@import '../src/lib/basecamp';
</style>
