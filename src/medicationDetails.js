/* eslint-disable */

export const medications = {
  patientDetails: {
    name: 'Joyneel Acharya',
    dateOfBirth: '16 May 1991',
  },
  dateOfIssue: '30 Nov 2020',
  activeMedications: [
    {
      medicineDetails: {
        medicineName: 'IBUPROFEN',
        dose: '600 mg',
        type: 'TAB',
        reason: 'For treatement of lower back pain',
        sideAImageUrl:
          'https://res.cloudinary.com/dyfejmsph/image/upload/v1646316487/niroggyan/ibuprofen-a_czyw7a.svg',
        sideBImageUrl:
          'https://res.cloudinary.com/dyfejmsph/image/upload/v1646316490/niroggyan/ibuprofen-b_wudmzb.svg',
        appearanceImageUrl: '',
      },
      directions: {
        noOfTimesPerDay: 4,
        withFood: true,
        noOfUnitsEachTime: 1,
        timeGap: 4,
        initialTime: 800,
        customTimings: ['8:00AM', '12:00PM', '4:00PM', '8:00PM'],
        generalTimings: null,
      },
      notes: '',
      sideEffects: [
        {
          sideEffect: 'Headache',
          iconUrl:
            'https://res.cloudinary.com/dyfejmsph/image/upload/v1646339332/niroggyan/headache_zzcswj.svg',
        },
        {
          sideEffect: 'Dizziness',
          iconUrl:
            'https://res.cloudinary.com/dyfejmsph/image/upload/v1646339528/niroggyan/dizzy_iak3ge.svg',
        },
      ],
      getHelpSymptoms: [
        'chest pain',
        'shortness of breath',
        'rapid weight gain',
      ],
    },
    {
      medicineDetails: {
        medicineName: 'INSULIN, GLARGINE, HUMAN',
        dose: '100 unt/ml',
        type: 'INJ',
        reason: 'Reduce blood pressure',
        appearanceImageUrl:
          'https://res.cloudinary.com/dyfejmsph/image/upload/v1646316497/niroggyan/syringe-horizontal_lnvdih.svg',
      },
      directions: {
        noOfTimesPerDay: 1,
        withFood: false,
        noOfUnitsEachTime: 1,
        timeGap: null,
        initialTime: null,
        customTimings: null,
        generalTimings: ['Bedtime'],
      },
      notes:
        'Inject 10 ml vial under skin as directed for 28 days inject 25 units under the skin at bedtime do not mix with other insulins/discard open vials after 28 days',
      sideEffects: [
        {
          sideEffect: 'Headache',
          iconUrl:
            'https://res.cloudinary.com/dyfejmsph/image/upload/v1646339332/niroggyan/headache_zzcswj.svg',
        },
        {
          sideEffect: 'Fatigue',
          iconUrl:
            'https://res.cloudinary.com/dyfejmsph/image/upload/v1646339330/niroggyan/fatigue_mti9jj.svg',
        },
        {
          sideEffect: 'Nausea',
          iconUrl:
            'https://res.cloudinary.com/dyfejmsph/image/upload/v1646339328/niroggyan/nausea_b475xl.svg',
        },
      ],
      getHelpSymptoms: ['itching skin', 'wheezing', 'fast heart rate'],
    },
    {
      medicineDetails: {
        medicineName: 'TERAZOSIN HCL',
        dose: '2 mg',
        type: 'CAP',
        reason: 'For treatment of symptoms of an enlarged prostate',
        sideAImageUrl:
          'https://res.cloudinary.com/dyfejmsph/image/upload/v1646316473/niroggyan/capsule-a_c2tgqq.svg',
        sideBImageUrl:
          'https://res.cloudinary.com/dyfejmsph/image/upload/v1646316481/niroggyan/capsule-b_nnwlur.svg',
        appearanceImageUrl: '',
      },
      directions: {
        noOfTimesPerDay: 1,
        withFood: false,
        noOfUnitsEachTime: 3,
        timeGap: null,
        initialTime: null,
        customTimings: null,
        generalTimings: ['Bedtime'],
      },
      notes: '',
      sideEffects: [
        {
          sideEffect: 'Dizziness',
          iconUrl:
            'https://res.cloudinary.com/dyfejmsph/image/upload/v1646339528/niroggyan/dizzy_iak3ge.svg',
        },
        {
          sideEffect: 'Headache',
          iconUrl:
            'https://res.cloudinary.com/dyfejmsph/image/upload/v1646339332/niroggyan/headache_zzcswj.svg',
        },
        {
          sideEffect: 'Constipation',
          iconUrl:
            'https://res.cloudinary.com/dyfejmsph/image/upload/v1646339302/niroggyan/constipation_iqbbey.svg',
        },
        {
          sideEffect: 'Loss of appetite',
          iconUrl:
            'https://res.cloudinary.com/dyfejmsph/image/upload/v1646339298/niroggyan/apetite_lq8jyv.svg',
        },
        {
          sideEffect: 'Fatigue',
          iconUrl:
            'https://res.cloudinary.com/dyfejmsph/image/upload/v1646339330/niroggyan/fatigue_mti9jj.svg',
        },
      ],
      getHelpSymptoms: [],
    },
  ],
}
