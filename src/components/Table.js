import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const StyledTable = styled.div` 
  table {
    margin: 1em 0;
    min-width: 300px; 
    border: 1px solid #ddd;
    
    tr {
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }
    
    th {
    display: none   
    }
    
    td {
      display: flex; 
      
      &:first-child {
        padding-top: .5em;
      }
      &:last-child {
        padding-bottom: .5em;
      }

      &:before {
        content: attr(data-th)": "; 
        font-weight: bold;
        width: 6.5em; 
        display: inline-block;
        @media (min-width: ${props => props.breakpoint}) {
          display: none;
        }
      }
    }

    th, td {
      text-align: left;
      
      @media (min-width: ${props => props.breakpoint}) {
        display: table-cell;
        padding: .25em .5em;
        
        &:first-child {
          padding-left: 0;
        }
        
        &:last-child {
          padding-right: 0;
        }
      }
    }
  }

  table {
    background: #fff;
    color: #000;
    border-collapse: collapse;
    tr {
     
    }
    th {
      background: #eee;
    }
    th, td {
      margin: .5em 1em;

      @media (min-width: ${props => props.breakpoint}) { 
        padding: 1em !important; 
        border-top: 0px solid white !important;
        border-bottom: 0px solid white !important;
      }
    }
    th, td:before {
      color: #000;
    }
  }
` 
class Table extends Component {
  render () {
    return (
      <StyledTable breakpoint={this.props.breakpoint}>
        <table>
          <thead>
            <tr>
              {
                this.props.rowConfig.map((config) => {
                  return <th key={config.key}>{config.headTitle}</th> 
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map((item) => {
                return (
                  <tr key={item.id}>
                    { 
                      this.props.rowConfig.map((config,index) => {
                        return <td key={index} data-th={config.headTitle}>{config.renderTdView(item[config.key])}</td>
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </StyledTable>
    )
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  breakpoint: PropTypes.string,
  rowConfig: PropTypes.arrayOf(PropTypes.shape({
    headTitle: PropTypes.string,
    key: PropTypes.string,
    renderTdView: PropTypes.func,
  })).isRequired,
}

Table.defaultProps = {
  breakpoint: '480px',
  data: [],
  rowConfig: [],
}
export default Table
