const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-1b669a88.js","js":["start-1b669a88.js","chunks/index-f2be78c8.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [
			{
				type: 'endpoint',
				id: "chatbot",
				pattern: /^\/chatbot\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/chatbot.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
