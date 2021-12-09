import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/utils/Link';
import Copyright from '../../src/components/Copyright';
import Layout from '../../src/components/Layout';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Layout tab>
        </Layout>
      </Box>
    </Container>
  );
}
