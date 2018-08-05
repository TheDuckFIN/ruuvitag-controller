import React from 'react'
import LastUpdatedTimer from './LastUpdatedTImer'

const Tag = ({id, tagData}) => {
  const { temperature, humidity, pressure, updated } = tagData

  return (
    <section className='tag-container'>
      <h2>
        Tag {id.substring(0, 10)}
        <LastUpdatedTimer updated={updated} key={updated} />
      </h2>
      <table>
        <tbody>
          <tr>
            <td>Temperature</td>
            <td>{temperature}℃</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{humidity}%</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{pressure} hPa</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Tag
