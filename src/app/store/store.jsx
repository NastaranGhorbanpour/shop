import { create } from 'zustand'

const useStore = create((set , get) => ({
    cart: [],


    calculate : () =>  {
        let totalPrice = 0
        get().cart.forEach((val)=>{
            let total = parseFloat(val.price.replace('$' , '')) * val.count
            totalPrice += total
        })
        return totalPrice
    },

    stock: (id) =>{
        let search = get().cart.findIndex((val) => val.id === id)
        if(search >= 0){
            return true
        }else{
            return false
        }
    },

    addProduct: (product) => set((state) => {
        let myProduct = JSON.parse(product)
        
        let condition = state.cart.findIndex((val) => val.id === myProduct.id)
        if (condition >= 0) {
            return { cart: [...state.cart] };
        } else {
            return { cart: [...state.cart, myProduct] };
        }
    }),



    Plus: (id) => set((state) => {
    let cloneState = [...state.cart]
    let sample = cloneState.find((val) => val.id === id)
    sample.count = sample.count + 1
    return { cart: [...cloneState] };
  }),

  Minus: (id) => set((state) => {
    let cloneState = [...state.cart]
    let sample = cloneState.find((val) => val.id === id)
    if (sample.count > 1) {
      sample.count = sample.count - 1
    }
    return { cart: [...cloneState] };
  }),

  remove: (id) => set((state) => {

      let cloneState = [...state.cart]
      let sample = cloneState.filter((val) => val.id !== id)
      return { cart: [...sample] };
    
  }),

  empty: () => set(() => ({ cart: [] }))

}))
export default useStore