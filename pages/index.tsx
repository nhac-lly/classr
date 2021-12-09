import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/components/ProTip';
import Link from '../src/utils/Link';
import Copyright from '../src/components/Copyright';
import Layout from '../src/components/Layout';
import About from './about';

const data = {
  pages:[
    {component: About, name: 'Home'},
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
