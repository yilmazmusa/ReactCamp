import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService"

export default function ProductDetail() {
    
    let { name } = useParams() // BU fonksiyon bize parametreleri obje olarak veriyor.useParams() bize obje döndürüyor
   
    const [products, setProduct] = useState({})     
    
    useEffect(() => {

        let productService = new ProductService()
        productService.getByProductName(name).then(result=>setProduct(result.data.data))  //bu bize promise diye bi yapı dönderiyo.başarılı olursa then(),Başarısız olursa catch() işleme alınır 


    }, []) // burda [] koymamızın sebebi state değiştiğinde sayfayı yenile anlamında.
       
   
    return (
        <div>
            
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{products.productName}</Card.Header>
                        <Card.Meta>{products.category?.categoryName}</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
               
            </Card.Group>
        </div>
    )
}
