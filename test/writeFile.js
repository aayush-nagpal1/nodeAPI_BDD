const chai = require('chai');
const expect= chai.expect;
const server = require('../app');
const chaiHttp = require('chai-http');
const request= require('request');
const data = require('../savedFile')
chai.use(chaiHttp);

describe('write dat in savedFile.json', function () {
    it('Writes data from request body into file ', function (done) {
        let params = {"name":"Aayush"}
        chai.request(server)
         .post('/writefile')
         .send(params)
         .end((err, res) => {
            expect(res.status).to.be.equals(200);
         })
        done();
    });
});

