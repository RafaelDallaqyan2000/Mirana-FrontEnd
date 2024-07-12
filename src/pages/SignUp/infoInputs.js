import store from "../../redux"

export function InfoInputs() {
        return {
                companyName: store.getState().signUp.companyName,
                firstName: store.getState().signUp.firstName,
                lastName: store.getState().signUp.lastName,
                email: store.getState().signUp.email,
                password: store.getState().signUp.password,
                phone: store.getState().signUp.phone,
                birthDate: store.getState().signUp.date,
        }
}