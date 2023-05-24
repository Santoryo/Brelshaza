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
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/blueprotocol": [~4],
		"/hsr": [5],
		"/hsr/[uid]": [~6],
		"/lol/blitz-and-crank": [7],
		"/lol/champions": [9],
		"/lol/champion/[name]": [~8],
		"/lol/mythic-shop": [~10],
		"/lol/sale-rotation": [~11],
		"/lol/skinline/[name]": [12],
		"/lostark/leaderboard": [13],
		"/lostark/[id]": [~14,[],[2]],
		"/portfolio": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';