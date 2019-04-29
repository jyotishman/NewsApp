import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";
import {connect} from 'react-redux';


class NewsDetail extends Component {
    constructor(){
        super();
    }
    componentDidMount() {
       
    }
    leftComplete() {
        console.log('ccc')
    }
    


    render() {        
        return (
            
                
            this.props && this.props.newsDetail.data.length > 0 ?
                
                <View style={{ padding: 30}}>
                    <Image 
                        style={{ width: '100%', height: 200, marginBottom: 15}} 
                        source={{uri: this.props.newsDetail.detailImg}}>
                    </Image> 
                    <Text>{this.props.newsDetail.detailNews}</Text>
                </View>
            : <View><Text>not</Text></View>
                
            
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        newsDetail: state.NewsReducer
    };
    
  }
  function mapDispatchToProps(dispatch) {
    return {
        
    };
  }

export default  connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
