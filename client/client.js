var grpc = require('@grpc/grpc-js')
var greets = require('../server/protos/greet_pb')
var greetService = require('../server/protos/greet_grpc_pb')
var calcService = require('../server/protos/calculator_grpc_pb')
var calc = require('../server/protos/calculator_pb')

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

function callGreetManyTimes(){
    var client = new greetService.GreetServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )

    //create request

    var request = new greets.GreetManyTimesRequest()
    var greeting = new greets.Greeting()
    greeting.setFirstName('Pham')
    greeting.setLastName('Dat')

    request.setGreeting(greeting)

    var call = client.greetManyTimes(request, () =>{})
    call.on('data', (response) => {
        console.log('Client Streaming Response: ', response.getResult())
    })
    call.on('status', (status) =>{
        console.log(status.details)
    })

    call.on('error', (error) =>{
        console.error(error.details)
    })

    call.on('end', () =>{
        console.log("Streaming end")
    })
}
function sum(){
    var client = new calcService.CalculatorServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )
    //console.log("client: ", client)
    //creating protocol buffer greeting message 
    var request = new calc.InputNumber()
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

function callPrimeNumberDecomposition(){
    var client = new calcService.CalculatorServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )
    var request = new calc.PrimeNumberDecompositionRequest()
    request.setNumber(120)
    var call = client.primeNumberDecomposition(request, () =>{})
    call.on('data', (response) => {
        console.log('Client Streaming Response: ', response.getPrimeFactor())
    })
    call.on('status', (status) =>{
        console.log(status.details)
    })

    call.on('error', (error) =>{
        console.error(error.details)
    })

    call.on('end', () =>{
        console.log("Streaming end")
    })

}


function main(){
    console.log("Hello from Client")
    // greet()
    //sum()
    //callGreetManyTimes()
    callPrimeNumberDecomposition()
}


main()