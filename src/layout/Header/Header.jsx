import React from 'react'

function Header({navigation}) {
    console.log(navigation)
  return (
    <nav className="bg-teal-950 text-slate-50">
        <ul>
            {navigation.map((item, index) => {
                return(
                    <li key={index} >
                        <a className="font-bold text-lg" href={item.url}>{item.title}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Header