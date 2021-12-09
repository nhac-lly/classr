import { Box, Container } from "@mui/material";
import Layout from "../src/components/Layout";

const data = {
  pages:[
    {component: (() => (<h1>Page is being built 😅</h1>)), name: 'Home'},
  ]
}

export default function Custom404() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Layout {...data} />
      </Box>
    </Container>
  );
}
