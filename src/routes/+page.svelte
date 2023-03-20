<script lang="ts">
	import ProductCard from '$lib/productCard.svelte';
	import { get } from 'svelte/store';
	import { cartItems } from '../cart';
</script>

<body>
	<div class="art-banner" id="art-banner">
		<div class="banner_img">
			<img src="/img/test_o.jpg/" alt="" />
			<a href="/merch/" style="font-size: 5vw;">Shop</a>
		</div>
		<div class="banner_img">
			<img src="/img/test_o.jpg/" alt="" />
			<a href="/merch/" style="font-size: 5vw;">New</a>
		</div>
		<div class="banner_img">
			<img src="/img/test_o.jpg/" alt="" /> <a href="/merch/" style="font-size: 5vw;">Hoodies</a>
		</div>
		<div class="banner_img">
			<img src="/img/test_o.jpg/" alt="" /> <a href="/merch/" style="font-size: 5vw;">Shirts</a>
		</div>
		<div class="banner_img">
			<img src="/img/test_o.jpg/" alt="" /> <a href="/merch/" style="font-size: 5vw;">Pants</a>
		</div>

		<div class="banner_img">
			<img src="/img/test_o.jpg/" alt="" />
			<a href="/merch/" style="font-size: 5vw;">Accessories</a>
		</div>
	</div>
	<!--welcome info-->

	<h1>Hello, thank you for stopping in.</h1>

	<div class="l_r_block">
		<img src="img/test_1.jpg" alt="" />
		<div class="l_r_title" />

		<div class="l_r_body">
			<p>
				Welcome to Sky High Clothing, your friendly neighborhood clothing store in the heart of
				Tacoma, Washington! We pride ourselves on offering the latest fashion trends at affordable
				prices, all while providing a warm and welcoming atmosphere for our customers.
			</p>
		</div>
	</div>
	<!--end-->

	<!--card-->
	<div class="l_r_block_l">
		<img class="img_l" src="img/test_1.jpg" alt="" />
		<div class="l_r_title_l" />

		<div class="l_r_body_l">
			<p>
				Whether you're looking for the perfect outfit for a night out or a cozy sweater to snuggle
				up in, we've got you covered. Come on in and let us help you find your new favorite piece!
				And with a wide range of sizes and styles available, there's something for everyone at our
				store!
			</p>
		</div>
	</div>
	<!--end-->

	<!--card-->
	<div class="l_r_block">
		<img class="img" src="img/test_1.jpg" alt="" />
		<div class="comp_title" />
		<div class="comp_body">
			<p>
				So why wait? Come visit us today and see why Sky High Clothing is Tacoma's go-to destination
				for fashion-forward finds!
			</p>
		</div>
	</div>
	<!--end-->

	<h3 class="butt">
		<a href="/merch/">Welcome!</a>
	</h3>
</body>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@import '../src/lib/basecamp';

	body {
		overflow-x: hidden;
		z-index: 999;
		margin-top: 4rem;
	}

	//entry banner

	.art-banner {
		height: fit-content;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		z-index: 950;

		.banner_img {
			width: fit-content;
			height: fit-content;
			z-index: 950;
			display: grid;

			a {
				@include glassBack();
				padding: 3px;
				display: grid;
				font-size: $font;
				z-index: 970;
				margin: -50% auto;
			}
		}
	}

	img {
		border-radius: 0;
	}

	.butt {
		margin: 5% auto;
	}

	@media (max-width: 768px) {
		.art-banner {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
		}
	}

	@media only screen and (min-width: 780px) {
		.room {
			margin-left: 20vw;
		}
	}
</style>
