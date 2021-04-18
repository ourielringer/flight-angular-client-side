export class User {
  constructor(
    public name,
    public email,
    public phonenumber,
    public password) { }
}

export class Passenger {
  public idReservation: number
  constructor(
    public firstName: string,
    public lastName: string,
    public ID: number,
    public MorMr: string,
    public address: string,
    public age: string,
    public sity: string) { }
}

export class Reservation {
  public id: number
  constructor(
    public numReservation: string,
    public idOrdering: number,
    public idFlightGo: number,
    public idFlightBack: number) { }
}


export class Flight {
  public id: number
  constructor(
    public numOfFlight: string,
    public from: string,
    public fromhour: string,
    public to: string,
    public tohour: string,
    public date: string,
    public price: string,
    public companyName: string,
    public numplaces: number) { }
}
