import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  app.get("/filteredimage", async (req, res) => {
    //1. validate the image_url query
    let image_url = req.query.image_url.toString();

    if (image_url) {
        //2. call filterImageFromURL(image_url) to filter the image
        const filteredImage = await filterImageFromURL(image_url)

        //3. send the resulting file in the response
        res.sendFile(filteredImage, async (error) => {
            if(!error){
                   //4. deletes any files on the server on finish of the response
                   await deleteLocalFiles([filteredImage])
            }else {
                //indicate it's an internal error of the server
                res.statusCode = 500
                res.send(error)
            }
        })

    } else {
        //indicate it's a bad request (the server cannot or will not process
        // the request due to something that is perceived to be a client error)
        res.statusCode = 400
        res.send("Image URL is not Valid")
    }
});
//! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();

