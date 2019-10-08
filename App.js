import React,{Component} from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screen/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/video/containers/suggestion-list';
import API from './utils/api';

type Props = {};
class App extends Component<Props>{
  state={
    SuggestionList:[

    ]
  }
  async componentDidMount(){
    const animes = await API.getSuggestion(6);
    console.log(animes);
  }
  render(){

    return (
      <Home>
      <Header>
      </Header>
      <Text>buscador</Text>
      <Text>categoría</Text>
      <SuggestionList
        list={this.state.SuggestionList}
      ></SuggestionList>
    </Home>
  );
}
};

export default App;