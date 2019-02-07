const chai = require('chai');
const expect= chai.expect;
const server = require('../app');
const chaiHttp = require('chai-http');
const request= require('request');

chai.use(chaiHttp);

describe('Return product of given two integers',function(){
    it('Returns product of 10 and 12', function(done) {
       let params = "?num1=12&num2=10"
       chai.request(server)
         .get('/returnProduct'+params)
         .end((err, res) => {
            console.log(res.body);
            expect(res.body.result).to.be.equals(120)
         })
       done();
    });

    it('Return product of type float', function(done) {
        let params = "?num1=12.5&num2=10.5"
        chai.request(server)
         .get('/returnProduct'+params)
         .end((err, res) => {
            console.log(res.body);
            expect(res.body.result).to.be.equals(131.25)
         })
        done();      
     });

     it('Wrong key parameter-1', function(done) {
        let params = "?value1=12&num2=10";
        chai.request(server)
         .get('/returnProduct'+params)
         .end((err, res) => {
            console.log(res.body);
            expect(res.body.errMes).to.be.equals("PLEASE Use num1 and num2 as Arguments")
         })
        done();     
     });

     it('wrong key for parameter-2', function(done) {
        let params = "?num1=12&value2=10"
        chai.request(server)
         .get('/returnProduct'+params)
         .end((err, res) => {
            console.log(res.body);
            expect(res.body.errMes).to.be.equals("PLEASE Use num1 and num2 as Arguments")
         })
        done();
     }); 

     it('wrong key for parameter-1 and parameter-2', function(done) {
        let params = "?value1=12&value2=10"
        chai.request(server)
         .get('/returnProduct'+params)
         .end((err, res) => {
            console.log(res.body);
            expect(res.body.errMes).to.be.equals("PLEASE Use num1 and num2 as Arguments")
         })
        done();          
     });

     it('A non-int value passed as parameter-1', function(done) {
        let params = "?num1=12&num2=world"
        chai.request(server)
         .get('/returnProduct'+params)
         .end((err, res) => {
            console.log(res.body);
            expect(res.body.errMes).to.be.equals("PLEASE Use num1 and num2 as Integer")
         })
        done();           
     });

     it('A non-int value passed as parameter-1 and parameter-2', function(done) {
        let params = "?num1=Hello&num2=world"
        chai.request(server)
         .get('/returnProduct'+params)
         .end((err, res) => {
            console.log(res.body);
            expect(res.body.errMes).to.be.equals("PLEASE Use num1 and num2 as Integer")
         })
        done();          
     });
});