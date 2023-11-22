export class employee{
  public get postalCode(): string {
    return this._postalCode;
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public get state(): string {
    return this._state;
  }
  public set state(value: string) {
    this._state = value;
  }
  public get city(): string {
    return this._city;
  }
  public set city(value: string) {
    this._city = value;
  }
  public get street(): string {
    return this._street;
  }
  public set street(value: string) {
    this._street = value;
  }

  public get address(): any {
    return this._address;
  }
  public set address(value: any) {
    this._address = value;
  }
  
  
  constructor(

  private _employeeId: number | null,
  private _employeeName: string,
  private _employeeNumber: number,
  private _street: string,
  private _city: string,
  private _state: string,
  private _postalCode: string,
  private _address:any,
  private _tasks: any[] 
){}
public get tasks(): any[] {
  return this._tasks;
}
public set tasks(value: any[]) {
  this._tasks = value;
}
public get employeeNumber(): number {
  return this._employeeNumber;
}
public set employeeNumber(value: number) {
  this._employeeNumber = value;
}
public get employeeName(): string {
  return this._employeeName;
}
public set employeeName(value: string) {
  this._employeeName = value;
}
public get employeeId(): number | null {
  return this._employeeId;
}
public set employeeId(value: number | null) {
  this._employeeId = value;
}

public toJSON():object{
  return{
    employeeId: this._employeeId,
    employeeName:this.employeeName,
   employeeNumber:this.employeeNumber,
   city:this.city,

   tasks:this.tasks,
  };
}


}