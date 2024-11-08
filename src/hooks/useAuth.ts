import { useTypedSelector } from "./redux"

export function useAuth() {
    const {id, email} = useTypedSelector((state) => state.user)

    return {
        isAuth: id && !!email,
        id,
        email
    }
}