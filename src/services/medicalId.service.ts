import { MedicalId } from "../models/medicalId";

export class MedicalIdService {
    private medicalInfo: MedicalId[] = [];

  addMedicalInfo(medicalConditions: string,
                 bloodType: string,
                 allergies: string,
                 medications: string) {
    this.medicalInfo.push(new MedicalId(medicalConditions, bloodType, allergies, medications));
    console.log(this.medicalInfo);
  }

  getMedicalInfos() {
    return this.medicalInfo.slice();
  }

  updateMedicalInfo(index: number,
                medicalConditions: string,
                bloodType: string,
                allergies: string,
                medications: string) {
    this.medicalInfo[index] = new MedicalId(medicalConditions, bloodType, allergies, medications);
  }

  removeMedicalInfo(index: number) {
    this.medicalInfo.splice(index, 1);
  }
}
