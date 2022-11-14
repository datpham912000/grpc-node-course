var grpc = require('@grpc/grpc-js')
var greets = require('../server/protos/greet_pb')
var service = require('../server/protos/greet_grpc_pb')

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
  



function main(){
    var server = new grpc.Server()
    server.addService(service.GreetServiceService, {greet : sayGreet})
    server.bindAsync("127.0.0.1:50051", grpc.ServerCredentials.createInsecure(), () => server.start())
    

    console.log('Server running on port 127.0.0.1:50051')

}

main()