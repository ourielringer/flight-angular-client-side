export class User {

  constructor(public name, public email, public phonenumber, public password) {}
  
  
}



export class Flight {

  constructor(public numOfFlight: string, public from: string, public fromhour: string, public to: string,
    public tohour: string, public date: string, public price: string, public companyName: string,
    public numplaces: string) {
  }

  public numFreeplaces: string = this.numplaces
}
