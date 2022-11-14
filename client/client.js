var grpc = require('@grpc/grpc-js')
var greets = require('../server/protos/greet_pb')
var greetService = require('../server/protos/greet_grpc_pb')
var sumService = require('../server/protos/sum_grpc_pb')
var sums = require('../server/protos/sum_pb')

function greet(){
    var client = new greetService.GreetServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )
    //console.log("client: ", client)
    //creating protocol buffer greeting message 
    var request = new greets.GreetRequest()
    var greeting = new greets.Greeting()
    greeting.setFirstName("Pham")
    greeting.setLastName("Dat")

    //set the Greeting
    request.setGreeting(greeting)

    client.greet(request, (error, response) =>{
        if(!error){
            console.log("Greet message: ", response.getResult())
        }
        else{
            console.log(error)
        }
    })
}

function sum(){
    var client = new sumService.CalculatorServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )
    //console.log("client: ", client)
    //creating protocol buffer greeting message 
    var request = new sums.InputNumber()
    request.setFirstNumber(5)
    request.setSecondNumber(8)


    client.sum(request, (error, response) =>{
        if(!error){
            console.log("Sum: ", response.getResult())
        }
        else{
            console.log(error)
        }
    })
}


function main(){
    console.log("Hello from Client")
    greet()
    sum()

   
}


main()