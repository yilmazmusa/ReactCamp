import React, { useState, useEffect } from "react"
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from "../services/productService"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { addToCart } from "../store/actions/cartActions"
import { toast } from "react-toastify"

export default function ProductList() {

    const dispatch = useDispatch() // dispatch le biz bir aksiyon çağırıyoruz(bir fonksiyonu çağırıyoruz yani)

    const [products, setProducts] = useState([]) //eşitliğin solundaki  yapı distructor işlemini yapıyoruz.Sağ taraf ise bi fonksiyon
    //Demekki useState bize bir nesne dönderiyor biz de onu sol tarafta distruct edicez.Döndürdüğü yapıda bir data(products) ve bir fonksiyon(setProducts) dönüyor.
    //Solda products datasını değiştirmek içinde setProducts ı kullanıyoruz işte bu hook tur


    useEffect(() => {

        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data.data))  //bu bize promise diye bi yapı dönderiyo.başarılı olursa then(),Başarısız olursa catch()


    }, []) //Bir fonksiyon.Kompenent yüklendiğinde yapılması istenen kodu buraya yazıyoruz

    const handleAddToCart = (product)=>{ //basit birdeğişken oluştur değişkene fonksiyon ata 

        dispatch(addToCart(product)) //yani bir fonkiyon yazdık store daki attToCart a dispatch(sevk olduk) olduk.Ve biz bu addToCart ı dispatch ile 10. satırda çağırdık 
        toast.success(`${product.productName} sepete eklendi!`)
    }



    return (
        <div>
            <Table celled> 
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {products.map((product) => (

                        <Table.Row key={product.id}>
                            <Table.Cell> <Link to={`/products/${product.productName}`}>{product.productName} </Link> </Table.Cell>
                            <Table.Cell>{product.unitPrice}</Table.Cell>
                            <Table.Cell>{product.unitsInStock}</Table.Cell>
                            <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                            <Table.Cell>{product.category?.categoryName}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button> 
                            </Table.Cell>
                        </Table.Row>

                    ))

                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
