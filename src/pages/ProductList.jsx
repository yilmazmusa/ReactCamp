import React, { useState, useEffect } from "react"
import { Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from "../services/productService"
import { Link } from 'react-router-dom'


export default function ProductList() {

    const [products, setProducts] = useState([]) //eşitliğin solundaki  yapı distructor işlemini yapıyoruz.Sağ taraf ise bi fonksiyon
    //Demekki useState bize bir nesne dönderiyor biz de onu sol tarafta distruct edicez.Döndürdüğü yapıda bir data(products) ve bir fonksiyon(setProducts) dönüyor.
    //Solda products datasını değiştirmek içinde setProducts ı kullanıyoruz işte bu hook tur


    useEffect(() => {

        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data.data))  //bu bize promise diye bi yapı dönderiyo.başarılı olursa then(),Başarısız olursa catch()


    }, []) //Bir fonksiyon.Kompenent yüklendiğinde yapılması istenen kodu buraya yazıyoruz

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
