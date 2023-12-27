import React, { useState } from 'react'
import TopBar from './components/TopBar'

function test1(num: number) {
  return num + 1
}
test1(0)

const test2 = function (num: number) {
  return num + 1
}
test2(0)

const test3 = (num: number) => {
  return num + 1
}
test3(0)

function App() {
  const [element, setElement] = useState<React.JSX.Element>()

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        height: '100vh',
        flexDirection: 'column',
      }}>
      <TopBar onPickLession={setElement} />
      {element}
    </div>
  )

  // return (
  //   <div
  //     style={{
  //       display: 'flex',
  //       flex: 1,
  //       height: '100vh',
  //       flexDirection: 'column',
  //       backgroundColor: '#455A64',
  //     }}>
  //     <a
  //       style={{
  //         color: 'white',
  //         textAlign: 'center',
  //         backgroundColor: 'red',
  //       }}
  //       onClick={onClick}>
  //       {visible ? 'ON' : 'OFF'}
  //     </a>

  //     <div
  //       style={{
  //         display: 'flex',
  //         flex: 1,
  //         flexDirection: 'column',
  //         backgroundColor: '#455A64',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}>
  //       {/* <h4>HELLO TRUC</h4> */}
  //       {itemView}
  //     </div>
  //   </div>
  // )
}

export default App
