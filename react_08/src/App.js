import React from 'react'
import CountryWeather from './components/CountryWeather'

import Container from '@mui/material/Container';

export default function App() {
  return (
    <Container maxWidth="sm">
      <CountryWeather />
    </Container>
  )
}