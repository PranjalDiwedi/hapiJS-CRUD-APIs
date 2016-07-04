'use strict';

const Hapi = require('hapi');
const fs = require('fs');
const server = new Hapi.Server();
server.connection({ port: 3000 });
server.start((err) =>{
	if(err)
	{
		throw err;
	}
    	console.log('Server running at:', server.info.uri);
	});
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
		// Code to get all project details stored in the file

		/*fs.stat('projectdata.txt', function(err, stat) {
		if(err == null) {
			fs.readFile('projectdata.txt',{encoding: 'utf-8'},function(err,data){
				console.log(data);
				reply(data);
			});
			
		} else if(err.code == 'ENOENT') {
			reply("File does not exist");
		}
		});*/
		reply("List of project details");
        
    }
});

server.route({  
    method: 'GET',
    path: '/project/{name}',
    handler: function (request, reply) {
		//Code to get project details on the  from the file

            /*fs.stat('projectdata.txt', function(err, stat) {
		if(err == null) {
			const projectname = request.params.name;
			fs.readFile('projectdata.txt',{encoding: 'utf-8'},function(err,data){
				var fileData = data.split('\n');
				var dataFound = {};
				fileData.forEach(function(element,index,array){
					i￼f(username == element.project)
					{
						dataFound = element;
					}	
				});					
				reply(dataFound);			
				
			});
			
		} else if(err.code == 'ENOENT') {
			reply("File does not exist");
		}
		
		});*/
		reply("Project details retrieved");
    }
});

server.route({  
    method: 'POST',
    path: '/project',
    handler: function (request, reply) {

        const project = request.payload;
	//Code to write/append data in the text file
	fs.appendFile('projectdata.txt',JSON.stringify(project)+'\n', function (err) {
		console.log(err);
		reply(project);
	});
    }
});

server.route({  
    method: 'PATCH',
    path: '/project/{name}',
    handler: function (request, reply) {
	    	
		// Example code to update field in the text file
		
		/*
		fs.stat('projectdata.txt', function(err, stat) {
		if(err == null) {
			const projectname = request.params.name;
			fs.readFile('projectdata.txt',{encoding: 'utf-8'},function(err,data){
				var fileData = data.split('\n');
				fileData.forEach(function(element,index,array){
					console.log(projectname);
					// replace condition
					if(projectname == array[index].project)
					{
						array[index].project =  array[index].project + 'Changed';
					}	
				});
				var dataToWrite = fileData.toString();
				fs.writeFile('projectdata.txt',dataToWrite,function(err){
					reply("Data changed successfully");
				});			
			});
			
		} else if(err.code == 'ENOENT') {
			reply("File does not exist");
		}
		
		});*/
		reply("Data changed Successfully");
    }
});

server.route({  
    method: 'DELETE',
    path: '/project/{name}',
    handler: function (request, reply) {
		// code to find and delete the project 
            reply('Deleted Successfully');
    }
});
