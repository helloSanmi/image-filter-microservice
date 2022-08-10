# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [Your assignment]

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the `./src/server.ts`  file.

```typescript
import {filterImageFromURL, deleteLocalFiles} from './util/util';
```

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

## IMPLEMENT A RESTFUL ENDPOINT

```
GET /filteredimage?image_url={{URL}}
```

An endpoint that filters an image from a public url.

### FEATURES

1. validates the image_url query
2. calls filterImageFromURL(image_url) to filter the image
3. sends the resulting file in the response
4. deletes any files on the server on finish of the response

- Click [this link](http://image-filter-dev-dev22.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://ichef.bbci.co.uk/news/976/cpsprodpb/B8AF/production/_126197274_52152c4cb10f8f56184cab5bf7449fa927a270e7.jpg) to test the API.

- Or, append your own public image url to this link to filter that image
  ```html
  http://image-filter-dev-dev22.us-east-1.elasticbeanstalk.com/filteredimage?image_url=

  ```

> Files are deleted manually by making a PUT call to /delete-files end-point. This is so you can view the collection of filtered images before then removing them. Import the following file in Postman.

```terminal
cloud-dev-project-2-udagram-image-filter.postman_collection.json
```
---

### DEPLOYMENT

- AWS Elastic Beanstalk CLI commands.

npm run build

eb init

eb create
```

> For deploying updates, used ...

```terminal
npm run build

eb deploy
```

- AWS Elastic Beanstalk deployed application dashboard.
  (.\deployment_screenshots\ElasticBeanstalk-image-filter.png)