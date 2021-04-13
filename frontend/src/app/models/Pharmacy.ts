export class Pharmacy {
  id: number;
  name: String;
  address: String;

  constructor(name: String, address: String, $id?: number) {
    this.id = $id;
    this.name = name;
    this.address = address;
  }
}
