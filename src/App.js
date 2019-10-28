import React from 'react';
import {connect} from 'react-redux';
import {setListItems} from './actions/listActions';
import sourceData from './data/sourceData';
import ListItems from './components/ListItems';
import ListCart from './components/ListCart';
import Header from './components/Header';

class App extends React.Component {

  componentDidMount(){
    const data = sourceData.filter(item => item.isPublished === "true")
    this.props.setListItems(data)
  
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className = "box-layout">
          <ListItems />
          <ListCart />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch,props) => ({
  setListItems: (items) => dispatch(setListItems(items))
})

export default connect(null,mapDispatchToProps)(App);
