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
		<!--The amount to purchase-->
		<div>
			<h3>Quantity: <strong>{cartProduct.quantity}</strong></h3>
		</div>
	{/if}
	<!--About the product-->
	<div class="info"><p>Info: {product.info}</p></div>
	<!--price of the product-->
	<div><p>Price: ${product.price}</p></div>
	<!--color options-->
	<div class="colors"><p>Colors: {product.colors}</p></div>
	<!--add oor remove buttons-->
	<footer>
		<button on:click={() => addToCart(product.id)}>Add</button>
		<button on:click={() => removeFromCart(product.id)}>Remove</button>
	</footer>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@import 'basecamp';

	h3,
	p {
		margin: 2% 5%;
	}

	h3 {
		background-color: $highlight;
		width: fit-content;
		padding: 5px;
		border-radius: $rad;
	}

	button {
		font-weight: 400;
		background-color: $grabber;
	}
</style>
