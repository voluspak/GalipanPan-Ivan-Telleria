import { useState, useEffect } from 'react'

export function useImage () {
  const [imgUrl, setImgUrl] = useState('')
  const [preview, setPreview] = useState('')

  function handleImage (e) {
    if (!e.target.value) {
      setImgUrl(undefined)
    } else {
      const url = e.target.value
      const hasDL = url.includes('?dl=0')
      if (hasDL) {
        const newwUrl = url.replace('?dl=0', '?raw=1')
        setImgUrl(newwUrl)
      } else {
        setImgUrl(url)
      }
    }
  }

  useEffect(() => {
    if (!imgUrl) {
      setPreview(undefined)
    } else {
      setPreview(imgUrl)
    }
  }, [imgUrl])

  return { handleImage, preview, imgUrl }
}
