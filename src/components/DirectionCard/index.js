/* eslint-disable */

import React from 'react'
import {DirectionsTitle, LightGreyTitle} from '../../styledComponents'
import DayTimeline from '../DayTimeline'
import './index.css'

const medicineType = {
  TAB: 'tablet',
  INJ: 'injection',
  CAP: 'capsule',
}

function DirectionsCard(props) {
  const {directions, notes, type} = props
  const {
    noOfTimesPerDay,
    withFood,
    noOfUnitsEachTime,
    timeGap,
    initialTime,
    generalTimings,
  } = directions

  return (
    <div className="directions-card-container">
      <LightGreyTitle>DIRECTIONS/NOTES</LightGreyTitle>
      {generalTimings === null && (
        <DirectionsTitle>
          {`${noOfUnitsEachTime} ${
            medicineType[type]
          } by mouth ${noOfTimesPerDay} times a day ${withFood && 'with food'},
                 every ${timeGap} hours`}
        </DirectionsTitle>
      )}
      {generalTimings !== null && (
        <DirectionsTitle>
          {`${noOfUnitsEachTime} ${
            noOfUnitsEachTime > 1
              ? medicineType[type] + 's'
              : medicineType[type]
          } at ${generalTimings.join(', ')}`}
        </DirectionsTitle>
      )}
      <p>{notes}</p>
      <DayTimeline directions={directions} type={type} />
    </div>
  )
}

export default DirectionsCard
