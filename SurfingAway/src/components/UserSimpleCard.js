import React from "react";
import { StyleSheet } from "react-native";
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

const styles = StyleSheet.create({

})

export default UserSimpleCard