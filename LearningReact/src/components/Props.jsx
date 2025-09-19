
// const Props = (data) => {

//   return (
//     <div>{data.name}</div>
//   )
// }

// export default Props

import React from 'react'

const Props = ({user}) => {

  return (
    <>
    <div>{user.name}</div>
    <div>{user.uni}</div>
    <div>{user.tech}</div>
    </>
  )
}

export default Props