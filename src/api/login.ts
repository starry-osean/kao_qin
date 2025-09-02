import HTTP from "../util/respone";
import {CheckRequest,CheckResponse,CheckInRequest,CheckInResponse,CheckOutRequest,CheckOutResponse} from '../types/check'
export const check =(data:CheckRequest)=> HTTP.post<CheckResponse>('/check',data)
export const checkIn = (data: CheckInRequest) => HTTP.post<CheckInResponse>('/check-in', data);
export const checkOut = (data: CheckOutRequest) => HTTP.post<CheckOutResponse>('/check-out', data);