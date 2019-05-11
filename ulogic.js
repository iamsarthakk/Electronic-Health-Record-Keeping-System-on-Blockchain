/**
 * Transaction for recording appointment between doctor and patient.
 * @param {org.ehr.basic.confirmAppoint} atx The sample transaction instance.
 * @transaction
 */
/** async function confirmAppoint(atx) {
  // if ( atx.appoint.patient.id != atx.patient.id ){
  //   throw new Error("Visitor is not same as the patient in the appoint.!")
  // }
  if (atx.appoint.status === 'CONFIRMED'){
    throw new Error('Appointment already confirmed!')
  }
  if (atx.appoint.status === 'REJECTED'){
    throw new Error('Appointment already rejected!')
  }
  if ( atx.visitor.id != atx.visitor.prescriptions.visitor.id){
    throw new Error("Visitor is not same as the patient in the prescr.!")
  }
  if ( atx.doctor.speciality != atx.appoint.group){
    throw new Error('Doctor is not specialized into the required disease category ')
  }
  //Assuming all is ok
  getAssetRegistry('org.ehr.basic.Appointment').then(function(data){
    atx.appoint.status = 'CONFIRMED' //match with the enum val ??????
    atx.appoint.assigned = atx.doctor
    return await data.update(atx.appoint)
    //////// also emit some event!!!!!!!!!!!!!!!
  }).catch(function(e){
    throw new Error(e)
  })
}
*/

/**
 * Transaction for recording appointment between doctor and patient.
 * @param {org.ehr.basic.confirmAppoint} atx The sample transaction instance.
 * @transaction
 */
/** async function confirmAppoint(atx) {
  // if ( atx.appoint.patient.id != atx.patient.id ){
  //   throw new Error("Visitor is not same as the patient in the appoint.!")
  // }
  if (atx.appoint.status === 'CONFIRMED'){
    throw new Error('Appointment already confirmed!')
  }
  if (atx.appoint.status === 'CONSULTED'){
    throw new Error('Appointment already consulted!')
  }
  if (atx.appoint.status === 'REJECTED'){
    throw new Error('Appointment already rejected!')
  }
  if ( atx.visitor.id != atx.visitor.prescriptions.visitor.id){
    throw new Error("Visitor is not same as the patient in the prescr.!")
  }
  if ( atx.doctor.speciality != atx.appoint.group){
    throw new Error('Doctor is not specialized into the required disease category ')
  }
  //Assuming all is ok
  getAssetRegistry('org.ehr.basic.Appointment').then(function(data){
    atx.appoint.status = 'CONFIRMED' //match with the enum val ??????
    atx.appoint.assigned = atx.doctor
    return await data.update(atx.appoint)
    //////// also emit some event!!!!!!!!!!!!!!!
  }).catch(function(e){
    throw new Error(e)
  })
}
*/

/**
 * Transaction for recording appointment between doctor and patient.
 * @param {org.ehr.basic.consult} atx The sample transaction instance.
 * @transaction
 */
/** async function consult(atx){
  if(atx.presc.isMedPrescribed && atx.presc.isTestPrescribed ){
    throw new Error('Prescription can not be both test and medicine')
  }
  if(!(atx.presc.isMedPrescribed || atx.presc.isTestPrescribed )){
    throw new Error('Prescription should prescibe either test or medicine')
  }
  if (atx.appoint.status === 'PENDING'){
    throw new Error('Appointment yet to be  confirmed!')
  }
  if (atx.appoint.appointmentId != atx.presc.appoint.appointmentId){
    throw new Error('Prescription not matching with the appointment!')
  }
  if (atx.appoint.status === 'CONSULTED'){
    throw new Error('Appointment already consulted!')
  }
  if (atx.appoint.status === 'REJECTED'){
    throw new Error('Appointment already rejected!')
  }
  if(atx.patient.id != atx.appoint.patient.id){
    throw new Error('Patient Proxy not allowed!')
  }
  if ( atx.presc.appoint.doctor.id != atx.doctor.id){
    throw new Error('You are not the designated doctor')
  }
  
  // some checks are missing
  getAssetRegistry('org.ehr.basic.Appointment').then(function(assets){
    atx.appoint.status = 'CONSULTED'
    return await assets.update(atx.appoint)
  }).catch(function(error){
    throw new Error(error)
  }).then(function(data){
    getAssetRegistry('org.ehr.basic.Prescription').then(function(assets){
      atx.presc.appoint = atx.appoint
      return await assets.update(atx.presc)
      // deducted the consultanceFee here
    }).catch(function(error){
      throw new Error(error)
    })
  }).catch(function(error){
    throw new Error(error)
  })
}
*/
/**
 * Transaction for recording appointment between doctor and patient.
 * @param {org.ehr.basic.confirmAppoint} atx The sample transaction instance.
 * @transaction
 */
 async function confirmAppoint(atx) {
  // if ( atx.appoint.patient.id != atx.patient.id ){
  //   throw new Error("Visitor is not same as the patient in the appoint.!")
  // }
  if (atx.appoint.status === 'CONFIRMED'){
    throw new Error('Appointment already confirmed!')
  }
  if (atx.appoint.status === 'CONSULTED'){
    throw new Error('Appointment already consulted!')
  }
  if (atx.appoint.status === 'REJECTED'){
    throw new Error('Appointment already rejected!')
  }
  if ( atx.visitor.id != atx.visitor.prescriptions.visitor.id){
    throw new Error("Visitor is not same as the patient in the prescr.!")
  }
  if ( atx.doctor.speciality != atx.appoint.group){
    throw new Error('Doctor is not specialized into the required disease category ')
  }
  //Assuming all is ok
  getAssetRegistry('org.ehr.basic.Appointment').then(function(data){
    atx.appoint.status = 'CONFIRMED' //match with the enum val ??????
    atx.appoint.assigned = atx.doctor
    return await data.update(atx.appoint)
    //////// also emit some event!!!!!!!!!!!!!!!
  }).catch(function(e){
    throw new Error(e)
  })
}

/**
 * Transaction for recording appointment between doctor and patient.
 * @param {org.ehr.basic.consult} atx The sample transaction instance.
 * @transaction
 */
async function consult(atx){
  if(atx.presc.isMedPrescribed && atx.presc.isTestPrescribed ){
    throw new Error('Prescription can not be both test and medicine')
  }
  if(!(atx.presc.isMedPrescribed || atx.presc.isTestPrescribed )){
    throw new Error('Prescription should prescibe either test or medicine')
  }
  if (atx.appoint.status === 'PENDING'){
    throw new Error('Appointment yet to be  confirmed!')
  }
  if (atx.appoint.appointmentId != atx.presc.appoint.appointmentId){
    throw new Error('Prescription not matching with the appointment!')
  }
  if (atx.appoint.status === 'CONSULTED'){
    throw new Error('Appointment already consulted!')
  }
  if (atx.appoint.status === 'REJECTED'){
    throw new Error('Appointment already rejected!')
  }
  if(atx.patient.id != atx.appoint.patient.id){
    throw new Error('Patient Proxy not allowed!')
  }
  if ( atx.presc.appoint.doctor.id != atx.doctor.id){
    throw new Error('You are not the designated doctor')
  }

  // some checks are missing
  getAssetRegistry('org.ehr.basic.Appointment').then(function(assets){
    atx.appoint.status = 'CONSULTED'
    return await assets.update(atx.appoint)
  }).catch(function(error){
    throw new Error(error)
  }).then(function(data){
    getAssetRegistry('org.ehr.basic.Prescription').then(function(assets){
      atx.presc.appoint = atx.appoint
      return await assets.update(atx.presc)
      // deducted the consultanceFee here
    }).catch(function(error){
      throw new Error(error)
    })
  }).catch(function(error){
    throw new Error(error)
  })


}

/**
 * Transaction for buying test from pathalogy lab.
 * @param {org.ehr.basic.byTest} atx The sample transaction instance.
 * @transaction
 */
 async function buyTest(atx) {
   if(atx.presc.isMedPrescribed && atx.presc.isTestPrescribed ){
     throw new Error('Prescription can not be both test and medicine')
   }
   if(!(atx.presc.isMedPrescribed || atx.presc.isTestPrescribed )){
     throw new Error('Prescription should prescibe either test or medicine')
   }
   if(atx.presc.isMedPrescribed){
     throw new Error('Prescription should prescibe test only')
   }
   if(atx.patient.id != atx.presc.patient.id){
     throw new Error('This prescription is intended to someone else')
   }
   if(atx.patient.id != atx.presc.appoint.insuranceId.patient.id){
     throw new Error('Insurance Id is not matching with the patient')
   }

   let cost = 0.0
   for(let i in atx.presc.test){
     let index =  atx.pathlab.test.indexOf(i)
     if(index < 0){
       throw new Error('Not Allowed')
     }
     cost += cost[index]
   }
   if(atx.presc.appoint.isInsured )
   {
     if(cost <= atx.presc.appoint.insuranceId.ensuredAmount){

            atx.presc.appoint.insuranceId.ensuredAmount -= cost
            getAssetRegistry('org.ehr.basic.Insurance').then(
               (data) =>  {

              return await data.update(atx.presc.appoint.insuranceId)
            }
          ).catch(
            (err) => {
              throw new Error(err)
            }
          )
       }
     else {
       throw new Error("Insurance doesn't exist")
     }
   }
   else{
     atx.patient.debt -= cost
     getParticipantRegistry('org.ehr.basic.Patient').then(
        (data) =>  {
          return await data.update(atx.patient)
     }
   ).catch(
     (err) => {
       throw new Error(err)
     }
   )
   }

 }
