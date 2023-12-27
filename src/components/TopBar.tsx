import React, { useState } from 'react'
import Lession_1 from 'src/lessions/Lession_1'
import Lession_2 from 'src/lessions/Lession_2'

type TopBarProps = {
  onPickLession: (element: React.JSX.Element) => void
}

const lessionComponents = [Lession_1, Lession_2]

const TopBar: React.FC<TopBarProps> = ({ onPickLession }) => {
  const [componentName, setComponentName] = useState<string>()
  return (
    <div style={styles.container}>
      {lessionComponents.map(Component => {
        const isActive = componentName === Component.name
        return (
          <a
            key={Component.name}
            style={{
              ...styles.item,
              backgroundColor: isActive ? '#3F51B5' : '#E0E0E0',
              color: isActive ? 'white' : 'black',
              textDecorationColor: isActive ? 'white' : 'black',
            }}
            onClick={() => {
              setComponentName(Component.name)
              onPickLession(<Component />)
            }}>
            {Component.name}
          </a>
        )
      })}
    </div>
  )
}

type Styles = {
  container: React.CSSProperties
  item: React.CSSProperties
}

const styles: Styles = {
  container: {
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottom: '#E0E0E0',
    borderWidth: 0.5,
    borderBottomStyle: 'solid',
  },
  item: { color: 'black', padding: 8, textDecorationLine: 'underline' },
}

export default TopBar
