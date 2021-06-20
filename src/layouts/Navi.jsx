import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useHistory } from 'react-router-dom'



export default function Navi() {

    //useState(false) default değeri false yani otantike(giriş yapmadı) değil anlamında.burda yani giriş yaptı ise SignedIn çıkış yaptı ise SignedOut
    //yani giriş yapmadı(false) ise Giriş Yap ve Kayıt Ol menüsünü göster/giriş yaptı ise(true) Çıkış yap menüsünü göster diyoruz
    const [isAuthenticated, setIsAuthenticated] = useState(true) //state(durumumuz) miz isAuthenticated tir,durumu değiştirecek metot setIsAuthenticated dur
     const history= useHistory() ////çıkış yaptığımızda bizi ürünlerin olduğu sayfaya yönlendirir.

    function handleSignOut() { //çıkış yapma işlemini handle edicez.Çıkış yaptığında isAuthenticated=false olacak
        
        setIsAuthenticated(false)
        history.push("/") //çıkış yaptığımızda bizi ürünlerin olduğu sayfaya yönlendirir.
    }

    function handleSignIn() { //çıkış yapma işlemini handle edicez.Çıkış yaptığında isAuthenticated=false olacak

        setIsAuthenticated(true)

    }

    return (
        <div>

            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />

                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} bişey={"1"}/> 
                        : <SignedOut signIn={handleSignIn} />} 

                    </Menu.Menu>
                </Container>


            </Menu>
        </div>
    )
}
