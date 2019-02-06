const chai = require('chai');
//const chaiHttp = require('chai-http');
const should = chai.should();
const axios = require('axios') 
const asset = chai.assert;
const expect= chai.expect;
const request= require('request');

describe('Return Product of integers',function(){
    it('should return first non repeated alphabet', function(done) {
       let params = "?string=aaaabccccc"
       request.get('http://localhost:3001/repeatedLetter'+params,function(err,req,res){
        let result =JSON.parse(res)
        console.log(result.result);
        expect(result.result).to.equal("b");
       })
       done();
       
    });

    it('should return first non repeated alphabet', function(done) {
        let params = "?string=aaaabbbbccccc"
        request.get('http://localhost:3001/repeatedLetter'+params,function(err,req,res){
         let result =JSON.parse(res)
         console.log(result.result);
         expect(result.result).to.equal(null);
        })
        done();
        
     });
     it('should return first non repeated alphabet', function(done) {
        let params = "?string=aaaabbbbcccccd"
        request.get('http://localhost:3001/repeatedLetter'+params,function(err,req,res){
         let result =JSON.parse(res)
         console.log(result.result);
         expect(result.result).to.equal("d");
        })
        done();
        
     });
     it('should return first non repeated alphabet', function(done) {
        let params = "?string=abc"
        request.get('http://localhost:3001/repeatedLetter'+params,function(err,req,res){
         let result =JSON.parse(res)
         console.log(result.result);
         expect(result.result).to.equal("a");
        })
        done();
        
     });
});