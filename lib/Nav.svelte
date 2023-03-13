<!--
-->

<body>
	<ul class="Nav">
		<img src="./img/head_go.png" alt="" />
		<li><a href="/"> Home</a></li>
		<li><a href="/merch">Merch</a></li>
		<li><a href="/contact"> Contact</a></li>
		<li><a href="/about"> About</a></li>
	</ul>
</body>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@import 'basecamp';

	.Nav {
		@include glassBack();
		position: fixed;
		right: 0;
		z-index: 5;
		transition: $tSpeed;

		img {
			display: flex;
			width: 15vw;
		}
	}

	.navbar {
		background: $highlight;
		box-shadow: $mainShadow;
		backdrop-filter: blur(1.5px);
		-webkit-backdrop-filter: blur(1.5px);
		border: $bord;
		position: fixed;
		right: 0;
		overflow: hidden;
		z-index: 50;

		.home {
			display: initial;
			transition: $tSpeed;
		}

		&:hover .home {
			display: initial;
			transition: $tSpeed;
		}
	}

	.link-text {
		display: none;
		margin-left: 1rem;
		font-size: 2vw;
		padding: 1%;
	}

	.logo {
		font-weight: bold;
		text-transform: uppercase;
		margin-bottom: 1rem;
		text-align: center;
		color: $textMain;
		background: $backTre;
		font-size: 1rem;
		letter-spacing: 0.3ch;
		width: 100%;

		&:hover svg {
			transform: rotate(180deg);
			transition: $tSpeed;
		}
	}

	.logo-text {
		font-style: italic;
		display: inline;
		position: absolute;
		padding: 0 23% 0 0;
		left: -999px;
		transition: $tSpeed;
	}

	.navbar:hover .logo svg {
		display: none;
		right: -999px;
		transition: $tSpeed;
	}
</style>
