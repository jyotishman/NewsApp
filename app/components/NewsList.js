import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import fetchNews from '../actions/NewsAction';
import fetchDetailNews from '../actions/NewsDetailAction';



class NewsList extends Component {
    constructor(){
        super();
    }
    componentDidMount() {
        this.props.fetchNews();
    }
    
    goToAbout(details, img) {
        this.props.fetchDetailNews(details, img);
        Actions.detailview();
        
    }
    leftComplete() {
        console.log('ccc')
    }


    render() {
        return (
            <ScrollView style={{ padding: 20}}     onLeftActionComplete={() => leftComplete()}>
            {
            this.props && this.props.news.data.length > 0 ?
                this.props.news.data.map((item, index) =>
                    <View key={index}>
                        <TouchableOpacity onPress = { ()=> this.goToAbout(item.description, item.urlToImage) }>
                            <Text  style={{ marginBottom: 20}}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                ):
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Loading......Please wait</Text></View>
            }
            </ScrollView>
        )
    }
}


function mapStateToProps(state) {
    return {
      news: state.NewsReducer
    };
    
  }
  function mapDispatchToProps(dispatch) {
    return {
        fetchNews: () => dispatch(fetchNews()),
        fetchDetailNews: (details, img) => dispatch(fetchDetailNews(details, img))
    };
  }

export default  connect(mapStateToProps, mapDispatchToProps)(NewsList);
