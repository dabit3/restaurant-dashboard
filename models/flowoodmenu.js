var mongoose = require('mongoose');

var flowoodMenuSchema = new mongoose.Schema({
	dressings: [],
	saladdAddons: [],
	salads: {
		title: String, 
		description: String, 
		option: String
	},
	entrees: {
		title: String, 
		description: String, 
		option: String
	},
	entreeEnhancements: [],
	sandwichesAndBaskets: {
		title: String, 
		description: String, 
		option: String
	},
	sandwichAdditions: [],
	drinks: {
		whiteWine: {
			chardonnay: {
				title: String
			},
			pinotGrigio: {
				title: String
			},
			riesling: {
				title: String
			},
			interestingWhites: {
				title: String
			}
		},
		redWine: {
			cabernet: {
				title: String
			},
			pinotNoir: {
				title: String
			},
			merlot: {
				title: String
			},
			interestingReds: {
				title: String
			}
		},
		cocktails: {
			title: String,
			description: String
		},
		beer: {
			draught: {
				title: String
			},
			bottles: {
				title: String
			}
		}
	},
	desserts: {
		title: String,
		description:String
	}
});

var flowoodAppetizersSchema = new mongoose.Schema({
		title: String, 
		description: String, 
		option: String
})

var flowoodEntreeSchema = new mongoose.Schema({
		title: String, 
		description: String, 
		option: String
})

mongoose.model('FlowoodEntrees', flowoodEntreeSchema);
mongoose.model('FlowoodAppetizers', flowoodAppetizersSchema);
mongoose.model('FlowoodMenu', flowoodMenuSchema);

