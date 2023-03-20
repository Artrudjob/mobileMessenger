import React, { FC, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-native";
import Layout from "../Layout/Layout";

interface IProps {
    user: boolean
}

const ProtectedRoute: FC<IProps> = ({ user }) => {
    const navigate = useNavigate();
    console.log("It is ProtectedRoute")
    
    useEffect(() => {
        if (!user) {
            console.log("No user")
            navigate("/signin", { replace: true });
            // return <Navigate to={"/signin"} />
        }
    }, [user])

    return <Layout />
}

export default ProtectedRoute