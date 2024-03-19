import React from 'react'

const Genres = ({data}) => {
    console.log(data)
  return (
    <div className="flex shrink flex-wrap gap-4">
        {data.map((data) => {
            return(
                <div key={data.id} style={{backgroundColor: data.color}} className="size-48 rounded-xl">
                    <a href="#">{data.genre}</a>
                </div>
            )
        })}
    </div>
  )
}

export default Genres