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
					<a href="/merch/shirts/">Hats</a>
				</li>
				<li>
					<a href="/merch/hoodies/">Jackets</a>
				</li>
				<li>
					<a href="/merch/shirts/">Shirts</a>
				</li>
				<li>
					<a href="/merch/hoodies/">Pants</a>
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
		grid-template-columns: 5px minmax(auto, 60ch);
		gap: 2rem;

		h4 {
			margin-left: 0;
			text-decoration: $underline;

			a {
				color: $extra;
			}
		}

		ul {
			position: fixed;
			top: 25vh;
			padding: 1px;

			button {
				width: fit-content;
				font-weight: 400;
				background-color: $highlight;
				padding: 0.1rem;
				margin-left: -4px;
			}
		}

		a {
			margin-left: 5px;
			font-size: 0.9rem;
		}
	}
</style>
