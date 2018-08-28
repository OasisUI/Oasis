import Navbar from '@/nav/src/index'
import SideNav from '@/nav/src/sideNav'
import NavItem from '@/nav/src/navItem'
import SubNav from '@/nav/src/subNav'
import Avatar from '@/avatar'
import {
	querySelector as $,
	createInstance,
	destroyInstance
} from '../helper'

describe('SideNav', () => {
	it('render', () => {
		const wrapper = renderSideNavWrapper()

		expect(wrapper._isVue).toBeTruthy()

		destroyInstance(wrapper)
	})

	it('toggle', (done) => {
		const wrapper = renderSideNavWrapper()
		const $el = wrapper.el
		const $group = $('.o-SubNav__group', $el)[0]

		expect($group.style.display).toEqual('none')

		$('.o-SubNav__title', $el)[0].click()

		setTimeout(() => {

			expect($group.style.display).toEqual('')

			destroyInstance(wrapper)
			done()
		}, 10)
	})

	it('select', (done) => {
		const wrapper = renderSideNavWrapper()
		const $el = wrapper.el
		const $group = $('.o-SubNav__group', $el)[0]
		const $navItem = $('.o-NavItem', $group)[0]

		expect($navItem.classList.contains('is-selected')).toBeFalsy()

		$navItem.click()

		setTimeout(() => {

			expect($navItem.classList.contains('is-selected')).toBeTruthy()

			destroyInstance(wrapper)
			done()
		}, 10)
	})
})

describe('Navbar', () => {
	it('render', () => {
		const wrapper = renderNavbarWrapper()

		expect(wrapper._isVue).toBeTruthy()

		destroyInstance(wrapper)
	})

	/**
	 * TODO
	 * setTimeout cause Error
	 */
	// it('select', (done) => {
	// 	const wrapper = renderNavbarWrapper()
	// 	const $el = wrapper.el
	// 	const $navItem = $('.o-NavItem', $el)[1]
	//
	// 	console.log($navItem.classList)
	//
	// 	expect($navItem.classList.contains('is-selected')).toBeFalsy()
	//
	// 	$navItem.click()
	//
	// 	setTimeout(() => {
	//
	// 		expect($navItem.classList.contains('is-selected')).toBeTruthy()
	//
	// 		destroyInstance(wrapper)
	// 		done()
	// 	}, 10)
	// })
})

function renderSideNavWrapper () {
	return createInstance({
		render () {
			return (<SideNav>
				<SubNav>
					<template slot="title">
						Group 1
					</template>
					<NavItem>
						Navigator A
					</NavItem>
				</SubNav>
				<SubNav>
					<template slot="title">
						Group 2
					</template>
					<NavItem>
						Navigator B
					</NavItem>
					<NavItem>
						Navigator C
					</NavItem>
					<SubNav>
						<template slot="title">
							Group 2
						</template>
						<NavItem>
							Navigator B
						</NavItem>
						<NavItem>
							Navigator C
						</NavItem>
					</SubNav>
				</SubNav>
				<NavItem>
					Navigator E
				</NavItem>
			</SideNav>)
		}
	})
}

function renderNavbarWrapper () {
	return createInstance({
		render () {
			return (<Navbar>
				<NavItem>Home</NavItem>
				<NavItem>Component</NavItem>
				<NavItem>API</NavItem>
			</Navbar>)
		}
	})
}
