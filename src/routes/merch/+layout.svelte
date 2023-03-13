<div class="layout">
	<aside>
		<nav>
			<ul>
				<h4>Merch</h4>
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

		ul {
			@include glassBack();
			position: fixed;
			margin-top: 10rem;
		}

		a {
			margin-left: 15px;
		}
	}
</style>
