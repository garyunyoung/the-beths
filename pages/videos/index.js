import React from 'react'
import { client } from '../../lib/sanity';

import Header from "../../components/shared/Header"
import Videos from "../../components/videos/Videos";

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

export default function VideoPage({ videoData }) {
  return (
    <>
      <Header header="videos" />
      <Videos videos={videoData} />
    </>
  )
}
