# One Time Process

<!-- if install any other version -->

npm uninstall -g @7nohe/openapi-react-query-codegen

<!-- Install this -->

npm install -g @7nohe/openapi-react-query-codegen@1.4.1

# Steps to create new SDK

Go to cd open api jason folder
1)combined_openapi delete this file
2)npx openapi-merge-cli
3)going to browser
swagger editor
import combined open api jason
enter in yaml last file & paste all data in file
Go to 11 number yaml file copy all content above paths variable and then go to 16 number yml file & replace copy content above paths variable in 16 file

Go to 11 number file copy responses by pressing ctr+h & replace with copy content from responses to up security

Go to 16 number file & replace all changes over there
Copy securitySchemes object in 11 number file & add that object at end of 16 number file

response copy and replace the before content  
cd..
sdk folder hit below command
-nvm use 18

- npm install -g @7nohe/openapi-react-query-codegen
- openapi-rq -i ./yaml/core.yaml -o rq-sdk/core-v.0.1

rq-sdk/ech-core-0.0.9=> add new file number in rq sdk folder

-rq sdk generate folder queries & request copy that folders & paste in cipher folder openAPI

Add below code in request.ts line 115
await sessionStorage.getItem("accessToken"),
