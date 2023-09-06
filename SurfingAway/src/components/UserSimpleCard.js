import React from "react";
import { Avatar, Card, IconButton } from 'react-native-paper';

const UserSimpleCard = (props) => {
    const { name, message } = props
    return (
        <Card.Title
            title={name}
            subtitle={message}
            left={(props) => <Avatar.Icon {...props} icon="account" />}
            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
        />
    )
}


export default UserSimpleCard