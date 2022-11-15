var grpc = require('@grpc/grpc-js')
var greets = require('../server/protos/greet_pb')
var greetService = require('../server/protos/greet_grpc_pb')
var calcService = require('../server/protos/calculator_grpc_pb')
var calc = require('../server/protos/calculator_pb')
/*
    Implements the greet RPC method
*/

function greet(call, callback){
    var greeting = new greets.GreetResponse()
    greeting.setResult(
        "Hello my friend " + call.request.getGreeting().getFirstName() + " " + call.request.getGreeting().getLastName()
    )
    callback(null, greeting)
}

function sum(call, callback){
    var response = new calc.ResultNumber()
    response.setResult(call.request.getFirstNumber() + call.request.getSecondNumber())
    callback(null, response)
}

function greetManyTimes(call, callback){
    var name = call.request.getGreeting().getFirstName() + ' ' + call.request.getGreeting().getLastName()
    
    let count = 0, intervalID = setInterval(function(){
        var greetManyTimesResponse = new greets.GreetManyTimesResponse()
        greetManyTimesResponse.setResult(name)

        //setup streaming

        call.write(greetManyTimesResponse)
        if(++count > 9){
            clearInterval(intervalID)
            call.end()
        }

    }, 1000)
}

function primeNumberDecomposition(call, callback){
    var N = call.request.getNumber()
    // let count = 0, intervalID = setInterval(function(){
    //     var greetManyTimesResponse = new greets.GreetManyTimesResponse()
    //     greetManyTimesResponse.setResult(name)

    //     //setup streaming

    //     call.write(greetManyTimesResponse)
    //     if(++count > 9){
    //         clearInterval(intervalID)
    //         call.end()
    //     }

    // // }, 1000)
    var primeNumberDecompositionResponse = new calc.PrimeNumberDecompositionResponse()
    let k = 2
    while (N > 1) {
        if (N % k == 0){
            primeNumberDecompositionResponse.setPrimeFactor(k)
            call.write(primeNumberDecompositionResponse)
            N = N / k
        }
        else{
            k = k + 1
        }
      }
      
    call.end()
}


function main(){
    var server = new grpc.Server()
    //them cac service voi cac ham duoc implement tuong ung
    server.addService(greetService.GreetServiceService, {greet : greet, greetManyTimes: greetManyTimes})
    server.addService(calcService.CalculatorServiceService, {sum : sum, primeNumberDecomposition: primeNumberDecomposition})

    //Khoi tao va chay sever
    server.bindAsync("127.0.0.1:50051", grpc.ServerCredentials.createInsecure(), () => server.start())
    

    console.log('Server running on port 127.0.0.1:50051')
}

main()