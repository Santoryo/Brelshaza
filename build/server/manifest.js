const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/0de0c9a3f891b11f8439c802442e96a7.woff","fonts/0de0c9a3f891b11f8439c802442e96a7.woff2","fonts/DrukXCond-Super.woff","fonts/DrukXCond-Super.woff2","fonts/DrukXCond-SuperItalic.woff","fonts/DrukXCond-SuperItalic.woff2","images/8.png","images/background.jpg","images/bottom.png","images/brelshaza.gif","images/brelshaza.webp","images/div.png","images/left.png","images/loa/arcanist.png","images/loa/artillerist.png","images/loa/bard.png","images/loa/berserker.png","images/loa/deadeye.png","images/loa/deathblade.png","images/loa/destroyer.png","images/loa/glaiver.png","images/loa/gunlancer.png","images/loa/gunslinger.png","images/loa/paladin.png","images/loa/scrapper.png","images/loa/shadowhunter.png","images/loa/sharpshooter.png","images/loa/sorceress.png","images/loa/soulfist.png","images/loa/striker.png","images/loa/wardancer.png","images/loader1x.gif","images/navbar.png","images/right.png","images/texture.png","images/top.png","private/.env","robots.txt"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".jpg":"image/jpeg",".gif":"image/gif",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.717e845a.js","imports":["_app/immutable/entry/start.717e845a.js","_app/immutable/chunks/index.8c9c5232.js","_app/immutable/chunks/singletons.0d8453cb.js","_app/immutable/chunks/index.d87cea17.js","_app/immutable/chunks/paths.fde7694f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e4d32203.js","imports":["_app/immutable/entry/app.e4d32203.js","_app/immutable/chunks/index.8c9c5232.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-037f8005.js'),
			() => import('./chunks/1-5712ff1f.js'),
			() => import('./chunks/2-ba8168f6.js'),
			() => import('./chunks/3-19034581.js'),
			() => import('./chunks/4-ff036919.js'),
			() => import('./chunks/5-81fe7058.js'),
			() => import('./chunks/6-174478a2.js'),
			() => import('./chunks/7-c19770db.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/loa/user/[id]",
				pattern: /^\/api\/loa\/user\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-b8fe98b3.js')
			},
			{
				id: "/api/loa/[offset]",
				pattern: /^\/api\/loa\/([^/]+?)\/?$/,
				params: [{"name":"offset","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-2f117bda.js')
			},
			{
				id: "/lol/mythic-shop",
				pattern: /^\/lol\/mythic-shop\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/lol/sale-rotation",
				pattern: /^\/lol\/sale-rotation\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/lostark/leaderboard",
				pattern: /^\/lostark\/leaderboard\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/lostark/[id]",
				pattern: /^\/lostark\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
