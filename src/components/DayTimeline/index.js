/* eslint-disable */

import React from 'react'
import './index.css'

const medIcons = {
  TAB:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MFWEpqHkxL2y6IzwxGwVijhtnFvxRZcHlk9_WARYp2s1pB6quSngBCea93WJrkVsILM&usqp=CAU',
  INJ: 'https://cdn-icons-png.flaticon.com/512/483/483471.png',
  CAP: 'https://cdn-icons-png.flaticon.com/512/1732/1732445.png',
}

function DayTimeline(props) {
  const {directions, type} = props
  const {
    generalTimings,
    initialTime,
    noOfTimesPerDay,
    noOfUnitsEachTime,
    timeGap,
    withFood,
    customTimings,
  } = directions

  console.log(customTimings)

  const renderTimelineBarGeneralTimings = item => {
    const noOfUnitsArray = []
    for (let i = 1; i <= noOfUnitsEachTime; i++) {
      noOfUnitsArray.push(i)
    }
    return (
      <div key={item} className="timeline-chunk">
        {generalTimings.includes(item) && (
          <>
            <div className="med-icons">
              {noOfUnitsArray.map(item => (
                <img key={item} src={medIcons[type]} alt="med-icon" />
              ))}
            </div>
            <div className="vertical-line"></div>
          </>
        )}
        <div className="timeline-bar">
          {generalTimings.includes(item) && `${item}`}
        </div>
      </div>
    )
  }

  const renderTimelineBarCustomTimings = item => {
    const noOfUnitsArray = []
    for (let i = 1; i <= noOfUnitsEachTime; i++) {
      noOfUnitsArray.push(i)
    }
    return (
      <div key={item} className="timeline-chunk">
        <div className="med-icons">
          {noOfUnitsArray.map(item => (
            <img key={item} src={medIcons[type]} alt="med-icon" />
          ))}
        </div>
        <div className="vertical-line"></div>
        <div className="timeline-bar">{item}</div>
      </div>
    )
  }

  return (
    <div className="timeline-container">
      <div className="sun-icon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/66/66275.png"
          alt="sun"
        />
      </div>
      {generalTimings !== null &&
        ['Morning', 'Afternoon', 'Evening', 'Bedtime'].map(item =>
          renderTimelineBarGeneralTimings(item),
        )}
      {customTimings !== null &&
        customTimings.map(item => renderTimelineBarCustomTimings(item))}
      <div className="sun-icon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/702/702471.png"
          alt="moon"
        />
      </div>
    </div>
  )
}

export default DayTimeline
