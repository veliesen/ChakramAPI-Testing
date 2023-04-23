const { request } = require('http');
const chakram = require ('chakram'),
expect=chakram.expect;

describe('Brand New Test Cases', function(){
    it('BNTC0001 v2/store/order', function(){

        const orderInfo={
            "id": 0,
            "petId": 1,
            "quantity": 12,
            "shipDate": "2023-04-22T07:28:30.035Z",
            "status": "placed",
            "complete": true
          }

          const response = chakram.post('https://petstore.swagger.io/v2/store/order', orderInfo);
          return response.then(function (res){
            expect(res).to.have.status(200); 
           // expect(res).to.comprise.of.json({ code: 200, type: 'unknown', message:'78799781'}); 
          });

    });
    it('BNTC0002 DEL /v2/store/order/ID', function(){

        var orderID=246497834638;

        const response= chakram.delete('https://petstore.swagger.io/v2/store/order/'+ orderID);
        return response.then (function(res){
            expect(res).to.have.status(404)
            expect(res).to.comprise.of.json({code:404, type:'unknown', message:'Order Not Found'})
        });

    })
    it('BNTC0003 GET /v2/store/order/Id', function(){

        var orderNumber=2;

        const response=chakram.get ('https://petstore.swagger.io/v2/store/order/'+ orderNumber);

        return response.then (function(res){
            expect(res).to.have.status(404);


        });




    })
});