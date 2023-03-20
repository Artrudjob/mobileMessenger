import React, { FC } from "react";
import { Navigate } from "react-router-native";

interface IProps {
    user: boolean
    children: JSX.Element
}

const ProtectedRoute: FC<IProps> = ({ user, children }) => {
    if (!user) {
        return <Navigate to={"/signin"} replace />
    }

    return children
}