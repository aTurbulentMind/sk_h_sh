<script lang="ts">
	import ProductCard from '$lib/productCard.svelte';
	import { get } from 'svelte/store';
	import { cartItems } from '../../../cart';

	let colors = 'Purple,  green, red,  blue,  pink';
	let Pu = 'Purple';

	const products: Product[] = [
		{
			id: 'price_1MlEGnBVmXelB3TrHOu7K6rv',
			name: 'Tacoma Love',
			price: 25,
			image: '../img/test_3.jpg',
			info: 'Home',
			colors: colors
		},
		{
			id: 'price_1MlEF9BVmXelB3TrbtxiGhAZ',
			name: 'The Classic',
			price: 25,
			image: '../img/test_2.jpg',
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
			id: 'price_1MlEFoBVmXelB3TrmWXGNXur',
			name: 'Hilltop',
			price: 25,
			image: '../img/test_o.jpg',
			info: 'The classic T',
			colors: Pu
		}
	];
</script>

<body>
	<h1>Hoodies</h1>

	<div class="grid">
		{#each products as product}
			<div class="card"><ProductCard {product} /></div>
		{/each}
	</div>
</body>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@import '../src/lib/basecamp';
</style>
