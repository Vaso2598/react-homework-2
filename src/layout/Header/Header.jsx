import React from 'react'

function Header({navigation}) {
    console.log(navigation)
  return (
    <header>
        <nav>
            <ul>
                {navigation.map((item, index) => {
                    return(
                        <li key={index} > 
                            <a href={item.url}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </header>
  )
}

export default Header