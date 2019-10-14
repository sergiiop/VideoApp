import React,{Component} from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screen/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/video/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/video/containers/category-list';


type Props = {};
class App extends Component<Props>{
  state={
    suggestionList: [],
    categoryList: [],
  }
  async componentDidMount(){
    const movies = await API.getSuggestion(6);
    const categories = await API.getMovies();
    console.log(movies);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    })
  }
  render(){
    return (
      <Home>
      <Header>
      </Header>
      <Text>buscador</Text>
      <Text>categoría</Text>
      <CategoryList
        list={this.state.categoryList}
      />
      <SuggestionList
        list={this.state.suggestionList}
      />
    </Home>
  );
}
};

export default App;