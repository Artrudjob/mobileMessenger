import React, { FC, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-native";
import Layout from "../Layout/Layout";

interface IProps {
    user: boolean
}

const ProtectedRoute: FC<IProps> = ({ user }) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!user) {
            navigate("/signin", { replace: true });
        }
    }, [user])

    return <Layout />
}

export default ProtectedRoute