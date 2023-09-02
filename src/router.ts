import {Router} from "express";
const router = Router();
//products routes
router.get('/product',(req,res)=>{
   res.json({message:"hello"})
})

router.get('/product/:id',(req, res)=>{

})

router.put('/product/:id',(req,res)=>{

})

router.post('/product',(req, res)=>{

})

router.delete('/product/:id', (req,res)=>{

})


//updates routes

router.get('/update',(req,res)=>{

})

router.get('/update/:id',(req, res)=>{

})

router.put('/update/:id',(req,res)=>{

})

router.post('/update',(req, res)=>{

})

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
