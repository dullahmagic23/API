import prisma from "../db";

//get all updates

export const getAllUpdates = async (req,res)=>{
    const updates = await prisma.update.findMany({
        where:{
            productId: req.params.productId
        },
        include:{
            product:true
        }
    })
    res.json({
        data: updates
    })
}

//create an update

export const createUpdate = async (req,res)=>{
    const product = await prisma.product.findUnique({
        where:{
            id: req.params.productId,
        }
    })
    const user = await prisma.user.findUnique({
        where:{
            id: product.belongsToId
        }
    })
    if(user.id === req.user.id){
        const update = await  prisma.update.create({
            data:{
                title: req.body.title,
                body: req.body.body,
                status: req.body.status,
                version: req.body.version,
                productId:req.params.productId,
                updatedAt: new Date()
            }
        })
        res.json({
            data: update
        })
    } else{
        res.json({
            data:{
                status:403,
                message: "Forbiden"
            }
        })
    }

}


//find update by id


//update update by id

//delete update by id