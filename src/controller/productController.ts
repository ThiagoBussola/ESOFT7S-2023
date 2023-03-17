import { Request, Response } from 'express'
import productService from '../service/productService'

class productController{
    async create(req: Request, res: Response){
        productService.createProductList(req.body)

        return res.status(201).send()
    }

    async read(req: Request, res: Response){
        const file = await productService.fazendoMap()
        return res.json(file)
    }
}


export default new productController()