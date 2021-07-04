import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown ,Label} from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function CartSummary() {

    const {cartItems} = useSelector(state => state.cart) //useSelector ile  state teki cart ı kullanmak için {cartItems} a atadık
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem)=>( // cartItems ı maple her cartItem için bana birtane jsx döndür
                       
                            <Dropdown.Item key={cartItem.product.id}>
                                {cartItem.product.productName}
                                <Label>
                                {cartItem.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))

                    }
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
