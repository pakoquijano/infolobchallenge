import React, { Component } from 'react';
import styled from 'styled-components';
import Table from './components/Table'
import defaultPic from './images/default-user.png'

//Declaration of styles using styled components for the general presentation of the page
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .navbar {
    background-color: #435343;
    width: 100%;
    height: 3rem;
  }
  h1 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 42px;
    text-align: center;
  }
`
const UserName = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 16px;
  }
`
const Link = styled.a`
  color: #222;
`
/*
  Table component require configuration in the columns, this props will accept an array of objects,
  then for each column you want to display, you push a object in the array, the object should contain
  the key you want to obtain from the data fetched from the server, the title of the head of the column
  and the view it should render in every column, this array is described in the RowConfig variable as shown.
*/
const RowConfig = [
  {
    key: 'name',
    headTitle: 'Full Name',
    renderTdView: (value) => <div>{value}</div>
  },
  {
    key: 'username',
    headTitle: 'User Name',
    renderTdView: (value) => (
      <UserName>
        <img src={defaultPic} alt="profile" />
        <div>{value}</div>
      </UserName>
    ) 
  },
  {
    key: 'address',
    headTitle: 'Address',
    renderTdView: (value) => (
      <div>
        <div>{value.street}</div>
        <div>{value.suite+' '+value.city}</div>
      </div>
    ) 
  },
  {
    key: 'website',
    headTitle: 'Url',
    renderTdView: (value) => <Link href={'http://'+value} target="_blank">{value}</Link>
  },
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tableData: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  //Table component will receive the fetched data, the configuration and the breakpoint width, the component will become responsive 
  render() {
    return (
      <Body >
        <nav className="navbar" />
        <h1>Infolob programming challenge</h1>
        <Table data={this.state.tableData} rowConfig={RowConfig} breakpoint="750px" />
      </Body>
    );
  }
  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      this.setState({ tableData: data })
    })
    .catch((err) => { throw err })
  }
}

export default App;
