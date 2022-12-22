import React, {useState} from 'react'
import SelectRegion from './components/SelectRegion'
import SelectCountry from './components/SelectCountry'
import Weather from './components/Weather'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function App() {
  const [region, setRegion] = useState();
  const [country, setCountry] = useState();

  const liftingRegion = value => setRegion(value);

  const liftingCountry = value => setCountry(value);

  return (
    <Container>
      <Box sx={{width: '30ch', m: "2ch auto", '& .MuiTextField-root': { my: 1, width: 'inherit' }}}>
        <SelectRegion liftingRegion={liftingRegion} />
        <SelectCountry region={region} liftingCountry={liftingCountry} />
        <Weather country={country} />
      </Box>
    </Container>
  )
}