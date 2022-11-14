
@REM dummy.proto
@REM grpc_tools_node_protoc --js_out=import_style=commonjs,binary:server --grpc_out=grpc_js:server --proto_path=./protos/ ./protos/dummy.proto

@REM greet.proto
grpc_tools_node_protoc ^
--js_out=import_style=commonjs,binary:server ^
--grpc_out=grpc_js:server ^
--proto_path=./protos/ ./protos/greet.proto