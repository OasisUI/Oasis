<template>
	<div class="home">
		<nav>
			<router-link to="/">
				<img src="../icon/o.svg" alt="">
			</router-link>	
			<router-link to="/button">Document</router-link>
			<a href="https://github.com/joe223/Oasis">Github</a>
		</nav>		
	
	</div>
</template>
<style lang="postcss">
	.home {
		height: 100%;
		background: no-repeat center center/100% auto url('../icon/bg.svg');
		
		&:after {
			display: inline-block;
			content: '';
			vertical-align: middle;
			width: 0;
			height: 100%;
		}

		nav {
			position:fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 70px;
			padding: 0 70px;
			a {
				display: inline-block;
				height: 100%;
				padding: 10px;
				color: #34B697;
				font-size: 16px;
				font-weight: 700;
				text-decoration: none;
				img {
					display: inline-block;
					height: 100%;
					width: 70px;
					vertical-align: middle;
				}
			}
		}
		img {
			display: block;
			width: 100%;
			display: inline-block;
			vertical-align: middle;
		}
	}
</style>

