# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.



ElasticBeanStalk Url: http://udagram-project-dev-dev.us-east-2.elasticbeanstalk.com


Installation steps:

1. npm install in /course-02/project/image-filter-starter-code

2. To run the project on local host, execute the command "npm run dev" on cmd and perform the request using the below demo instructions.

3. To deploy it on your elasticbean stalk, first execute the command "npm run build" and perform "eb init". Include this line "deploy: ./www/archive.zip" in your .elasticbeanstalk/config.yaml

4. Then perform eb create and eb deploy. Then, log on to your beanstalk to check the health. If it is "ok", you can test the service.







Filter image url request demo:

1. Image 1 url: https://inpst.net/wp-content/uploads/remote-image-cache/timedotcom.files.wordpress.com/abbvie-headquarters-17af7ad893dd5aa93b8c6bbe4080cb4b468f1987.jpeg

2. Image 2 url: https://inpst.net/wp-content/uploads/remote-image-cache/timedotcom.files.wordpress.com/football-helmet-6861b50dba178d2330b746250ac70fb39a459e97.jpg


	To obtain filtered images with elastic bean stalk, please do the below:
		For image 1, http://udagram-project-dev-dev.us-east-2.elasticbeanstalk.com/filteredimage?image_url=https://inpst.net/wp-content/uploads/remote-image-cache/timedotcom.files.wordpress.com/abbvie-headquarters-17af7ad893dd5aa93b8c6bbe4080cb4b468f1987.jpeg
		For image 2, http://udagram-project-dev-dev.us-east-2.elasticbeanstalk.com/filteredimage?image_url=https://inpst.net/wp-content/uploads/remote-image-cache/timedotcom.files.wordpress.com/football-helmet-6861b50dba178d2330b746250ac70fb39a459e97.jpg
    
	To obtain filtered images with localhost, please do the below:
		
		For image 1, http://localhost:{PORT}/filteredimage?image_url=https://inpst.net/wp-content/uploads/remote-image-cache/timedotcom.files.wordpress.com/abbvie-headquarters-17af7ad893dd5aa93b8c6bbe4080cb4b468f1987.jpeg
		
		For image 2, http://localhost:{PORT}/filteredimage?image_url=https://inpst.net/wp-content/uploads/remote-image-cache/timedotcom.files.wordpress.com/football-helmet-6861b50dba178d2330b746250ac70fb39a459e97.jpg
		
		