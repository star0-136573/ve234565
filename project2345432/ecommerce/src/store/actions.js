
import meal from '../../data.js'

export const searchProducts = ({ commit }, keyword)=> {

   commit('setsearchedProducts', meal)
}


export const addItems=({ commit }, item)=> {

      commit('setItems', item)
   

}
export const deleteItems=({ commit }, id)=> {
      
      commit('deleteItems', id)
   
}