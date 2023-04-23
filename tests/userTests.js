const { request } = require('http');

const chakram = require('chakram'),
 expect = chakram.expect;

describe("Test Cases", function() {

        it("TC0001 /v2/user", function () {

          var userName = "testqauser21";

          const response = chakram.get("https://petstore.swagger.io/v2/user/" + userName);

          return response.then(function (res){
            expect(res).to.have.status(200); 
          });
        });

    it("TC0002 /v2/user (user Create)", function () {

          const userInfo = {
          "id": 78799781,
          "username": "testqauser21",
          "firstName": "test",
          "lastName": "qa",
          "email": "testqa@udemig.com",
          "password": "test123",
          "phone": "45454554554",
          "userStatus": 1
        };

          const response = chakram.post("https://petstore.swagger.io/v2/user",userInfo);

          return response.then(function (res){
            expect(res).to.have.status(200); 
            expect(res).to.comprise.of.json({ code: 200, type: 'unknown', message:'78799781'}); 
          });
      });

  it("TC0003 /v2/user/login", function () {

    const user = {
    "username ": "testqauser21",
    "password": "test123"
  };

    const response = chakram.get("https://petstore.swagger.io/v2/user/login",{qs:user});
    //request url is querry for user ?, so we defined *user* named object and appoint it here as querry string 

    return response.then(function (res){
      expect(res).to.have.status(200); 
      //expect(res).to.comprise.of.json({ code: 200, type: 'unknown', message:'78799781'}); 
    });
});

it("TC0004 /V2/deleteuser", function (){

    const deleteuser = {
      "username": "mod"
    };
  
    const response = chakram.delete("https://petstore.swagger.io/v2/user"+ deleteuser);
    
    return response.then(function (res){
      //console.log(res);
      expect(res).to.have.status(400);
    })
  })
  
  });