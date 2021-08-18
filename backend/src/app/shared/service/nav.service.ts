import { Injectable, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { WINDOW } from "./windows.service";
// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false

	constructor(@Inject(WINDOW) private window) {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener("window:resize", ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false
		},
		{
			path: '/vendors/list-vendors', title: 'Vendors', icon: 'users', type: 'link', active: false,
			//  children: [
			// 	{ path: '/vendors/list-vendors', title: 'Vendor List', type: 'link' },
			// 	{ path: '/vendors/create-vendors', title: 'Create Vendor', type: 'link' },
			// ]
		},
		
		// {
		// 	title: 'Sales', icon: 'dollar-sign', type: 'sub', active: false, children: [
		// 		{ path: '/sales/orders', title: 'Orders', type: 'link' },
		// 		{ path: '/sales/transactions', title: 'Transactions', type: 'link' },
		// 	]
		// },
		{
			path: '/sales/orders', title: 'Sales', icon: 'dollar-sign', type: 'link', badgeType: 'primary', active: false
		},
		{
			title: 'Finance', icon: 'dollar-sign', type: 'sub', active: false, children: [
				{ path: 'finance/insights', title: 'Insights', type: 'link' },
				{ path: '/finance/transactions', title: 'Transactions', type: 'link' },
				{ path: '/finance/chart-of-account', title: 'Charts of Account', type: 'link' },
				// { 
				// 	title: 'Charts of Account', icon: 'tag', type: 'sub', active: false, children: [
				// 		{ path: '#', title: 'Revenues', type: 'link' },
				// 		{ path: '/localization/taxes', title: 'Taxes', type: 'link' },
				// 		{ path: '#', title: 'Delivering', type: 'link' },
				// 		{ path: '#', title: 'Vendors', type: 'link' },
				// 	]
				//  },
			]
		},
		{
			path: '/events', title: 'Events', icon: 'calendar', type: 'link', badgeType: 'primary', active: false
		},
		{
			title: 'Product Management', icon: 'box', type: 'sub', active: false, children: [
				{ path: '/products/insights', title: 'Insights', type: 'link' },
				{ path: '/products/category', title: 'Categories', type: 'link' },
				{ path: '/products/community', title: 'Community', type: 'link' },
				 
				// {
				// 	title: 'digital', type: 'sub', children: [
				// 		{ path: '/products/digital/digital-category', title: 'Category', type: 'link' },
				// 		{ path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
				// 		{ path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
				// 		{ path: '/products/digital/digital-add-product', title: 'Add Product', type: 'link' },
				// 	]
				// },
			]
		},
		{
			path: '/users/list-user', title: 'Users', icon: 'user-plus', type: 'link', active: false
			// , children: [
			// 	{ path: '/users/list-user', title: 'User List', type: 'link' },
			// 	{ path: '/users/create-user', title: 'Create User', type: 'link' },
			// ]
		},
		{
			title: 'Insights & Reports', path: '/reports', icon: 'bar-chart', type: 'link', active: false
		},
		{
			path: '/moderator/list-moderator', title: 'Moderators', icon: 'users', type: 'link', active: false
			// , children: [
			// 	{ path: '/users/list-user', title: 'User List', type: 'link' },
			// 	{ path: '/users/create-user', title: 'Create User', type: 'link' },
			// ]
		},
		
		{
			title: 'Settings', icon: 'settings', type: 'sub', children: [
				{ path: '/settings/general', title: 'General', type: 'link' },
				{ path: '/settings/finance', title: 'finance', type: 'link' },
				{ path: '/settings/profile', title: 'Profile', type: 'link' },
			]
		},
		{
			path: '/faqs', title: 'FAQs', icon: 'help-circle', type: 'link', badgeType: 'primary', active: false
		}
		// {
		// 	title: 'Coupons', icon: 'tag', type: 'sub', active: false, children: [
		// 		{ path: '/coupons/list-coupons', title: 'List Coupons', type: 'link' },
		// 		{ path: '/coupons/create-coupons', title: 'Create Coupons', type: 'link' },
		// 	]
		// },
		// {
		// 	title: 'Pages', icon: 'clipboard', type: 'sub', active: false, children: [
		// 		{ path: '/pages/list-page', title: 'List Page', type: 'link' },
		// 		{ path: '/pages/create-page', title: 'Create Page', type: 'link' },
		// 	]
		// },
		// {
		// 	title: 'Media', path: '/media', icon: 'camera', type: 'link', active: false
		// },
		// {
		// 	title: 'Menus', icon: 'align-left', type: 'sub', active: false, children: [
		// 		{ path: '/menus/list-menu', title: 'Menu Lists', type: 'link' },
		// 		{ path: '/menus/create-menu', title: 'Create Menu', type: 'link' },
		// 	]
		// },
		// {
		// 	title: 'Localization', icon: 'chrome', type: 'sub', children: [
		// 		{ path: '/localization/translations', title: 'Translations', type: 'link' },
		// 		{ path: '/localization/currency-rates', title: 'Currency Rates', type: 'link' },
		// 		{ path: '/localization/taxes', title: 'Taxes', type: 'link' },
		// 	]
		// },
		
		// {
		// 	title: 'Invoice', path: '/invoice', icon: 'archive', type: 'link', active: false
		// },
		// {
		// 	title: 'Login',path: '/auth/login', icon: 'log-in', type: 'link', active: false
		// }
	]
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
