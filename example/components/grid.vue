<template lang="docs">
	# 布局


	## 基本使用

	Oasis 使用 24 列的布局方式。不支持响应式布局。

	:::html
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
	:::

	## 间隙

	通过 `gutter` 设置列之间的间隙。

	:::html
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
	:::
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
