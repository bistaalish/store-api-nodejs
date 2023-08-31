const Product = require('../models/product');

const getAllProductsStatic = async (req,res) => {
   const products = await Product.find({featured:true})
   res.status(200).json(products) 
}

const getAllProducts = async (req,res) => {
    const {featured,name,sort,company,fields} = req.query
    const queryObject = {}

    if(featured){
        queryObject.featured = featured === 'true' ? true :false
    }
    if(name){
        queryObject.name = {$regex: name, $options: 'i'}
    }
    if(company) {
        queryObject.company = {$regex: company, $options: 'i'}
    }
    let result = Product.find(queryObject)
    // sort
    if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    else {
        result = result.sort('createdAt')
    }
    if(fields){
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }
    
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page-1) * limit;
    result = result.skip(skip).limit(limit)
    
    const products = await result
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}