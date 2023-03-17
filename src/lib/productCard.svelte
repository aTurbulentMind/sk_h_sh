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

<div>
	<!--product title-->
	<h2 class="card-title">{product.name}</h2>

	<!--image place-->
	<img src={product.image} alt="" />

	{#if cartProduct !== undefined}
		<!--The amout to purchase-->
		<div>
			Quantity: <strong>{cartProduct.quantity}</strong>
		</div>
	{/if}

	<!--About the product-->
	<div class="info">Info: {product.info}</div>

	<!--price of the product-->
	<div>Price: ${product.price}</div>

	<!--color options-->
	<div class="colors">Colors: {product.colors}</div>

	<!--add oor remove buttons-->
	<footer>
		<button on:click={() => addToCart(product.id)}>Add</button>
		<button on:click={() => removeFromCart(product.id)}>Remove</button>
	</footer>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@import 'basecamp';
</style>
