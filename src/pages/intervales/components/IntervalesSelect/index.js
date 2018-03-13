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
  transition: 0.3s;
  border:  ${({ error }) => error ? '1px solid red' : '1px solid #333333'};
  border-right: 0px;
  background-color: ${({ isActive }) => isActive ? 'green' : 'white'};
  &:last-child{
    border-right: 1px solid #333333;
  }
`;


class IntervalesSelect extends Component {

  state = {
    intervales: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    error: false,
  }

  validateInterval = (interval) => {
    if (interval === this.props.validIntervalNumber) {
      this.props.onIntervalConfirmed();
    } else {
      this.setState({ error: true });
      this.props.onIntervalFailed();
      setTimeout(() => { this.setState({ error: false }); }, 500);
    }
  }

  render() {
    const { onIntervalConfirmed, validIntervalNumber } = this.props;
    return (
      <SelectNotesContainer >
        {
          this.state.intervales.map((interval, i) => (
            <StyledNoteName error={this.state.error} onClick={() => { this.validateInterval(interval); }} key={i} >
              {interval}
            </StyledNoteName>
          ))
        }
      </SelectNotesContainer>
    );
  }
}

export default IntervalesSelect;