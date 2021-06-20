import axios from "axios";

export default class  ProductService {

    getProducts() {

        return axios.get("http://localhost:8080/api/products/getall") //Apideki restful'a istek atmaya yarıyor.Yani back-end teki tüm productları dönder metoduna istek atıyr
    }

    getByProductName(productName) {

        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName) //Apideki restful'a istek atmaya yarıyor.Yani back-end teki tüm productları dönder metoduna istek atıyr
    }


}