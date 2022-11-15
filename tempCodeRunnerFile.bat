grpc_tools_node_protoc ^
--js_out=import_style=commonjs,binary:server/protos ^
--grpc_out=grpc_js:server/protos ^
--proto_path=./protos/ ./protos/sum.proto