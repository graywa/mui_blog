import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import ava2 from './assets/ava2.jpg'
import ava3 from './assets/ava3.jpg'
import ava4 from './assets/ava4.jpg'
import photo1 from './assets/photo1.avif'
import photo2 from './assets/photo2.avif'
import photo3 from './assets/photo3.avif'
import photo4 from './assets/photo4.avif'
import photo5 from './assets/photo5.avif'
import photo6 from './assets/photo6.avif'

const Rightbar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      <Box position='fixed' width={300} sx={{ margin: 'auto' }}>
        <Typography variant='h6' fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup total={7}>
          <Avatar alt='Remy Sharp' src={ava2} />
          <Avatar alt='Travis Howard' src={ava3} />
          <Avatar alt='Cindy Baker' src={ava4} />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={300} mt={5} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} gap={5} rowHeight={100}>
          <ImageListItem>
            <img src={photo1} alt='photo1' />
          </ImageListItem>
          <ImageListItem>
            <img src={photo2} alt='photo2' />
          </ImageListItem>
          <ImageListItem>
            <img src={photo3} alt='photo3' />
          </ImageListItem>
          <ImageListItem>
            <img src={photo4} alt='photo4' />
          </ImageListItem>
          <ImageListItem>
            <img src={photo5} alt='photo5' />
          </ImageListItem>
          <ImageListItem>
            <img src={photo6} alt='photo6' />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={300} mt={5} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src={ava2} />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src={ava4} />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
