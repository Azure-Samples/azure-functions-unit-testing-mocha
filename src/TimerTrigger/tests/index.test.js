let chai = require('chai');
const timerFunction = require('../index');
const context = require('../testing/defaultContext');
const timer = require('../testing/defaultTimer');
let expect = chai.expect;
it('Timer trigger should log message',  () => {
    timerFunction(context, timer);
    expect(context.log.callCount).to.equal(1);
});