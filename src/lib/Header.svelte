<script lang="ts">
  type Planet={
    id:string;
    name:string;
}
	export let data: Planet[];
</script>

<header>
	<div class="navbar">
		<div class="logo-container">
			<h2>THE PLANETS</h2>
		</div>
		<nav>
			<ul class="planet-list">
				{#each data.planets as planet}
					<li class="planet-item">
						<div class="list">
							<a href="/planets/{planet.id}"
								>{planet.name}
							</a>
						</div>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>


	.logo-container {
		text-align: center;
	}
	a {
		color: #fff;
	}
	ul li:active {
		opacity: unset;
		border-top: 2px solid white;
	}
	ul li::after {
		opacity: 0.2;
		background-color: #fff;
		content: '';
		position: absolute;
		top: 20%;
		left: 0;
		opacity: 0.1;
		width: 100%;
		height: 0.0625rem;
	}

	.planet-item {
		font-family: Spartan;
		font-size: 0.6875rem;
		font-weight: 700;
		opacity: 0.75;
		line-height: 1.5625rem;
		letter-spacing: 0.0625rem;
		text-transform: uppercase;
	}
	h2 {
		color: #fff;
		text-transform: uppercase;
		font-family: Antonio;
	}

	.planet-list {
		display: flex;
		flex-direction: row;
		list-style: none;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		margin-top: 2.44rem;
	}
	.list a {
		font-family: Spartan;
		font-size: 0.6875rem;
		font-weight: 700;
		line-height: 1.5625rem;
		letter-spacing: 0.0625rem;
		text-transform: uppercase;
		text-decoration: none;
	}

	@media only screen and (min-width: 1024px) {
		.navbar {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		ul li:active {
			opacity: unset;
			border-top: 2px solid white;
		}

		.logo-container {
			display: flex;
			align-items: center;
		}

		.planet-list {
			margin-top: 0rem;
			color: #fff;
			font-family: Spartan;
		}
		ul li::after {
			top: 10%;
		}
	}

	@media only screen and (max-width: 765px) /**mobile*/ {

		.list {
			font-size: 0.985rem;

			letter-spacing: 0.08525rem;
			text-transform: uppercase;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.planet-list {
			align-items: flex-start;
			margin-top: 2.75rem;
			padding: 0rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 2.6rem;
			list-style: none;
		}

		h2 {
			font-size: 1.75rem;
			font-weight: 400;
			letter-spacing: -0.06563rem;
		}

		.list {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.planet-item a {
			display: flex;
			align-items: center;
		}

		.navbar {
			background-color: #070724;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
		}

		h2::after,
		h2::before {
			content: '';
			position: absolute;
			margin-top: 3rem;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: rgb(158, 146, 146);
			opacity: 0.2;
		}
		nav {
			display: none;
		}
	

		.list::after {
			content: '';
			position: absolute;
			top: 5.7rem;
			left: 0;
			opacity: 0.1;
			width: 100%;
			height: 0.0625rem;
			background-color: hsla(0, 0%, 100%, 1); /* Line color */
		}


		li {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #fff;
			font-family: Spartan Bold;
			font-size: 0.9375rem;
			font-weight: 700;
			line-height: 1.5625rem;
			letter-spacing: 0.08525rem;
			text-transform: uppercase;
		}
		ul li:active {
			border-top: none;
		}
	}
</style>
