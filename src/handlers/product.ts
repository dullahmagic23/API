import prisma from "../db"
export const getProducts = async (req, res)=>{

    const products = await prisma.product.findMany({
        where:{
            belongsToId: req.user.id
        }
    })
    res.json({
        data: products
    })
}

export const getOneProduct = async (req,res)=>{
    const id = req.params.id;
    const product = await prisma.product.findFirst({
        where:{
            id,
            belongsTo: req.user.id
        }
    })
    res.json({
        data: product
    })
}

export const createProduct = async (req, res)=>{
    const product = await prisma.product.create({
        data:{
            name: req.body.name,
            belongsToId:req.user.id
        }
    })

    res.json({
        data:product
    })
}

export const updateProduct = async (req,res)=>{
    const updatedProduct = await prisma.product.update({
        where:{
            id:req.params.id
        },
        data:{
            name: req.body.name
        }
    })
    res.json({
        data: updateProduct
    })
}

export const deleteProduct = async (req,res)=>{
    const deleted = prisma.product.delete({
        where:{
            id:req.params.id,
            belongsToId: req.user.id
        }
    })

    res.json({
        data: deleted
    })
}