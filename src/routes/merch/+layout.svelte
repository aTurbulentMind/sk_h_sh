<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems } from '../../cart';

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

<div class="layout">
	<aside>
		<nav>
			<ul>
				<h4><a href="/merch/"><strong> Merch</strong></a></h4>
				<li>
					<a href="/merch/shirts">Hats</a>
				</li>
				<li>
					<a href="/merch/shirts">Jackets</a>
				</li>
				<li>
					<a href="/merch/shirts">Shirts</a>
				</li>
				<li>
					<a href="/merch/pants">Pants</a>
				</li>
				<li>
					<button on:click={() => checkout()}>checkout</button>
				</li>
			</ul>
		</nav>
	</aside>

	<main>
		<slot />
	</main>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@import '../src/lib/basecamp';

	.layout {
		display: grid;
		grid-template-columns: 15px minmax(auto, 60ch);
		gap: 4rem;

		h4 {
			margin-left: 0;

			a {
				color: $extra;
			}
		}

		ul {
			@include glassBack();
			position: fixed;
			margin-top: 10rem;
			padding: 5px;

			button {
				width: fit-content;
				font-weight: 700;
				background-color: $highlight;
			}
		}

		a {
			margin-left: 10px;
		}
	}
</style>
