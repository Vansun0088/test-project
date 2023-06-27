import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from "../features/auth/authSlice";

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return useMemo(() => ({ isLoggedIn }), [isLoggedIn])
}
