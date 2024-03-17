import React from 'react'

const Aside = ({artistData}) => {
  return (
    <div>
        <div className="flex flex-col gap-4">
        {
            artistData.map((data) => {
                return(                    
                        <div key={data.id} className="flex gap-4 items-center">
                            <img src={data.profilePicture} className="w-12 rounded-full"/>
                            <h3>{data.name}</h3>
                        </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Aside