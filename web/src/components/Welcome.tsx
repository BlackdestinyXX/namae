import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import {
  FaMapSigns,
  FaGithub,
  FaGitlab,
  FaNpm,
  FaPython,
  FaGem,
  FaLinux,
  FaAppStore,
  FaTwitter,
  FaSlack,
  FaAws,
  FaJsSquare,
  FaBuilding,
} from 'react-icons/fa';
import {IoIosBeer} from 'react-icons/io';
import {DiRust, DiHeroku} from 'react-icons/di';

import {SpectrumIcon, NowIcon, NetlifyIcon} from './Icons';
import {mobile} from '../util/css';

const Welcome: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <Hero>
        <Header>{t('title')}</Header>
        <Text>{t('description')}</Text>
        <ExampleQueries>
          <h5>Try with these queries</h5>
          <List>
            <ListButton>
              <Link to="/s/namae">namae</Link>
            </ListButton>
            <ListButton>
              <Link to="/s/Tint">Tint</Link>
            </ListButton>
            <ListButton>
              <Link to="/s/React">React</Link>
            </ListButton>
            <ListButton>
              <Link to="/s/Spotify">Spotify</Link>
            </ListButton>
            <ListButton>
              <Link to="/s/Rust">Rust</Link>
            </ListButton>
          </List>
        </ExampleQueries>
      </Hero>
      <ColorfulList>
        <ListItem>
          <FaMapSigns /> {t('providers.domains')}
        </ListItem>
        <ListItem>
          <FaGithub /> {t('providers.github')}
        </ListItem>
        <ListItem>
          <FaGitlab /> {t('providers.gitlab')}
        </ListItem>
        <ListItem>
          <FaNpm /> {t('providers.npm')}
        </ListItem>
        <ListItem>
          <FaPython /> {t('providers.pypi')}
        </ListItem>
        <ListItem>
          <FaGem /> {t('providers.rubygems')}
        </ListItem>
        <ListItem>
          <DiRust /> {t('providers.rust')}
        </ListItem>
        <ListItem>
          <IoIosBeer /> {t('providers.homebrew')}
        </ListItem>
        <ListItem>
          <FaLinux /> {t('providers.linux')}
        </ListItem>
        <ListItem>
          <FaTwitter /> {t('providers.twitter')}
        </ListItem>
        <ListItem>
          <SpectrumIcon /> {t('providers.spectrum')}
        </ListItem>
        <ListItem>
          <FaSlack /> {t('providers.slack')}
        </ListItem>
        <ListItem>
          <DiHeroku /> {t('providers.heroku')}
        </ListItem>
        <ListItem>
          <NowIcon /> {t('providers.now')}
        </ListItem>
        <ListItem>
          <NetlifyIcon /> {t('providers.netlify')}
        </ListItem>
        <ListItem>
          <FaAws /> {t('providers.s3')}
        </ListItem>
        <ListItem>
          <FaJsSquare /> {t('providers.jsorg')}
        </ListItem>
        <ListItem>
          <FaGithub /> {t('providers.githubSearch')}
        </ListItem>
        <ListItem>
          <FaAppStore /> {t('providers.appStore')}
        </ListItem>
        <ListItem>
          <FaBuilding /> {t('providers.nta')}
        </ListItem>
      </ColorfulList>
    </Container>
  );
};
export default Welcome;

const Container = styled.div`
  padding-bottom: 40px;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.6em;

  ${mobile} {
    text-align: left;
    padding-right: 40px;
    padding-left: 40px;
    font-size: 1.2rem;
  }
`;

const Header = styled.h1`
  font-size: 3.5em;
  line-height: 1em;
  padding-bottom: 30px;

  ${mobile} {
    font-size: 3em;
  }
`;

const Text = styled.p`
  font-size: 1.2em;
  color: #3c3c3c;
`;

const Hero = styled.div``;

const ExampleQueries = styled.div`
  margin: 50px 0 50px;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1rem;

  ${mobile} {
    justify-content: flex-start;
  }
`;

const ColorfulList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1rem;

  ${mobile} {
    flex-direction: column;
  }

  padding: 20px;
  margin-top: 50px;
  color: white;
  background-image: linear-gradient(180deg, #a57bf3 0%, #4364e1 100%);
`;

const ListItem = styled.div`
  margin: 15px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1em;

  ${mobile} {
    margin: 10px 0;
  }

  svg {
    margin-right: 5px;
  }
`;

const ListButton = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1em;

  ${mobile} {
    margin: 10px 10px 0 0;
  }

  a {
    color: black;
    padding: 10px;
    border: 1px solid black;
    border-radius: 2px;
  }
`;
