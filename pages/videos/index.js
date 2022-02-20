import React from 'react'
import { client } from '../../lib/sanity';

import Header from "../../components/partials/Header"
import Watch from "../../components/sections/Watch";

const videoQuery = `*\[_type == "video"\] {
  name, 
  url, 
  album->{
    name,
    releaseDate
  }, 
  thumbnail{
    asset->{
      _id,
      url
    },
  },
}`;


export async function getStaticProps() {
  const videoData = await client.fetch(videoQuery);

  return {
    props: {
      videoData,
    },
    revalidate: 1,
  };
}



function VideoPage({ videoData }) {
  return (
    <>
      <Header header="videos" />
      <Watch videos={videoData} />
    </>
  )
}

export default VideoPage