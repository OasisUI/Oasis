<template lang="docs">
	# Avatar 头像

	## 基本使用

	:::html
		<Avatar
			src="https://cloud.githubusercontent.com/assets/848515/21667899/c46e1fba-d337-11e6-9f9b-62a28deb6d32.png"
			name="Oasis"
		></Avatar>
		<Avatar
			name="Oasis"
		></Avatar>
		<Avatar
			name="小明"
		></Avatar>
	:::

	## AvatarGroup 头像组

	:::html
		<AvatarGroup size="sm">
			<Avatar
				src="https://cloud.githubusercontent.com/assets/848515/21667899/c46e1fba-d337-11e6-9f9b-62a28deb6d32.png"
				name="Oasis"
			></Avatar>
			<Avatar
				name="Oasis"
			></Avatar>
			<Avatar
				name="小明"
			></Avatar>
		</AvatarGroup>
	:::

	## Avatar API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|name| 姓名 | `String` | `` |
	|src| 头像图片地址 | `String` | ``|
	|round| 头像形状 | `Boolean` | `true` |
	|size| 头像大小 | `String` | `md` |

	### AvatarGroup API

	|参数|说明|类型|默认值|
	|---|---|---|---|
	|size| 头像大小 | `String` | `md` |

</template>

<script>
	export default {}
</script>
