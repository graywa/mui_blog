import { Fab, Tooltip } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'

const Add = () => {
  return (
    <Tooltip
      title='Add'
      sx={{
        position: 'fixed',
        bottom: 30,
        left: {
          xs: 'calc(50% - 28px)',
          md: 30,
        },
      }}
    >
      <Fab size='large' color='primary' aria-label='add'>
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}

export default Add
