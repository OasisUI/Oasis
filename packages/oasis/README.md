<h1 align="center">
  <img src="https://cdn.rawgit.com/OasisUI/Oasis/dev/icon/icon.svg" width="200"/>
</h1>
<p align="center">🍃 Elegant UI framework for building prototype.</p>
<p align="center">
	<a href="https://travis-ci.com/OasisUI/Oasis">
		<img src="https://travis-ci.com/OasisUI/Oasis.svg?branch=dev"/>
	</a>
	<a href="https://ci.appveyor.com/project/OasisCI/oasis">
		<img src="https://ci.appveyor.com/api/projects/status/4301qx7e2sajibp7?svg=true"/>
	</a>
	<a href="https://codecov.io/gh/OasisUI/Oasis">
		<img src="https://codecov.io/gh/OasisUI/Oasis/branch/dev/graph/badge.svg" />
	</a>
	<a href="https://npmjs.com/oasis-ui">
		<img src="https://img.shields.io/npm/v/oasis-ui/latest.svg"/>
	</a>
	<a href="https://npmjs.com/oasis-ui">
		<img src="https://img.shields.io/npm/dm/oasis-ui.svg"/>
	</a>
	<a href="https://opensource.org/licenses/MIT">
		<img src="https://img.shields.io/npm/l/oasis-ui.svg"/>
	</a>
	<a href="https://lgtm.com/projects/g/OasisUI/Oasis/context:javascript">
		<img src="https://img.shields.io/lgtm/grade/javascript/g/OasisUI/Oasis.svg"/>
	</a>
	<a href="https://www.npmjs.com/package/oasis-ui">
		<img src="https://img.shields.io/david/OasisUI/Oasis.svg?path=packages%2Foasis"/>
	</a>
</p>

## Installation

Oasis is available in [npm](https://npmjs.com/oasis-ui).

```shell
$ npm install oasis-ui
$ yarn add oasis-ui
```
## Usage

```javascript
import Vue from 'vue'
import Oasis from 'oasis-ui'
import 'oasis-ui/lib/theme/index.css'

Vue.use(Oasis)
```
or use specified component:

```javascript
import Vue from 'vue'
import PreviewImg from '@oasis-ui/preview-img'
import '@oasis-ui/theme/theme.css'

Vue.use(PreviewImg)
```
