import React from 'react'

function Header({navigation}) {
    console.log(navigation)
  return (
    <nav className="bg-teal-950 text-slate-50 p-2 rounded-md">
        <ul>
            {navigation.map((item, index) => {
                return(
                    <li key={index} className="hover:bg-teal-900 rounded-md px-3 py-1" >
                        <a className="font-bold text-lg block" href={item.url}>{item.title}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Header