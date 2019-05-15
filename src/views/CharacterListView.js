import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacter } from '../actions';
import Loader from 'react-loader';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <Loader type="Ball-Triangle" color="#00bfff" />
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  fetching: state.fetching,
  characters: state.characters
})

export default connect(
 mapStateToProps, 
 { getCharacter }
)(CharacterListView);
