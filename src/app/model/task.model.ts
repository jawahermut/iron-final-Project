export class task{
  public get emplpoyeeName(): string {
    return this._emplpoyeeName;
  }
  public set emplpoyeeName(value: string) {
    this._emplpoyeeName = value;
  }
  public get employeeId(): any {
    return this._employeeId;
  }
  public set employeeId(value: any) {
    this._employeeId = value;
  }
 
  public get name(): String {
    return this._name;
  }
  public set name(value: String) {
    this._name = value;
  }
  public get id(): number | null {
    return this._id;
  }
  public set id(value: number | null) {
    this._id = value;
  }


  constructor(

    private _id: number | null,
    private _name: String,
    private _employeeId: any,
    private _emplpoyeeName: string

  ){}




}