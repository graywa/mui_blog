import { Settings } from '@mui/icons-material'
import { Button } from '@mui/material'

function App() {
  return (
    <>
      <Button variant='contained' disabled>
        Hello World
      </Button>
      <Button
        variant='outlined'
        color='success'
        size='large'
        startIcon={<Settings />}
      >
        Hello World
      </Button>
      <Button variant='text' size='small'>
        Hello Worldd
      </Button>
    </>
  )
}

export default App
