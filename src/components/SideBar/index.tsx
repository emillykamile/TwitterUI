import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
              title="What’s happening"
              elements={[
                <News />,
                <News />,
                <News />,
              ]}
          />
          <List
                title="Who to follow"
                elements={[
                  <FollowSuggestion
                    name="Bessie Cooper"
                    nickname="@alessandroveronezi"
                  />,
                  <FollowSuggestion 
                    name="Jenny Wilson" 
                    nickname="@gabrielcantarin" 
                  />,
      
                ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
