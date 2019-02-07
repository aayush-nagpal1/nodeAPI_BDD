const chai = require('chai');
const expect= chai.expect;
const server = require('../app');
const chaiHttp = require('chai-http');
const request= require('request');
const data = require('../savedFile')
chai.use(chaiHttp);

describe('Return the data read from savedFile.json', function () {
    it('Reads a file', function (done) {
        let params = "?num1=12&num2=10"
        chai.request(server)
         .get('/readFile'+params)
         .end((err, res) => {
            expect(typeof res.body.result).to.be.equals("object");
         })
        done();
    });
});

