import React, { useState } from 'react'

const Lession_1 = () => {
  const [visible, setVisible] = useState(false)
  const onClick = () => {
    console.log('onClick')
    setVisible(!visible)
  }

  let itemView
  if (visible === true) {
    itemView = (
      <>
        <div style={styles.item}></div>
        <div style={styles.item}></div>
        <div style={styles.item}></div>
      </>
    )
  } else {
    itemView = null
  }

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#455A64',
      }}>
      <a
        style={{
          color: 'white',
          textAlign: 'center',
          backgroundColor: '#5C6BC0',
          alignSelf: 'center',
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 8,
          paddingBottom: 8,
          marginTop: 16,
          borderRadius: 8,
        }}
        onClick={onClick}>
        {visible ? 'Ẩn danh sách' : 'Hiện danh sách'}
      </a>

      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#455A64',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <h4>HELLO TRUC</h4> */}
        {itemView}
      </div>
    </div>
  )
}

type Styles = {
  item: React.CSSProperties
}

const styles: Styles = {
  item: { height: 200, width: 300, backgroundColor: 'white', borderRadius: 16, margin: 4 },
}

export default Lession_1
