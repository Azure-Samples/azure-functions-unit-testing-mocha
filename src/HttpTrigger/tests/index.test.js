let chai = require('chai');
const httpFunction = require('../index')
const context = require('../testing/defaultContext')
let expect = chai.expect;
it ('Http trigger should return known text', async () => {
	const request = {
		query: { name: 'Bill' }
	};
	await httpFunction(context,request);
	expect(context.log.callCount).to.equal(1);
	expect(context.res.body).equal('Hello Bill');
});
