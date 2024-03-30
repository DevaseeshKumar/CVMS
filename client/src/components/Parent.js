import React from 'react'

const Parent = () => {
  return (
    <div>
      <h2 style={{color:'green'}}>Parent Information</h2>
      <center>
      <table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Relation</th>
            <th>phone</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Kumar</td>
            <td>39</td>
            <td>Father</td>
            <td>9876543210</td>
        </tr>
 
    </tbody>
</table>
</center>
    </div>
  )
}

export default Parent
