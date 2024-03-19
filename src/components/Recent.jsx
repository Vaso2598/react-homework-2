import React from 'react'

const Recent = ({data}) => {
    console.log(data)
  return (
    <div className="flex flex-row flex-wrap gap-4">
        {data.map((data) => {
            return(
                <a href="#" key={data.id} className="py-2 px-2 w-48 h-64 rounded-xl hover:bg-teal-900">
                    {data.dataType === "artist" ?
                    (<img src={data.profilePicture} alt={data.name} className="size-44 rounded-full"/>)
                    :
                    (<img src={data.playlistCover} alt={data.name} className="size-44 object-cover rounded-xl"/>)
                    }
                    <h3>{data.name}</h3>
                    {data.dataType === "playlist" ?
                    (<div className="flex flex-row flex-wrap text-sm">{data.content.join(", ")                           
                    }</div>):(<></>)
                    }
                </a>
            )
        })}
    </div>
  )
}

export default Recent