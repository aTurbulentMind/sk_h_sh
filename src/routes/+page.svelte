<body>
	<div class="art-banner" id="art-banner">
		<!--  <div class="banner-text">Sky High Clothing</div>
		<div class="banner-phrase">"words"</div>-->
		<div class="coaButt"><a href="/merch/">SHOP <br /> NOW</a></div>
	</div>

	<!--welcome info-->

	

	<h1>Hello, thank you for stopping in.</h1>
	<p>
		Welcome to Sky High Clothing, your friendly neighborhood clothing store in the heart of Tacoma,
		Washington! We pride ourselves on offering the latest fashion trends at affordable prices, all
		while providing a warm and welcoming atmosphere for our customers.
	</p>

	<p>
		Whether you're looking for the perfect outfit for a night out or a cozy sweater to snuggle up
		in, we've got you covered. Come on in and let us help you find your new favorite piece!
	</p>

	<img class="room" src="img/test_1.jpg" alt="its my face" />

	<p>
		And with a wide range of sizes and styles available, there's something for everyone at our
		store. So why wait? Come visit us today and see why Sky High Clothing is Tacoma's go-to
		destination for fashion-forward finds!
	</p>

	<h3 class="butt">
		<a href="/merch/">Welcome!</a>
	</h3>

	<!--reviews

	<h2>Here is what people are saying about my work:</h2>

	<div class="grid">
		<div class="card">
			
			<div class="card-title">Artistic Artisan Counters</div>
			<br />
			<div class="body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim quisquam? Hic.
			</div>
		</div>

		<div class="card">
			
			<div class="card-title">Debt$Net</div>
			<br />
			<div class="body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim quisquam? Hic.
			</div>
		</div>

		<div class="card">
			
			<div class="card-title">OATH</div>
			<br />
			<div class="body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim quisquam? Hic.
			</div>
		</div>
	</div>
-->
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
		height: 100vh;
		display: grid;
		background-image: url(/img/logo_tall.jpg);
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		background-size: 100vh;
		grid-template-columns: 20px 1fr 1fr 1fr 20px;
		grid-template-rows: 20px 1fr 1fr 1fr 20px;
		margin: 5px 0 0 5px;
		z-index: 950;

		a {
			font-size: 3vw;
			z-index: 950;
		}
	}

	.banner-text {
		font-size: 7vw;
		font-weight: bold;
		font-family: $secondaryFont;

		color: $highlight;
		text-shadow: $text_shadow_two;
		letter-spacing: 3px;
		grid-column: 2 / span 2;
		grid-row: 2 /* no need to type one*/;
		align-self: center;
		justify-self: center;
		z-index: 950;
	}

	.banner-phrase {
		font-size: 3vw;
		font-weight: bold;
		font-family: $mainFont;
		color: $highlight;
		text-shadow: $text_shadow_two;
		letter-spacing: 3px;
		grid-column: 2 / span 2;
		grid-row: 3 /* no need to type one*/;
		align-self: center;
		justify-self: center;
		z-index: 950;
	}

	.coaButt {
		display: grid;
		align-self: center;
		justify-self: center;
		text-align: center;
		grid-column: 4;
		grid-row: 2;
		width: fit-content;
		border-radius: 3px;
		z-index: 950;
		padding: 2%;
		background-color: $backHallow;
		text-decoration: underline $extra;

		&:hover {
			transition: all $tSpeed ease-in-out;
			background: $grabber;
			color: $backMain;
			box-shadow: $mainShadow;
			transform: scale(1.1);
			cursor: pointer;
			text-decoration: none;
		}

		a {
			font-size: $f-xl;
			padding: 1vw;
		}
	}

	.full_img {
		border-radius: 0;
	}

	.butt {
		margin: 5% auto;
	}

	@media (max-width: 768px) {
		.art-banner {
			grid-template-columns: 20px 1fr 1fr 1fr 60px;
			grid-template-rows: 20px 1fr 1fr 1fr 70px;
		}
	}

	@media only screen and (min-width: 780px) {
		.room {
			margin-left: 20vw;
		}
	}
</style>
