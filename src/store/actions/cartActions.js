
export const  ADD_TO_CART = "ADD_TO_CART"       //ismi sabitliyoruz karışmasın diye
export const  REMOVE_FROM_CART = "REMOVE_FROM_CART"   //ismi sabitliyoruz karışmasın diye


export function addToCart(product) {

        return{  
                
            type : ADD_TO_CART , //redux bize bir aksiyon yaptığın zaman bana bir obje gönder diyo ve bu objenin içerisinde bu aksiyonun ismi olsun bende o isimle  hangi state tleri etkilediğini bulayım diyo(yani ben bileyim neyi çalıştıracağımı diyo) 
            payload : product     // tamam sen sepete eklemek istiyosunda ne eklemek istiyosun belirtmek için

        }


}


export function removeFromCart(product) { // bu da sepetten ekleme işlemi

    return{  
            
        type : REMOVE_FROM_CART ,
        payload : product    

    }


}