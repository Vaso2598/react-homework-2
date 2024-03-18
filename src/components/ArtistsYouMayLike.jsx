import React from 'react'

const ArtistsYouMayLike = ({data}) => {
    console.log(data)
  return (
    <div className="flex flex-row flex-wrap gap-4">
        {data.map((data) => {
            return(
                <a href="#" key={data.id} className="py-2 px-2 w-48 h-64 border rounded-xl">
                    <img src={data.profilePicture} alt={data.name} className="size-44 border rounded-full"/>
                    <h3>{data.name}</h3>
                </a>
            )
        })}
    </div>
  )
}

export default ArtistsYouMayLike