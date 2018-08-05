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
            <td className='label'>Temperature</td>
            <td className='value'>{temperature}℃</td>
          </tr>
          <tr>
            <td className='label'>Humidity</td>
            <td className='value'>{humidity}%</td>
          </tr>
          <tr>
            <td className='label'>Pressure</td>
            <td className='value'>{pressure} hPa</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Tag
