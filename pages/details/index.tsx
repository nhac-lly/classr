import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Layout from '../../src/components/Layout';
import Stream from '../../src/components/ClassDetails/Stream';
import Classwork from '../../src/components/ClassDetails/Classwork';
import People from '../../src/components/ClassDetails/People';
import Marks from '../../src/components/ClassDetails/Marks';

const data = {
  pages:[
    {component: Stream, name: 'Stream'},
    {component: Classwork, name: 'Classwork'},
    {component: People, name: 'People'},
    {component: Marks, name: 'Marks'},
  ]
}
export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Layout {...data}/>
      </Box>
    </Container>
  );
}