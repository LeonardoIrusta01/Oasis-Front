import { useGetUserbyEmailQuery } from '@/redux/services/user/usersApi'
import { useAuth0 } from '@auth0/auth0-react'

export const useUserRole = () => {
    const { isAuthenticated, user } = useAuth0()
    const { data } = useGetUserbyEmailQuery(user?.email)
    const role = {
        isAdmin: false,
        isUser: false,
        isGuess: false
    }
    if (isAuthenticated) {
        role.isUser = true
        if (user) {
            if (data?.payload.admin) {
                role.isAdmin = true
            }
        }
    } else {
        role.isGuess = true
    }
    return role
}