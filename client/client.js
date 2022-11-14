var grpc = require('@grpc/grpc-js')
var greets = require('../server/protos/greet_pb')
var service = require('../server/protos/greet_grpc_pb')

function main(){
    console.log("Hello from Client")
    var client = new service.GreetServiceClient(
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


main()