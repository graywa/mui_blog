import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  Add as AddIcon,
  EmojiEmotions,
  Image,
  VideoCameraBack,
  PersonAdd,
  DateRange,
} from '@mui/icons-material'
import { useState } from 'react'
import ava1 from './assets/ava1.jpg'

const Add = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
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
        onClick={() => setModalOpen(true)}
      >
        <Fab size='large' color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          width={360}
          height={280}
          padding={4}
          borderRadius={5}
          bgcolor='background.default'
          color='text.primary'
        >
          <Typography variant='h6' color='gray' textAlign='center'>
            Create Post
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              margin: '20px 0',
            }}
          >
            <Avatar src={ava1} width={30} height={30} />
            <Typography fontWeight={500}>Dimon</Typography>
          </Box>
          <TextField
            id='standard-multiline-static'
            multiline
            rows={3}
            placeholder='How are you?'
            variant='standard'
            sx={{ width: '100%' }}
          />
          <Stack direction='row' gap={2} mt={2} mb={2}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup
            variant='contained'
            aria-label='outlined primary button group'
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{width: '100px'}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}

export default Add
