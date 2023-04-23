const {request}=require ('http');
const { describe } = require('mocha');
const chakram=require('chakram'),
expect = chakram.expect;
describe("New Test Cases", function(){
    it("NTC0001 /petInfo/entry",function(){
            
      const petInfo ={
            "id": 1,
            "category" :{
              "id": 1,
              "name": "jack"
            },
            "name": "doggie",
            "photoUrls": [
              "https://commons.wikimedia.org/wiki/File:Cute_dog.jpg"
            ],
            "tags": [
              {
                "id":3 ,
                "name": "jack"
              }
            ],
            "status": "available"
          };

          const response = chakram.post("https://petstore.swagger.io/v2/pet",petInfo);
          //console.log(response);
          return response.then(function (res){
          expect(res).to.have.status(200); 
          //expect(res).to.comprise.of.json({ code: 200, type: 'unknown', message:'78799781'}); 
          });

    });

    it("NTC0002 /PetId/1", function(){
      var petID=1;
      
      const response = chakram.get("https://petstore.swagger.io/v2/pet/",petID);
      return response.then(function(res){
        expect(res).to.have.status(405);
      })

    });

});
