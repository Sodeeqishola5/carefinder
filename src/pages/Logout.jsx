import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutInitiate } from '../redux/actions'

const Logout = () => {
    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleAuth = () => {
        if (currentUser) {
            dispatch(logoutInitiate())
        }
    }
    return (
        <div>
            <button className="btn btn-danger" onClick={handleAuth}>
                Logout
            </button>
        </div>
    )
}

export default Logout
