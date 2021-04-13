export class DrugCreateFull {
  name: string;
  code: string;
  quantity: number;
  pharmacyId: number;

  constructor(name: string, code: string, quantity: number, pharmacyId: number) {
    this.name = name;
    this.code = code;
    this.quantity = quantity;
    this.pharmacyId = pharmacyId;
  }
}
