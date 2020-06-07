import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { Request, Response } from 'express';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  //filter image endpoint
  //This endpoint takes in a query parameter of the form "filterredimage?image_url = url" and produces the filtered image file as
  //response with the help of filterImageUrl and deleteLocalFiles functions.

  app.get("/filteredimage", async (req : Request, res:Response) =>{
    const {image_url} = req.query
    if(!image_url){
      res.status(400).send("image url is required")
    }
    try {
      const filtered_path = await filterImageFromURL(image_url)
      await res.status(200).sendFile(filtered_path, {}, function (error) {
        if (error) {
         return res.status(422).send("unable to process the image.")
        }
        deleteLocalFiles([filtered_path])
      })
    }
    catch (error) {
      res.status(422).send("unable to process the image. Please verify the url")
    }
  })

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