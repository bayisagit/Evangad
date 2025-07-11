import React, { useEffect, useState } from 'react'
import './youtube.css';
function Youtube() {
  const [youtubevides,setvideos] = useState([]);


  useEffect(() => {
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${import.meta.env.VITE_CHANNEL_ID}&maxResults=9&order=date&key=${import.meta.env.VITE_API_KEY}`;
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log("YouTube API response:", data);
        const youtubevideodata = data.items;
        setvideos(youtubevideodata);
    })
    .catch((err) => console.error("Error fetching videos:", err));
  },[]);
  return (
    <div className='allvideowrapper'>
        <div className='container'>
            <div className='justfcont'>
                <div className='colun'>
                    <div className='titwraper'>
                        latest videos <br />
                        <br />
                    </div>
                </div>
                {youtubevides.map((singlevideo) => {
                    let vidid = singlevideo.id.videoId;
                    let vidlink = `https://www.youtube.com/watch?v=${vidid}`;
                    let videoWrapper = (
                        <div key={vidid} className='col4'>
                            <div className='singlevid'>
                                <div className='thumbna'>
                                    <a href={vidlink} target='_blak'>
                                        <img src={singlevideo.snippet.thumbnails.high.url} alt="" />
                                    </a>
                                </div>
                                <div className=' videinfowr'>
                                    <div className='videtit'>
                                        <a href={vidlink} target='_blank'>
                                            {singlevideo.snippet.title}
                                        </a>
                                    </div>
                                    <div className='videdesc'>
                                        {singlevideo.snippet.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                    return videoWrapper;
                })}
            </div>
        </div>
    </div>
  );
}

export default Youtube