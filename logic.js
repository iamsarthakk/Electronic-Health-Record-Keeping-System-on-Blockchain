/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Transaction for recording appointment between doctor and patient.
 * @param {org.ehr.basic.Appointment} atx The sample transaction instance.
 * @transaction
 */
async function appointment(atx) {

  	atx.visitor.debt = atx.visitor.debt - atx.pPaper.consultanceFee
  	
  	atx.visitor.prescriptions.push(atx.pPaper)

    // Get the participant registry for the asset.
    const presRegistry = await getParticipantRegistry('org.ehr.basic.Patient');
    // Update the asset in the participant registry.
    await presRegistry.update(atx.visitor);
}

/**
 * Transaction for recording whether patient took medicine from drugstore.
 * @param {org.ehr.basic.Drugstore} dtx The sample transaction instance.
 * @transaction
 */
async function drugstore(dtx) {

  while(!dtx.visitor.prescriptions) {
    if (dtx.visitor.prescriptions.medicinesBought == FALSE) {
      if (dtx.visitor.prescriptions.prescribed == 'ASETAMINOPHIN') {
        if (dtx.retailer.listOfMedicine[1].quantity > 0) {
          dtx.visitor.debt = dtx.visitor.debt - dtx.retailer.listOfMedicine[1].cost
        }
      }
      if (dtx.visitor.prescriptions.prescribed == 'ASPIRIN') {
        if (dtx.retailer.listOfMedicine[2].quantity > 0) {
          dtx.visitor.debt = dtx.visitor.debt - dtx.retailer.listOfMedicine[2].cost
        }
      }
      if (dtx.visitor.prescriptions.prescribed == 'PARACETAMOL') {
        if (dtx.retailer.listOfMedicine[3].quantity > 0) {
          dtx.visitor.debt = dtx.visitor.debt - dtx.retailer.listOfMedicine[3].cost
        }
      }
      if (dtx.visitor.prescriptions.prescribed == 'AMLODIPINE') {
        if (dtx.retailer.listOfMedicine[4].quantity > 0) {
          dtx.visitor.debt = dtx.visitor.debt - dtx.retailer.listOfMedicine[4].cost
        }
      }
      if (dtx.visitor.prescriptions.prescribed == 'FLUOXETIN') {
        if (dtx.retailer.listOfMedicine[5].quantity > 0) {
          dtx.visitor.debt = dtx.visitor.debt - dtx.retailer.listOfMedicine[5].cost
        }
      }
      if (dtx.visitor.prescriptions.prescribed == 'ALPRAZOLAM') {
        if (dtx.retailer.listOfMedicine[6].quantity > 0) {
          dtx.visitor.debt = dtx.visitor.debt - dtx.retailer.listOfMedicine[6].cost
        }
      }
    }
  }
}
