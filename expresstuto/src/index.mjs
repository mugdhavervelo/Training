import express, { request, response } from "express";
//import entire express module
import { query, validationResult, body, matchedData, checkSchema, check} from "express-validator";
//middleware function-> calling them by passing them to passing methods
//make sure right before our final request handler - also a middleware
import {createUserValidationSchema} from "./utils/vallidationSchemas.mjs"
import userRouter from "./routes/users.mjs";
import productsRouter from "./routes/products.mjs";
import { mockUsers } from "./utils/constants.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
//session is a middleware function



const app = express();
//call the function to create and use in app

//middleware for post request
app.use(express.json());
//always call session before any routes
app.use(session({
    secret: "Mugdha the dev",
    saveUninitialized: false,
    //used for session save
    resave: false,
    cookie: {
        //user logged in the website for say 1 hr
        maxAge: 60000*60,
    }
}
));
 
app.use(userRouter);
app.use(productsRouter);
app.use(cookieParser);


//middleware:
// const loggingMiddleware = (request, response, next) => {
//     console.log(`${request.method} - ${request.url}`);
//     next();
// };
//console log -> for above ->" GET - / ""





//use loggingMiddleware first - once done "finish logging"
//this should be written first and not in between or after routes
// app.use(loggingMiddleware, (request,response,next) =>{
//     console.log("finished logging");
//     next();
// }
// );

//middlware
// const resolveIndexByUserId =(reqeust,response,next) =>{
//     //copy this from patch function:
//     const{
//         body,
//         params: {id},
//       } = request;
//       const parsedID = parseInt(id);
//       //if id was a string it gives Nan :
//       if (isNaN(parsedID)) return response.sendStatus(400);
//       //searching user in mockuser array based in the id:
//       const findUserIndex = mockUsers.findIndex(
//         (user) => user.id ===parsedID
//       );
    
//       //if false return value is not found user
    
//       if(findUserIndex === -1) return response.sendStatus(404);
//       reqeust.findUserIndex = findUserIndex;
//       next();

// }


//wehn app. -> a lot of functions are available

 
const PORT = process.env.PORT || 3000;
//call port from the env file if not present then port is 3000

//allows you to listen yoou to port of incoming http request 
//port can be 3000 -> can be  app.listen(3000)

//get request
app.get("/", (request,response)=>{
//cookie
    console.log(request.session)
    request.session.visited = true;
    response.cookie('hello', 'world'), {maxAge: 60000}
    response.status(201).send({msg: "Hello"});
});


//middleware to only a specific "/" url:
// app.get("/",loggingMiddleware, (request,response,next)=>{
//     response.status(201).send({msg: "Hello"});
// });

//here it will only give console.log for / function with in console log :
//Base URL



//not necessary to assign it to a variable like -> "loggingMiddleware" as done above
//we can do it as: (FOR MIDDLEWARE)
// app.get("/", (request,response,next)=>{
//     console.log("Base URL 1");
//     next();
// }, 
// (request,response,next)=>{
//     console.log("Base URL 2");
//     next();
// },
// (request,response,next)=>{
//     console.log("Base URL 3");
//     next();
// },
// (request,response,next)=>{
//     response.status(201).send({msg: "Hello"});
// });
//replace loggingmiddleware to -> (request,response,next)=>{}
//the console.log will be -> 
// BASE URL 1
// BASE URL 2
// BASE URL 3



//all end poiint with /api - good practice
// app.get('/api/users', (request, response) => {
//     console.log(request.query); // Query string logging
//     const { filter, value } = request.query;

//     if (!filter || !value) {
//         return response.send(mockUsers);
//     }

//     const filteredUsers = mockUsers.filter((user) =>
//         user[filter]?.toLowerCase().includes(value.toLowerCase())
//     );

//     if (filteredUsers.length === 0) {
//         return response.status(404).send({ msg: "No users found" });
//     }

//     return response.send(filteredUsers);
// });

//http://localhost:3000/api/users?filter=username&&value=eh



// remove the following -> as it is in routes/users.mjs:

// app.get("/api/users", query('filter').isString().notEmpty().withMessage('Must not be empty').isLength({min: 3, max:10}).withMessage('Must be at least 5-10 char'), (request,response)=>{
//     const result = validationResult(request);
//     console.log(result);
//     //not manually - we need to add above function for showing of error or invalidation
//     console.log(request.query);
//     const {
//         query: {filter, value},
//     } = request;
//     if (filter && value)
//         return response.send(
//     mockUsers.filter((user)=> user[filter].includes(value))
// );
// return response.send(mockUsers);
// })




//post request:

// app.post('/api/users', checkSchema(createUserValidationSchema),
//  (request,response)=>{
//     const result = validationResult(request);
//     console.log(result)

//     if (!result.isEmpty())
//         return response.status(400).send({errors: result.array()})

//     const data = matchedData(request);

//     //adding to mockuser 
//     const newUSer = {id: mockUsers[mockUsers.length-1]. id + 1, ...data};
//     mockUsers.push(newUSer);

//     return response.status(201).send(newUSer);
// })

//once requetst sent and put a json file sent -> in console.log it shows underfined
//we use middleware after express app created -> we use middleware
//route parameter
// app.get("/api/users/:id", (request,response)=>{
//     console.log(request.params); //we can have multiple param- id , name, etc
//     const parsedID = parseInt(request.params.id); // id is in sring -> convert to int
//     console.log(parsedID) //it checks if the passed number is int or not -> if not it passes NaN
//     if (isNaN(parsedID)) return response.status(400).send({msg: "bad request"});

//     //if a correct id 
//     const findUser = mockUsers.find((user)=> user.id === parsedID);
//     if(!findUser) return response.sendStatus(404);
//     return response.send(findUser)
// })



// app.get('/api/products', (request,response)=>{
//     response.send([
//         {id: 123, name: "chicken", price: 1299}
//     ])
// })
//resppose in json object


//put request:
// app.put('/api/users/:id', resolveIndexByUserId, (request,response)=> {
//     //add resolveIndexByUserId as a middleware
//     //add findUserID here
//   const{body, findUserIndex} = request;
//   //fix parsedID
//   mockUsers[findUserIndex]= {id: mockUsers[findUserIndex].id, ...body};
//   return response.sendStatus(200);



// })

// //patch request
// app.patch("/api/users/:id", (request,response)=>{
//     //the below is same as put request for checking of id, parsedId:
//     const{
//         body,
//         params: {id},
//       } = request;
//       const parsedID = parseInt(id);
//       if (isNaN(parsedID)) return response.sendStatus(400);
//       const findUserIndex = mockUsers.findIndex(
//         (user) => user.id ===parsedID
//       );
//       //find user -1 -> not able to find user by that id:
//       if(findUserIndex === -1) return response.sendStatus(404);

//       //this only is the change in patch request , the whole body is not overwritten, not overwritting every single field 
//       //taking the existing user trying to update (...mockUsers[findUserIndex]) key wvalue pairs -> putting it into the object / then the request body, all the key value pairs update the existing body to overwrite the current body
//       mockUsers[findUserIndex] = {...mockUsers[findUserIndex], ...body};
//       return response.sendStatus(200);


// })




// //delete request

// app.delete('/api/users/:id', (request,response)=>{
//     //donot need to pass the request body
//     const{
//         params : {id},
//     } = request;

//     const parsedID = parseInt(id);
//     if (isNaN(parsedID)) return response.sendStatus(400);
//     const findUserIndex = mockUsers.findIndex(
//         (user) => user.id === parsedID
//     );
    
//     if(findUserIndex === -1 ) return response.sendStatus(404);

//     mockUsers.splice(findUserIndex, 2);
//     return response.sendStatus(200);


    

// })



app.listen(PORT, () => {
    console.log("Running on PORT "+ PORT);
}) //pass callback function 

