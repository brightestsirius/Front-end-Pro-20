import React, {useState, useEffect} from 'react'
import UseEffectExample from './components/useEffectExample/UseEffectExample'

export default function App() {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    // componentDidMount App
    setTimeout(() => {
      setShowComponent(false);
    }, 5000);
  }, [])

  return (
    <div>
      {showComponent && <UseEffectExample />}
    </div>
  )
}
