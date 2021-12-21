import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 3rem 0;
`;

const Portfolio = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/kaelynsuh/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRepos(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <>
      <Wrapper>
        <h3>
          Collection of open source projects I&apos;ve worked on, fetched from
          from Github.
        </h3>
      </Wrapper>

      <div style={{ padding: '2rem' }}>
        <Grid container spacing={3}>
          {repos
            .sort((a, b) => (a.pushed_at < b.pushed_at ? 1 : -1))
            .map((repo) => {
              return (
                <Grid key={repo.id} item md={4}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card key={repo.id} className={classes.root}>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          {repo.name}
                        </Typography>
                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                        >
                          {repo.language}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {repo.description}
                        </Typography>
                        <br />
                        <Typography variant="body2" component="p">
                          Last updated: {moment(repo.pushed_at).format('L')}
                        </Typography>
                      </CardContent>
                    </Card>
                  </a>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default Portfolio;
