import React from 'react'
import {HelpSymptoms, LightGreyTitle, SideEffect} from '../../styledComponents'
import './index.css'

function SideEffectsCard(props) {
  const {getHelpSymptoms, sideEffects} = props
  return (
    <div className="side-effects-help-container">
      <LightGreyTitle>POSSIBLE SIDE EFFECTS</LightGreyTitle>
      <ul className="side-effects">
        {sideEffects.map(item => (
          <li key={item.sideEffect}>
            <img
              className="side-effect-icon"
              src={item.iconUrl}
              alt={item.sideEffect}
            />
            <SideEffect>{item.sideEffect}</SideEffect>
          </li>
        ))}
      </ul>
      {getHelpSymptoms.length !== 0 && (
        <>
          <hr />
          <LightGreyTitle>GET MEDICAL HELP IF</LightGreyTitle>
          <HelpSymptoms>{`Experiencing ${getHelpSymptoms.join(
            ', ',
          )}`}</HelpSymptoms>
        </>
      )}
    </div>
  )
}

export default SideEffectsCard
