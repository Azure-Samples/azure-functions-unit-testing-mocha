var chai = require('chai');
var httpFunction = require('../index')
const context = require('../testing/defaultContext')
var expect = chai.expect;
	it ('Http trigger should return known text', async function() {
		const request = {
			query: { name: 'Bill' }
		};
		await httpFunction(context,request);
		expect(context.log.callCount).to.equal(1);
		expect(context.res.body).equal('Hello Bill');
	});
