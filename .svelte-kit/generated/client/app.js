export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/lol/blitz-and-crank": [4],
		"/lol/champions": [6],
		"/lol/champion/[name]": [~5],
		"/lol/mythic-shop": [~7],
		"/lol/sale-rotation": [~8],
		"/lol/skinline/[name]": [9],
		"/lostark/leaderboard": [10],
		"/lostark/[id]": [~11,[],[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';