// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var calculator_pb = require('./calculator_pb.js');

function serialize_calculator_InputNumber(arg) {
  if (!(arg instanceof calculator_pb.InputNumber)) {
    throw new Error('Expected argument of type calculator.InputNumber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_InputNumber(buffer_arg) {
  return calculator_pb.InputNumber.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_PrimeNumberDecompositionRequest(arg) {
  if (!(arg instanceof calculator_pb.PrimeNumberDecompositionRequest)) {
    throw new Error('Expected argument of type calculator.PrimeNumberDecompositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_PrimeNumberDecompositionRequest(buffer_arg) {
  return calculator_pb.PrimeNumberDecompositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_PrimeNumberDecompositionResponse(arg) {
  if (!(arg instanceof calculator_pb.PrimeNumberDecompositionResponse)) {
    throw new Error('Expected argument of type calculator.PrimeNumberDecompositionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_PrimeNumberDecompositionResponse(buffer_arg) {
  return calculator_pb.PrimeNumberDecompositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_ResultNumber(arg) {
  if (!(arg instanceof calculator_pb.ResultNumber)) {
    throw new Error('Expected argument of type calculator.ResultNumber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_ResultNumber(buffer_arg) {
  return calculator_pb.ResultNumber.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  // Sum API
sum: {
    path: '/calculator.CalculatorService/Sum',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.InputNumber,
    responseType: calculator_pb.ResultNumber,
    requestSerialize: serialize_calculator_InputNumber,
    requestDeserialize: deserialize_calculator_InputNumber,
    responseSerialize: serialize_calculator_ResultNumber,
    responseDeserialize: deserialize_calculator_ResultNumber,
  },
  primeNumberDecomposition: {
    path: '/calculator.CalculatorService/PrimeNumberDecomposition',
    requestStream: false,
    responseStream: true,
    requestType: calculator_pb.PrimeNumberDecompositionRequest,
    responseType: calculator_pb.PrimeNumberDecompositionResponse,
    requestSerialize: serialize_calculator_PrimeNumberDecompositionRequest,
    requestDeserialize: deserialize_calculator_PrimeNumberDecompositionRequest,
    responseSerialize: serialize_calculator_PrimeNumberDecompositionResponse,
    responseDeserialize: deserialize_calculator_PrimeNumberDecompositionResponse,
  },
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
