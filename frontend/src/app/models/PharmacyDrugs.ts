export class PharmacyDrugs {
  pharmacyName: String;
  drugName: String;
  drugCode: String;
  quantity: number;

  constructor(pharmacyName: String, drugName: String, drugCode: String, quantity: number) {
    this.pharmacyName = pharmacyName;
    this.drugName = drugName;
    this.drugCode = drugCode;
    this.quantity = quantity;
  }
}
