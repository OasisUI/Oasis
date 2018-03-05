<template>
	<ul class="doc">
		<li>
			<Row>
				<Col span="24">
					<div class="block">col-24</div>
				</Col>
			</Row>
			<Row>
				<Col span="12">
					<div class="block">col-12</div>
				</Col>
				<Col span="12">
					<div class="block">col-12</div>
				</Col>
			</Row>
			<Row>
				<Col span="8">
					<div class="block">col-8</div>
				</Col>
				<Col span="8">
					<div class="block">col-8</div>
				</Col>
				<Col span="8">
					<div class="block">col-8</div>
				</Col>
			</Row>
			<Row gutter="15">
				<Col span="8">
					<div class="block">col-8</div>
				</Col>
				<Col span="8">
					<div class="block">col-8</div>
				</Col>
				<Col span="8">
					<div class="block">col-8</div>
				</Col>
			</Row>
			<Row gutter="15">
				<Col span="8">
					<div class="block">col-8</div>
				</Col>
				<Col span="8" offset="8">
					<div class="block">col-8 offset-8</div>
				</Col>
			</Row>
		</li>
		<li>
		</li>
	</ul>
</template>

<style>
	.o-Row {
		margin: 10px 0;
	}
	.doc > li {
		width: 50%;
	}
	.block {
		height: 40px;
		line-height: 40px;
		background: #64DC9C;
		text-align: center;
		color: white;
		font-size: 16px;
		border-radius: 4px;
		overflow: hidden;
	}
	[class^=o-Col-]:nth-of-type(odd) .block {
		background: #61CC8F;
	}
</style>
