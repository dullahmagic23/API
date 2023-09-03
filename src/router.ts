import {Router} from "express";
import {body,validationResult} from "express-validator";
import { handleInputErrors } from "./modules/middlewares";
import { createProduct, getOneProduct, getProducts } from "./handlers/product";
import { createUpdate, getAllUpdates } from "./handlers/update";

const router = Router();
//products routes
router.get('/product',getProducts)

router.get('/product/:id')

router.put('/product/:id',body('name').isString(),handleInputErrors,(req,res)=>{
 
})

router.post('/product',createProduct)

router.delete('/product/:id', (req,res)=>{

})


//updates routes

router.get('/update/:productId',getAllUpdates)

router.get('/update/:id',(req, res)=>{

})

router.put('/update/:id',
body('title').optional,
(body('status').optional,
body('body').optional,
body('version').optional,(req,res)=>{

}))

router.post('/update/:productId',createUpdate)

router.delete('/update/:id', (req,res)=>{

})

//update point
router.get('/update-point',(req,res)=>{

})

router.get('/update-point/:id',(req, res)=>{

})

router.put('/update-point/:id',(req,res)=>{

})

router.post('/update-point',(req, res)=>{

})

router.delete('/update-point/:id', (req,res)=>{

})

export default router;
