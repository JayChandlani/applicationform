export interface PersonalInformation {
    internalUse: boolean;
    show: boolean;
}
export interface Profile {
    mandatory: boolean;
    show: boolean;
}

export interface FormQuestion {
    id?: string;
    type: string;
    question: string;
    choices?: string[];
    maxChoice?: number;
    disqualify?: boolean;
    other?: boolean;
}

export interface FormData {
    id: string;
    type: string;
    attributes: {
        coverImage: string;
        personalInformation: {
            firstName: PersonalInformation;
            lastName: PersonalInformation;
            emailId: PersonalInformation;
            phoneNumber: PersonalInformation;
            nationality: PersonalInformation;
            currentResidence: PersonalInformation;
            idNumber: PersonalInformation;
            dateOfBirth: PersonalInformation;
            gender: PersonalInformation;
            personalQuestions: FormQuestion[];
        };
        profile: {
            education: Profile;
            experience: Profile;
            resume: Profile;
            profileQuestions: FormQuestion[];
        };
        customisedQuestions: FormQuestion[];
    };
}


