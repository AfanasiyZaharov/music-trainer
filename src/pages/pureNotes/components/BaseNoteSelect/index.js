import React, { Component } from 'react';
import styled from 'styled-components';

const SelectNotesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledNoteName = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  color: #323C45;
  border: 1px solid  #333333;
  border-right: 0px;
  background-color: ${({ isActive }) => isActive ? 'green' : 'white'};
  &:last-child{
    border-right: 1px solid #333333;
  }
`;

class BaseNoteSelect extends Component {
  render() {
    const { notes, onNoteSelect, octaveNumber } = this.props;
    return (
      <SelectNotesContainer>
        {notes.map((name, i) => (
          <StyledNoteName key={i} onClick={() => { onNoteSelect(name, octaveNumber); }}>
            {name}
          </StyledNoteName>
        ))}
      </SelectNotesContainer>
    );
  }
}

export default BaseNoteSelect;