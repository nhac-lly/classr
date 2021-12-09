import { Box, Container } from "@mui/material";
import Layout from "../src/components/Layout";

export default function Custom404() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Layout tab>
          <h1>Page is being built 😅</h1>
        </Layout>
      </Box>
    </Container>
  );
}
