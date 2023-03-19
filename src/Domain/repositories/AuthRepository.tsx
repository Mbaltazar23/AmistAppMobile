import { ResponseAPIAmistApp } from "../../Data/sources/remote/models/ResponseApiAmistApp";

export interface AuthRepository{

    resetPasswordEmail(email: string) : Promise<ResponseAPIAmistApp>
}