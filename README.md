# ToDoListList of api calls
============
1. http://localhost:5000/api/users/register
   Input : {
    "name":"amar",
    "email":"amarnadh5111@gmail.com",
    "password":"amar1"
   }

   Output : {
    "_id": "60196cb127120fdb2483e202",
    "name": "amar",
    "email": "amarnadh5111@gmail.com"
}

2. http://localhost:5000/api/users/signin
    Input : {
    "email":"amarnadh5111@gmail.com",
    "password":"amar1"
   }
   
   Output : {
    "_id": "60196cb127120fdb2483e202",
    "name": "amar",
    "email": "amarnadh5111@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE5NmNiMTI3MTIwZmRiMjQ4M2UyMDIiLCJuYW1lIjoiYW1hciIsImVtYWlsIjoiYW1hcm5hZGg1MTExQGdtYWlsLmNvbSIsImlhdCI6MTYxMjI3OTE1NywiZXhwIjoxNjEyMzY1NTU3fQ.pC2S8mTqHj7ZPiE00A5EXtkLM6Uj-l9UvWyFhO9oeKs"
}

3. http://localhost:5000/api/todo/create
    Input : {
    "content":"Swim",
    "user":"60196cb127120fdb2483e202"
}

   Output : {
    "message": " content created successfully"
}

4. http://localhost:5000/api/todo/update
    Input : {
    
    "contentId" : "60196df527120fdb2483e203",
    "content":"Football"
}

   Output : {
    "message": " content updated successfully"
}

5. http://localhost:5000/api/todo/ 
   Input : {
    "user":"60196cb127120fdb2483e202"
}

  Output :{
    "result": [
        {
            "CompletedFlag": 0,
            "_id": "60196df527120fdb2483e203",
            "content": "Football",
            "user": "60196cb127120fdb2483e202",
            "__v": 0
        }
    ]
}

6. http://localhost:5000/api/todo/delete
 Input : {
    "contentId":"60196df527120fdb2483e203"
}

 Output: {
    "message": " content deleted successfully"
}
