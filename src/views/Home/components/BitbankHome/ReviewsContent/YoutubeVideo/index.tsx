import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

interface Props {
  opts: YouTubeProps['opts']
}

const ImportYouter: React.FC<React.PropsWithChildren<Props>> = ({ opts }) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo()
  }
  const config: YouTubeProps['opts'] = {
    ...opts,
  }
  return <YouTube videoId={config.videoId} opts={opts} onReady={onPlayerReady} />
}

export default ImportYouter
