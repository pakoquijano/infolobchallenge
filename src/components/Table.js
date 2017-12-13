import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Table extends Component {
  render () {
    return (
      <table>
        {
          this.props.data + this.props.rowConfig
        }
      </table>
    )
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Table
