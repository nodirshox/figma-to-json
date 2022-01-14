# figma-to-json

# Architecture

Server is runs with 'Express' package. I used ['3 Layered Architecture'](https://www.ecanarys.com/Blogs/ArticleID/76/3-Layered-Architecture) type for folders structure.

- Presentation layer (should takes only request and response, no business logic here)
- Business Logic Layer (store all logics here, no intraction with database)
- Data Access Layer (all database queryies here)

# Folders description

 - src/config - storing default env variables
 
 - src/data-access - intraction with writing file and upload to S3
 
 - src/loaders - consisted of logger function and S3 client
 
 - src/models - validation of client request model using Joi
 
 - src/routers - HTTP Routers
 
 - src/services - business logic
 
 - src/utils - reusable functions

# Endpoint

 - Takes Figma URL file and token and returns JSON file

 - URL - http://localhost:3000/api/v1/figma
 
 - Method - POST
 
 - Body: {
 
   "token": "string",
 
   "url": "string"
 
 }
 
 - Response: { "url": "http://s3.aws.com/file.json" }

# Static files

 - All files file saves to 'tempFiles' folder, after uploading it will be deleted locally.

# Notes

 - I used ['Minio'](https://min.io/) package as S3 object. It is exactly same as AWS S3. Currently, I don't have AWS account, so I used Minio locally.

# Future improvements

1. Read buffer from Figma API, upload to S3 with buffer method
2. Check bucket is exits, if not create bucket
3. Add Swagger using 'swagger-ui-express'
