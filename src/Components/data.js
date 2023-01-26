export const detailquery = (id) => { 
    const query= `/posts/${id}{
        id ,
        product_name, 
        Product_price,
        product_discount
    } `
    return query
 } 

