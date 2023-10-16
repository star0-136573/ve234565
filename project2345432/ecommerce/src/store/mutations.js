import products from '../../data'

export const setsearchedProducts=(state, meals)=> {
  state.searchedProducts = meals || []
}

export const setItems=(state,item) =>{
  state.items = item[1] || 0
  let product = products.filter(d => d.productId === item[0])[0]
  let dup = false
  let proId=product.productId
  state.basket.forEach(e => {

    console.log(e)
     if(e.productId == proId){
     e.quantity= e.quantity+1
      dup = true
      
     }
  });
  
  if(!dup){
    product['quantity'] = 1
    state.basket.push(product) || []

  }

  state.payment=[]
  state.basket.forEach(e=>{

    let arr = {price:e.priceId, quantity:e.quantity}
    state.payment.push(arr)
  }
  )
  
  }
export const deleteItems=(state,id) =>{
  // delete state.basket[productId==id] 
  
}