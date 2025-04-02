import { UserType } from "./UserType.model";

export interface Role {
    rolesId: number;
    createdAt?: string; //No se utiliza
    updatedAt?: string; //No se utiliza
    userType: UserType;
}

//Another way to get only user Type Id
// userType: {
    //userTypeId: number;
    // We deliberately omit userTypeName
//};