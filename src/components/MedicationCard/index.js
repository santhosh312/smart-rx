/* eslint-disable */

import React from 'react'
import {MedicineTitle, LightGreyTitle, Reason} from '../../styledComponents'
import AppearanceReasonCard from '../AppearanceReasonCard'
import DirectionsCard from '../DirectionCard'
import SideEffectsCard from '../SideEffectsCard'
import './index.css'

function MedicationCard(props) {
  const {
    medicineDetails,
    sideEffects,
    getHelpSymptoms,
    directions,
    notes,
  } = props.details
  const {
    medicineName,
    reason,
    dose,
    type,
    appearanceImageUrl,
    sideAImageUrl,
    sideBImageUrl,
  } = medicineDetails

  return (
    <>
      <MedicineTitle className="med-name">
        {medicineName + ' ' + dose + ' ' + type}
      </MedicineTitle>
      <div className="med-card-container">
        <div className="all-cards-container">
          <AppearanceReasonCard
            reason={reason}
            appearanceImageUrl={appearanceImageUrl}
            sideAImageUrl={sideAImageUrl}
            sideBImageUrl={sideBImageUrl}
          />
          <DirectionsCard type={type} directions={directions} notes={notes} />
          <SideEffectsCard
            getHelpSymptoms={getHelpSymptoms}
            sideEffects={sideEffects}
          />
        </div>
      </div>
    </>
  )
}

export default MedicationCard
