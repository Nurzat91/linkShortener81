import React, { useState } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';


const Home = () => {
  const [text, setText] = useState({
    link: '',
  });
  const [shortUrl, setShortUrl] = useState('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;
    setText(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const shortened = `http://localhost:8000/${text.link}`;
    setShortUrl(shortened);

    setText({ link: '' });
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <Grid container direction="column" sx={{mb: 3}}>
          <Card sx={{ textAlign: 'center', padding: 2 }}>
            <Typography variant="h4" sx={{mb: 2}}>Shorten your link!</Typography>
            <Grid item xs sx={{m: 2}}>
              <TextField
                required
                id="link" label="Link"
                name="link"
                value={text.link}
                onChange={inputChangeHandler}
              />
            </Grid>
            <Grid item xs sx={{m: 2}}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
              >
                Shorten!
              </Button>
            </Grid>
          </Card>
        </Grid>
      </form>
      {shortUrl && (
        <Card sx={{ textAlign: 'center', padding: 2 }}>
          <Typography variant="h5">
            Your link now looks like this:
          </Typography>
          <a href={shortUrl} target="_blank" rel="shortUrl">{shortUrl}</a>
        </Card>
      )}
    </>
  );
};

export default Home;