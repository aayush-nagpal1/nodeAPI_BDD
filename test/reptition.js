const chai = require('chai');
const expect = chai.expect;
const server = require('../app');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


//Test cases for API that send first repetitve alphabet

describe('Return first non repetitive alphabet of the string', function () {
   it('input --aaaabccccc------- should return- b', function (done) {
      let params = "?string=aaaabccccc"
      chai.request(server)
         .get('/repeatedLetter' + params)
         .end((err, res) => {
            console.log(res.body);
            expect(res.body.res).to.be.equals("b")
         })
      done();
   });

    it('input --aaaabbbbccccc------- should return- null', function(done) {
        let params = "?string=aaaabbbbccccc"
        chai.request(server)
         .get('/repeatedLetter' + params)
         .end((err, res) => {
            console.log(res.body);
            expect(res.body.res).to.be.equals(null);
         })
        done();

     });
     it('input --aaaabbbbcccccd------- should return- d', function(done) {
        let params = "?string=aaaabbbbcccccd"
        chai.request(server)
         .get('/repeatedLetter' + params)
         .end((err, res) => {
            console.log(res.body);
            expect(res.body.res).to.be.equals("d")
         })
        done();
  });

     it('input --abc------- should return- a', function(done) {
        let params = "?string=abc"
        chai.request(server)
         .get('/repeatedLetter' + params)
         .end((err, res) => {
            console.log(res.body);
            expect(res.body.res).to.be.equals("a")
         })
        done();
     });
});