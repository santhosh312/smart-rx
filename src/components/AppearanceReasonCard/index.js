import React from 'react'
import {LightGreyTitle, Reason} from '../../styledComponents'
import './index.css'

function AppearanceReasonCard(props) {
  const {sideAImageUrl, sideBImageUrl, reason, appearanceImageUrl} = props
  return (
    <div className="med-details">
      <div className="appearance-reason">
        {appearanceImageUrl === '' && (
          <div className="appearance">
            <div className="appearance-image">
              <LightGreyTitle>SIDE A</LightGreyTitle>
              <img src={sideAImageUrl} alt="side-a" />
            </div>
            <div className="appearance-image">
              <LightGreyTitle>SIDE B</LightGreyTitle>
              <img src={sideBImageUrl} alt="side-b" />
            </div>
          </div>
        )}
        {appearanceImageUrl !== '' && (
          <div className="appearance-image-true">
            <LightGreyTitle>APPEARANCE</LightGreyTitle>
            <img src={appearanceImageUrl} alt="appearance-img" />
          </div>
        )}

        <hr />
        <div className="reason">
          <LightGreyTitle>REASON FOR MEDICATION</LightGreyTitle>
          <Reason>{reason}</Reason>
        </div>
      </div>
    </div>
  )
}

export default AppearanceReasonCard
