<script>
	import Svg from '../lib/birdy.svelte';
</script>

<div class="footer">
	<h1>Sky<br />High<br />Clothing</h1>
	<footBox>
		<ul>
			<li><a href="/">HOME</a></li>
			<li><a href="/merch/">MERCH</a></li>
		</ul>
	</footBox>
	<footBox>
		<ul>
			<li><a href="/contact/">CONTACT</a></li>
			<li><a href="/about/">ABOUT</a></li>
		</ul>
	</footBox>

	<footBox>
		<socBox>
			<a href="/https://www.facebook.com/profile.php?id=100078803221612/">
				<Svg />
			</a>
		</socBox>
	</footBox>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@import 'basecamp';

	.footer {
		display: grid;
		background: $gradient;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		z-index: 950;
		position: relative;

		footBox {
			margin: 8% 0 0 0;

			h1 {
				display: grid;
				grid-row: 1;
				grid-column: 1;
				margin: $marg;
				padding: $pad;
				font-size: $f-sm;
			}

			ul {
				display: grid;
				position: relative;
				margin: 5% 3% -8% 10%;
				list-style: none;
				grid-row: 2;
				grid-column: 2;

				li {
					margin: $marg;
					padding: $pad_sm;

					a {
						color: $textMain;
						font-size: $font;
					}
				}
			}
			socBox {
				a {
					font-size: 1vh;
					Svg {
						width: 2vw;
					}
				}
			}
		}
	}

	@media (min-width: 780px) {
		//foots
		.footer {
			margin-bottom: 0;
		}
	}
</style>
