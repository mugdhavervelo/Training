import { Router } from "express";


const router = Router();

router.get('/api/products', (request,response)=>{
    console.log(response.cookie);
    if (request.cookies.hello && request.cookies.hello ==="world")
        return response.send([
        {id: 123, name: "chicken", price: 1299}

    ]);
    return response.send({msg: "you need coorect cookie"});
});

export default router;