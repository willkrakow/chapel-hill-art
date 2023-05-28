import router from './routes'
import { RouterProvider } from 'react-router-dom'
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react'
import theme from './utils/theme';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: auto;
  font-family: 'Roboto', sans-serif;
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <RouterProvider router={router} />
    </Container>
    </ThemeProvider>
  )
}

export default App
