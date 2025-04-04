import { Router } from "express";
import { ExpressValidator, query, validationResult, checkSchema, matchedData } from "express-validator";
import { mockUsers } from "../utils/constants.mjs";
import { createUserValidationSchema } from "../utils/vallidationSchemas.mjs";



const router = Router();



router.get("/api/users",  query('filter').isString().notEmpty().withMessage('Must not be empty').isLength({min: 3, max:10}).withMessage('Must be at least 5-10 char'), (request,response)=>{
    console.log(request.session.id);
    request.sessionStore.get(request.session.id, (err, sessionData)=>{
        if(err){
            console.log(err);
            throw err;
        }
        console.log(sessionData);
    });
    const result = validationResult(request);
    console.log(result);
    //not manually - we need to add above function for showing of error or invalidation
    console.log(request.query);
    const {
        query: {filter, value},
    } = request;
    if (filter && value)
        return response.send(
    mockUsers.filter((user)=> user[filter].includes(value))
);
return response.send(mockUsers);
})

router.post('/api/users', checkSchema(createUserValidationSchema),
 (request,response)=>{
    const result = validationResult(request);
    console.log(result)

    if (!result.isEmpty())
        return response.status(400).send({errors: result.array()})

    const data = matchedData(request);

    //adding to mockuser 
    const newUSer = {id: mockUsers[mockUsers.length-1]. id + 1, ...data};
    mockUsers.push(newUSer);

    return response.status(201).send(newUSer); 
})

router.put('/api/users/:id', (request,response)=> {
    //add resolveIndexByUserId as a middleware
    //add findUserID here
  const{body, findUserIndex} = request;
  //fix parsedID
  mockUsers[findUserIndex]= {id: mockUsers[findUserIndex].id, ...body};
  return response.sendStatus(200);



})

//patch request
router.patch("/api/users/:id", (request,response)=>{
    //the below is same as put request for checking of id, parsedId:
    const{
        body,
        params: {id},
      } = request;
      const parsedID = parseInt(id);
      if (isNaN(parsedID)) return response.sendStatus(400);
      const findUserIndex = mockUsers.findIndex(
        (user) => user.id ===parsedID
      );
      //find user -1 -> not able to find user by that id:
      if(findUserIndex === -1) return response.sendStatus(404);

      //this only is the change in patch request , the whole body is not overwritten, not overwritting every single field 
      //taking the existing user trying to update (...mockUsers[findUserIndex]) key wvalue pairs -> putting it into the object / then the request body, all the key value pairs update the existing body to overwrite the current body
      mockUsers[findUserIndex] = {...mockUsers[findUserIndex], ...body};
      return response.sendStatus(200);


})




//delete request

router.delete('/api/users/:id', (request,response)=>{
    //donot need to pass the request body
    const{
        params : {id},
    } = request;

    const parsedID = parseInt(id);
    if (isNaN(parsedID)) return response.sendStatus(400);
    const findUserIndex = mockUsers.findIndex(
        (user) => user.id === parsedID
    );
    
    if(findUserIndex === -1 ) return response.sendStatus(404);

    mockUsers.splice(findUserIndex, 2);
    return response.sendStatus(200);


    

})


export default router;