import React from 'react'

const Aside = ({artistData}) => {
  console.log(artistData)
  return (
    <div className="bg-teal-950 text-slate-50 h-full px-2 py-3 rounded-md">
      <div className="flex flex-col gap-1">
      {
        artistData.map((data) => {
            return(                    
                    <a key={data.id} href="/" className="flex gap-4 items-center hover:bg-teal-900 rounded-md px-3 py-2">
                        <img src={data.profilePicture} alt={data.name} className="w-12 rounded-full"/>
                        <div>
                          <h3 className="font-medium">{data.name}</h3>
                          <h4 className="text-sm">{data.dataType}</h4>
                        </div>
                    </a>
            )
        })
      }
      </div>
    </div>
  )
}

export default Aside