export class User {

  constructor(public name, public email, public phonenumber, public password) { }
}

export class Passenger {

  constructor(public firstName, public lastName, public id,
    public MorMr, public address, public age, public sity) { }

  idReservation:number
}




export class Flight {

  constructor(public numOfFlight: string, public from: string, public fromhour: string, public to: string,
    public tohour: string, public date: string, public price: string, public companyName: string,
    public numplaces: number) {
  }
  id: number
}
