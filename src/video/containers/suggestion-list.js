import React, {Component} from 'react';
import{
    FlatList,
    Text
}from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component{
    renderEmpty = () => <Empty text="No hay Sugerencias" />
    itemSeparator = () => <Separator />
    renderItem =({item}) => {
        return (
        <Suggestion {...item} />
        )
    } 
    render(){
        return (
            <Layout title='Recomendado para ti'>
            <FlatList data={this.props.list}
             ListEmptyComponent={this.renderEmpty}
             ItemSeparatorComponent={this.itemSeparator}
             renderItem={this.renderItem}>
            </FlatList>
            </Layout>
        )
    }
}

export default SuggestionList