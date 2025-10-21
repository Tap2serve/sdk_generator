# Ubuntu
# openapi-generator-cli generate -i ecaremd.yaml -g typescript-axios -o out 

# Mac axios typescript SDK
# openapi-generator generate -i ./yaml/ech-core-0.0.8.yaml -g typescript-axios -o ts-sdk/ech-core-0.0.8 
# tar -czvf ech-core-0.0.8.tar.gz ts-sdk/ech-core-0.0.8

# Tanstack React Query SDK
openapi-rq -i ./yaml/core.yaml -o rq-sdk/core 
tar -czvf core.tar.gz rq-sdk/core
