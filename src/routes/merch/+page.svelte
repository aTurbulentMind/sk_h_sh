<body>
	<h1>So much stuff</h1>

	<div class="sales_block grid">
		<div class="card">
			<img src="img/test_o.jpg" alt="" />
			<div class="card-title"><h3><a href="/merch/shirts"> Head ware and accessories</a></h3></div>
			<br />
			<div class="body">Stay warm and fancy</div>
		</div>

		<div class="card">
			<img src="img/test_1.jpg" alt="" />
			<div class="card-title"><h3><a href="/merch/shirts"> Jackets and over gear</a></h3></div>
			<br />
			<div class="body">Hoodies, flannels and Jackets to keep you warm and Sky High fly</div>
		</div>

		<div class="card">
			<img src="img/test_2.jpg" alt="" />
			<div class="card-title"><h3><a href="/merch/shirts">Shirts</a></h3></div>
			<br />
			<div class="body">Represent your homes</div>
		</div>

		<div class="card">
			<img src="img/test_3.jpg" alt="" />
			<div class="card-title"><h3><a href="/merch/shirts"> Pants & Sweats</a></h3></div>
			<br />
			<div class="body">Be cozy and the best looking in the room at the same time.</div>
		</div>
	</div>
</body>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@import '../src/lib/basecamp';

	body {
		margin-top: 4rem;

		h3 {
			margin: 2% 10%;
		}
	}
	.sales_block {
		margin-left: 2vw;
	}

	@media (min-width: 780px) {
		.sales_block {
			margin-left: 5vw;
		}
	}
</style>
