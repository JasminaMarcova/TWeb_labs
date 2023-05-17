import {makeObservable, observable} from "mobx";
import {IUser, userDatabase} from "../data/User";

class UserStore {
    data: IUser[] | undefined;
    session: IUser | undefined;

    constructor() {
        makeObservable(this, {
            data: observable
        });
        // @ts-ignore
        this.data = JSON.parse(localStorage.getItem("users"))
        if (!this.data) {
            this.data = userDatabase;
            localStorage.setItem("users", JSON.stringify([...this.data]))
        }
        // @ts-ignore
        this.session = JSON.parse(localStorage.getItem("sessionUser"))
    }

    loginUser(user: IUser): IUser | undefined {
        this.session = this.data?.find(dbUser => dbUser.login === user.login && dbUser.password === user.password)
        localStorage.setItem("sessionUser", JSON.stringify(this.session))
        return this.session
    }

    getSessionUserFullname(): string {
        if (!this.session) {
            return "Unknown User"
        }
        return "" + this.session.firstname + " " + this.session.lastname
    }

    clearSession(): void {
        this.session = undefined
        localStorage.removeItem("sessionUser")
    }
}

export default new UserStore();