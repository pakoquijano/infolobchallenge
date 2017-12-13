import React from 'react'
import PropTypes from 'prop-types'

const TableRow = ({ FullName, UserName, Address, Url }) => (
  <tr>
    <th>{FullName}</th>
    <th>{UserName}</th>
    <th>{Address}</th>
    <th>{Url}</th>
  </tr>
)

TableRow.propTypes = {
  FullName: PropTypes.string.isRequired,
  UserName: PropTypes.string.isRequired,
  Address: PropTypes.string.isRequired,
  Url: PropTypes.string.isRequired,
}

export default TableRow
