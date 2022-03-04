import React from 'react'
import {medications} from '../../medicationDetails'

import './index.css'

function Header(props) {
  const {patientDetails, dateOfIssue, noOfMedications} = props
  const {name, dateOfBirth} = patientDetails

  return (
    <>
      <div className="header-container">
        <p className="medications-text">MEDICATIONS</p>
        <div className="header-details">
          <div className="left-side">
            <img
              className="capsule-icon"
              src="https://res.cloudinary.com/dyfejmsph/image/upload/v1646298677/niroggyan/capsule-icon_omyfzn.svg"
              alt="capsule-icon"
            />
            <h1>Active Medications ({noOfMedications})</h1>
          </div>
          <div className="right-side">
            <div className="info">
              <p className="info-title">PATIENT NAME</p>
              <p className="info-answer">{name}</p>
            </div>
            <div className="info">
              <p className="info-title">DATE OF BIRTH</p>
              <p className="info-answer">{dateOfBirth}</p>
            </div>
            <div className="info">
              <p className="info-title">DATE OF ISSUE</p>
              <p className="info-answer">{dateOfIssue}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
