import React, { Component } from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { makeSound, NOTES_NAMES as notesNames, makeIntervalSound, getDescription } from '../../api/soundMaker';
import BaseNoteSelect from './components/BaseNoteSelect';
import IntervalesSelect from './components/IntervalesSelect';

const MainContainer = styled.div`
  width: 900px;
  margin: 0 auto;
`;

const Header = styled.div`
  color: black;
  font-size: 25px;
  margin: 40px;
  text-align: left;
`;


const PlayButton = styled.button`
  margin-top: 30px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: green;
  color: black;
  font-size: 22px;
`;

const CountErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: red;
  color: black;
  font-size: 22px;
`;


const CountsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
`;

const DescriptionContainer = styled.div`
  margin-top: 20px;
  text-align: left;
  color: green;
  font-size: 18px;
`;

const CenterContainer = styled.div`
  margin-left: 20px;
  width: 700px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const LeftContainer = styled.div`
display: flex;

// width: 250px;
`;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


class IntervalesPage extends Component {
  state = {
    activeNote: '',
    selectedInterval: null,
    count: 0,
    countError: 0,
    descriptionText: '',
    intervalesVariants: {
      min: 1,
      max: 11,
    }
  }
  onNoteSelect = (noteName) => {
    makeSound(noteName);
    this.setState({ activeNote: noteName });
  }

  onIntervalStart = (isNewNote = false) => {
    if (!isNewNote && this.state.selectedInterval) {
      makeIntervalSound(this.state.activeNote, this.state.selectedInterval);
    } else {

      const interval = getRandomInt(this.state.intervalesVariants.min, this.state.intervalesVariants.max + 1);
      makeIntervalSound(this.state.activeNote, interval);
      this.setState({ selectedInterval: interval });
    }
  }

  intervalConfirmed = () => {
    const description = getDescription(this.state.activeNote, this.state.selectedInterval);
    this.setState({ count: this.state.count + 1, selectedInterval: null, descriptionText: description });
    this.onIntervalStart(true);
  }

  intervalFailed = () => {
    this.setState({ countError: this.state.countError + 1 });
  }

  render() {
    return (
      <MainContainer>
        <Header>
          Выберите опорную ноту
        </Header>
        <BaseNoteSelect notes={notesNames} activeNote={this.state.activeNote} onNoteSelect={this.onNoteSelect} />
        <CenterContainer>
          <InputRange
            maxValue={11}
            minValue={1}
            value={this.state.intervalesVariants}
            onChange={value => this.setState({ intervalesVariants: value, selectedInterval: null, })}
          />
        </CenterContainer>
        <IntervalesSelect validIntervalNumber={this.state.selectedInterval} onIntervalFailed={this.intervalFailed} onIntervalConfirmed={this.intervalConfirmed} />
        <DescriptionContainer>
          {
            this.state.descriptionText
          }
        </DescriptionContainer>

        <CountsContainer>
          <CountContainer>
            {this.state.count}
          </CountContainer>
          <CountErrorContainer>
            {this.state.countError}
          </CountErrorContainer>
        </CountsContainer>
        <LeftContainer>
          <PlayButton onClick={() => { this.onIntervalStart(); }}>Играть</PlayButton>
        </LeftContainer>

      </MainContainer>
    );
  }
}

export default IntervalesPage;