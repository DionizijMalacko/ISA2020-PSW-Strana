export class DrugCreate {
  name: String;
  code: String;
  quantity: number;

  constructor(name: String, code: String, quantity: number) {
    this.name = name;
    this.code = code;
    this.quantity = quantity;
  }
}
