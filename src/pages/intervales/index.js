import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  color: black;
  font-size: 25px;
  margin: 40px;
`;


class IntervalesPage extends Component {
  render() {
    return (
      <div>
        <Header>
          Выберите опорную ноту
        </Header>
      </div>
    );
  }
}

export default IntervalesPage;