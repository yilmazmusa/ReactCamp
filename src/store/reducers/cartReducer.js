import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {

    cartItems: cartItems     //soldaki bizim verdiğimiz isim sağdaki ise biyerde tanımlı olan ismi
}

//payload eklemek ya da silmek istediğimiz üründür.
export default function cartReducer(state = initialState, { type, payload }) {

    switch (type) {          //gelecek type göre hareket ettiğimiz nokta yani hangi type gelirse ben ne yapayım
        case ADD_TO_CART:    // Gönderdiğin aksiyonun tipi ADD_TO_CART anlamında
            let product = state.cartItems.find(c => c.product.id === payload.id) //state yte bulunan cartItemleri bul,cartItem içindeki her bir cartItem daki ilgili productın id si ile benim gönderdiğim productın  id si aynı ise demek ki daha önce eklemişim 
            if (product) {   //eğer sepete o ürün daha önce eklenmiş ise
                product.quantity++; // ürün miktarını +1 bir bir artır diyoruz

                return {     // yep yeni bir obje oluşturduk ve içindeki elamanı(cartItems) onu spread ile ayırmış olduk,çünkü yukardaki ++ referansı değiştirmiyor.Biz bu şekilde referansı değiştirdik.Reducer de değişen bu referansa göre sepeti güncelleyecek

                    ...state //state in referansını değiştiriyo
                }
            } else { //bu ürün daha önceden sepette yoksa

                return {

                    ...state, // burda objeyi ayırdık(spread operatörü ile) 
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }] //state teki cartItems ı spread ile objelerine ayırdık ve onu yeni bir arrayin içine koyduk,payload ile yeni ürünü ekledik
                }                                                               //payload(gönderdiğimiz aksiyonla gönderdiğimiz yeni ürün değeri)
            }

        case REMOVE_FROM_CART: //Eğer aksiyon olarak   REMOVE_FROM_CART gelirse direkt elemanı silsin quantity i azaltmasın                                                 
            return {

                ...state,   //şimdi bizim cartItem lardan elemam uçurmam gerekiyo,
                cartItems: state.cartItems.filter((c) => c.product.id !== payload.id)  //filter ile referansı değiştirdik
            }                           // mesela sepettimizde 1,2,3,4 numaralı ürünler var.Bizim silinmesini istediğimiz eleman 3,biz nurdaki kodda filter yeni bir array oluştur(filtreme göre yani gönderdiğim payload ın idsine göre) 1,2,4 farklı mı evet onları yeni array e alır 3 ü almaz.
        default:
            return state; // yukarıdaki aksiyonlar değilse state in kendisini gönder

    }
}