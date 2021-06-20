import React from 'react'
import { Button, Menu } from 'semantic-ui-react'


//margin left arada bir boşluk bırakıyor
export default function SignedOut({signIn}) { //sistemden çıkış yapmışsam görünecek şeyler
    return (
        <div>
            <Menu.Item>
                <Button  onClick={signIn} primary>Giriş Yap</Button> 
                 <Button primary style={{marginLeft:"0.5em"}} >Kayıt Ol</Button>  
            </Menu.Item> 
            
            
        </div>
    )
}
