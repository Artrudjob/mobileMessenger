import React, { FC } from "react";
import { Navigate } from "react-router-native";

const Landing: FC = () => {

    return (
        <Navigate to={'/chats'} replace />
    )
}

export default Landing