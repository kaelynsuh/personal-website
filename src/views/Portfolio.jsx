import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

const Content = styled.div`
  display: flex;
  justify-content: center;

  padding: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 3rem 1rem;
`;

const Portfolio = () => {
  const classes = useStyles();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    // revisit: fix loader
    setLoading(true);

    fetch('https://api.github.com/users/kaelynsuh/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setRepos(result);
        },
        (error) => {
          setLoading(false);
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

      {loading && <Content>Loading...</Content>}

      {error && (
        <Content>There was an error getting results. Please try again.</Content>
      )}

      {repos && (
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
      )}
    </>
  );
};

export default Portfolio;
