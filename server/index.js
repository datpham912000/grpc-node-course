var grpc = require('@grpc/grpc-js')
var greets = require('../server/protos/greet_pb')
var greetService = require('../server/protos/greet_grpc_pb')
var sumService = require('../server/protos/sum_grpc_pb')
var sums = require('../server/protos/sum_pb')
/*
    Implements the greet RPC method
*/

function sayGreet(call, callback){
    var greeting = new greets.GreetResponse()
    greeting.setResult(
        "Hello my friend " + call.request.getGreeting().getFirstName() + " " + call.request.getGreeting().getLastName()
    )
    callback(null, greeting)
}

function sum(call, callback){
    var response = new sums.ResultNumber()
    response.setResult(call.request.getFirstNumber() + call.request.getSecondNumber())
    callback(null, response)
}


function main(){
    var server = new grpc.Server()
    server.addService(greetService.GreetServiceService, {greet : sayGreet})
    server.addService(sumService.CalculatorServiceService, {sum : sum})
    server.bindAsync("127.0.0.1:50051", grpc.ServerCredentials.createInsecure(), () => server.start())
    

    console.log('Server running on port 127.0.0.1:50051')

}

main()