import React, { Component } from 'react';
import styled from 'styled-components';
import BaseNoteSelect from './components/BaseNoteSelect';
import { makeSound, NOTES_NAMES as notesNames, makeIntervalSound, getDescription } from '../../api/soundMaker';

const MainContainer = styled.div`
  width: 900px;
  margin: 0 auto;
`;

const octaves = [0, 1, 2, 3, 4, 5, 6, 7, 8];


class PureNotes extends Component {
  onNoteSelect = (noteName, octaveNumber) => {
    makeSound(noteName, octaveNumber);
    // this.setState({ activeNote: noteName });
  }
  render() {
    return (
      <MainContainer>
        {
          octaves.map((value, index) => (
            <div>
              <div>{value}</div>
              <BaseNoteSelect key={index} notes={notesNames} octaveNumber={value} onNoteSelect={this.onNoteSelect} />
            </div>
          ))
        }

      </MainContainer>
    );
  }
}

export default PureNotes;