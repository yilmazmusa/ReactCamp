import React from 'react'
import { Dropdown, Menu ,Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) { ////sisteme giriş yapmışsam görünecek şeyle
    return (
        <div>
            <Menu.Item>
                                        {/* //avatar şeklinde göstermek için spaced te ekranın sağıda dayıyor */}
                <Image avatar spaced="right" src=" https://avatars.githubusercontent.com/u/17812283?s=400&u=8d06f8ef7556e71110d9aa23e64de3d941ff9030&v=4" /> 

                <Dropdown pointing="top left" text="Musa">

                    <Dropdown.Menu>

                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>

                    </Dropdown.Menu>

                </Dropdown>
           
            </Menu.Item>
        </div>
            )
}
