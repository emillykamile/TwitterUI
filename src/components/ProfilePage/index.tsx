import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Emilly Kamile</h1>
        <h2>@emillykamile</h2>

        <p>
          Developer at <a href="https://compass.uol/en/home/">@Compass</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Recife, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 05 de fevereiro de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>96</strong>
          </span>
          <span>
            <strong>872 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
