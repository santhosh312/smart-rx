import {medications} from './medicationDetails'
import Header from './components/Header'
import MedicationCard from './components/MedicationCard'

import './App.css'

function App() {
  const {patientDetails, dateOfIssue, activeMedications} = medications

  return (
    <div className="app-container">
      <Header
        patientDetails={patientDetails}
        noOfMedications={activeMedications.length}
        dateOfIssue={dateOfIssue}
      />
      {activeMedications.map(item => (
        <MedicationCard
          details={item}
          key={item.medicineDetails.medicineName}
        />
      ))}
    </div>
  )
}

export default App
