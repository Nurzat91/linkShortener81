import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './containers/Home/Home';


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div>
          <Container maxWidth="xl">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="*" element={<ErrorPage/>} />
            </Routes>
          </Container>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
