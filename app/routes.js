import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "NewsList" component = {NewsList} title = "NewsList"  initial = {true}/>
         <Scene key = "detailview" component = {NewsDetail} title = "NewsDetail"  />
      </Scene>
   </Router>
)
export default Routes