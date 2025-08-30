export interface  CheckRequest{
    StudentID:string
}
export interface  CheckInRequest{
    StudentID:string
}
export interface  CheckOutRequest{
    StudentID:string;
    Score:Int16Array;
}
export interface CheckResponse{
    StudentID:string;
    Account:string;
    Token:string
}
export interface  CheckInResponse{
    //QrBytes:Uint8Array
      token: string;
      userInfo: {
      StudentID: string;
      Account: string;
    };
    
}
export interface CheckOutResponse{
    Account:string
}