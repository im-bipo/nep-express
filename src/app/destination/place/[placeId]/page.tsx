import React from 'react'

const PageID = ({params}:{params : {placeId : string}}) => {
  return (
    <div>helo dude : {params.placeId}</div>
  )
}

export default PageID