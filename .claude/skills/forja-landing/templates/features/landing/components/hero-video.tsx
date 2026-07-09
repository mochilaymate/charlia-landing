'use client'

import { useEffect, useRef } from 'react'

export function HeroVideo({
  webmSrc,
  mp4Src,
  poster,
}: {
  webmSrc: string
  mp4Src: string
  poster: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleEnded = () => {
      try {
        if (v.playbackRate > 0) {
          // reached end — play in reverse
          v.playbackRate = -1
          v.play()
        } else {
          // reached start — play forward again
          v.currentTime = 0
          v.playbackRate = 1
          v.play()
        }
      } catch {
        // Safari: negative playbackRate unsupported — fall back to native loop
        v.loop = true
        v.currentTime = 0
        v.playbackRate = 1
        v.play()
      }
    }

    v.addEventListener('ended', handleEnded)
    return () => v.removeEventListener('ended', handleEnded)
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
      className="hero-video hidden h-full w-full object-cover opacity-70 md:block"
    >
      <source src={webmSrc} type="video/webm" />
      <source src={mp4Src} type="video/mp4" />
    </video>
  )
}
