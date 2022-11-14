// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sum_pb = require('./sum_pb.js');

function serialize_sum_InputNumber(arg) {
  if (!(arg instanceof sum_pb.InputNumber)) {
    throw new Error('Expected argument of type sum.InputNumber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sum_InputNumber(buffer_arg) {
  return sum_pb.InputNumber.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sum_ResultNumber(arg) {
  if (!(arg instanceof sum_pb.ResultNumber)) {
    throw new Error('Expected argument of type sum.ResultNumber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sum_ResultNumber(buffer_arg) {
  return sum_pb.ResultNumber.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  // Sum API
sum: {
    path: '/sum.CalculatorService/Sum',
    requestStream: false,
    responseStream: false,
    requestType: sum_pb.InputNumber,
    responseType: sum_pb.ResultNumber,
    requestSerialize: serialize_sum_InputNumber,
    requestDeserialize: deserialize_sum_InputNumber,
    responseSerialize: serialize_sum_ResultNumber,
    responseDeserialize: deserialize_sum_ResultNumber,
  },
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
