import React from 'react'
import Card from './Card'

function Foreground() {
  const data = [
    {
      description: "My try in making a notes application by just using inspo.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now" },
      tagColor: "green",
    },
    {
      description: "My try in making a notes application by just using inspo.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now" },
      tagColor: "blue",
    },
    {
      description: "My try in making a notes application by just using inspo.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now" },
      tagColor: "green",
    },
  ]

  return (
    <div className="fixed flex flex-wrap gap-20 top-0 left-0 z-[3] w-full h-full p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  )
}

export default Foreground
