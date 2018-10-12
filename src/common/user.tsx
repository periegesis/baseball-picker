export const enum UserStates {
    Anonymous = "UserState_Anonymous",
    SignedIn = "UserState_SignedIn"
}

export class User {
    public displayName: string;
    public state: UserStates;

    constructor(displayName?: string, state?: UserStates) {
        this.displayName = displayName ? displayName : "Anonymous";
        this.state = state ? state : UserStates.Anonymous
    }
}