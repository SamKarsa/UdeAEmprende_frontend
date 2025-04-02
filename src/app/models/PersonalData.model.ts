import { User } from "./User.model";
import { DocumentType } from "./DocumentType.model";
import { Ethnicity } from "./Ethnicity.model";
import { Occupation } from "./Occupation.model";
import { Vulnerability } from "./Vulnerability.model";


export interface PersonalData {
    personalDataId: number;
    firstName: string;
    lastNames: string;
    identificationNumber: string;
    phoneNumber: string;
    user: User;
    documentType : DocumentType;
    ethnicity: Ethnicity;
    occupation: Occupation;
    vulnerability: Vulnerability;
}

