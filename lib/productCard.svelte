<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart } from '../cart';
	export let product: Product = { id: '', name: '', price: 0, image: '', info: '', colors: {} };
	let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
	// id: "1"
	let cartItemIndex = cart.findIndex((item) => {
		return item.id === product.id;
	});
	let cartProduct = cart[cartItemIndex];
	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => {
			return item.id === product.id;
		});
		cartProduct = cart[cartItemIndex];
		console.log(cart);
	});
</script>

<div class="grid">
	<div class="card">
		<header class="card-title"><h2>{product.name}</h2></header>
		<img src={product.image} alt="" />
		<div class="body">
			{#if cartProduct !== undefined}
				<div>
					Quantity: <strong>{cartProduct.quantity}</strong>
				</div>
			{/if}
			<div class="info">
				Info: {product.info}
			</div>
			<div>
				Price: ${product.price}
			</div>
			<div class="colors">Colors: {product.colors}</div>
			<footer>
				<button on:click={() => addToCart(product.id)}>Add</button>
				<button on:click={() => removeFromCart(product.id)}>Remove</button>
			</footer>
		</div>
	</div>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@import 'basecamp';
</style>
