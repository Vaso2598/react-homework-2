import React from 'react'
import ArtistsYouMayLike from '../components/ArtistsYouMayLike'
import Recent from '../components/Recent'
import TopArtists2024 from '../components/TopArtists2024'
import TopAlbums2024 from '../components/TopAlbums2024'
import { artistsYouMayLike } from '../data/artistsYouMayLike'
import { recentlyPlayedData } from '../data/recentlyPlayedData'
import { topArtists2024 } from '../data/topArtists2024'
import { topAlbums2024 } from '../data/topAlbums2024'

const Home = () => {
  return (
    <div className="flex flex-col bg-teal-950 text-slate-50 gap-8 p-3 rounded-md">
        <section className="flex flex-col gap-4">
            <h2 className="font-semibold text-2xl">Recently played</h2>
            <Recent data={recentlyPlayedData}/>
        </section>
        <section className="flex flex-col gap-4">
            <h2 className="font-semibold text-2xl">Artists you may like</h2>
            <ArtistsYouMayLike data={artistsYouMayLike}/>            
        </section>
        <section className="flex flex-col gap-4">
            <h2 className="font-semibold text-2xl">Top artists of 2024</h2>
            <TopArtists2024 data={topArtists2024}/>
        </section>
        <section className="flex flex-col gap-4">
            <h2 className="font-semibold text-2xl">Top albums of 2024</h2>
            <TopAlbums2024 data={topAlbums2024}/>
        </section>
    </div>
  )
}

export default Home