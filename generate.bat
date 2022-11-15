
@REM dummy.proto
@REM grpc_tools_node_protoc --js_out=import_style=commonjs,binary:server --grpc_out=grpc_js:server --proto_path=./protos/ ./protos/dummy.proto

@REM greet.proto
@REM grpc_tools_node_protoc ^
@REM --js_out=import_style=commonjs,binary:server/protos ^
@REM --grpc_out=grpc_js:server/protos ^
@REM --proto_path=./protos/ ./protos/greet.proto


@REM calculator.proto
grpc_tools_node_protoc ^
--js_out=import_style=commonjs,binary:server/protos ^
--grpc_out=grpc_js:server/protos ^
--proto_path=./protos/ ./protos/calculator.proto