import React, { Component } from 'react';
import styled from 'styled-components';
import { makeSound, NOTES_NAMES as notesNames, makeIntervalSound, getDescription } from '../../api/soundMaker';
import BaseNoteSelect from './components/BaseNoteSelect';
import IntervalesSelect from './components/IntervalesSelect';

const Header = styled.div`
  color: black;
  font-size: 25px;
  margin: 40px;
  text-align: left;
`;


const PlayButton = styled.button`
  cursor: pointer;
  outline: none;
  border-radius: 50px;
  width: 250px;
  height: 70px;
  background-color: #005da9;
  font-size: 25px;
  color: white;
  border: 0px;
`;

const CountContainer = styled.div`
  color: black;
  font-size: 22px;
`;

const DescriptionContainer = styled.div`
  margin-top: 20px;
  text-align: left;
  color: green;
  font-size: 18px;
`;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


class IntervalesPage extends Component {
  state = {
    activeNote: '',
    selectedInterval: null,
    count: 0,
    descriptionText: '',
  }
  onNoteSelect = (noteName) => {
    makeSound(noteName);
    this.setState({ activeNote: noteName });
  }

  onIntervalStart = (isNewNote = false) => {
    if (!isNewNote && this.state.selectedInterval) {
      makeIntervalSound(this.state.activeNote, this.state.selectedInterval);
    } else {
      const interval = getRandomInt(1, 12);
      makeIntervalSound(this.state.activeNote, interval);
      this.setState({ selectedInterval: interval });
    }
  }

  intervalConfirmed = () => {
    const description = getDescription(this.state.activeNote, this.state.selectedInterval);
    this.setState({ count: this.state.count + 1, selectedInterval: null, descriptionText: description });
    this.onIntervalStart(true);
  }

  render() {
    return (
      <div>
        <Header>
          Выберите опорную ноту
        </Header>
        <BaseNoteSelect notes={notesNames} activeNote={this.state.activeNote} onNoteSelect={this.onNoteSelect} />
        <CountContainer>
          {this.state.count}
        </CountContainer>
        <PlayButton onClick={() => { this.onIntervalStart(); }}>Играть</PlayButton>
        <IntervalesSelect validIntervalNumber={this.state.selectedInterval} onIntervalConfirmed={this.intervalConfirmed} />
        <DescriptionContainer>
          {
            this.state.descriptionText
          }
        </DescriptionContainer>
      </div>
    );
  }
}

export default IntervalesPage;