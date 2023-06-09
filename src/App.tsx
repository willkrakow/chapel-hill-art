import router from './routes'
import { RouterProvider } from 'react-router-dom'
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react'
import { darkTheme} from './utils/theme';
import './App.css';
import { ThemeContextProvider } from './contexts/Theme';
import "mapbox-gl/dist/mapbox-gl.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: auto;
  font-family: 'Roboto', sans-serif;
  background-color: ${props => props.theme.colors.background};
`;

function App() {
  return (
    <AppWrapper>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </AppWrapper>
  );
}

function AppWrapper({children}: {children: React.ReactNode}){
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  )
}

export default App
