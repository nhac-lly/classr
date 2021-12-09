import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Layout from '../../src/components/Layout';
import Stream from '../../src/components/ClassDetails/Stream';

const data = {
  pages:[
    {component: Stream, name: 'Stream'},
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