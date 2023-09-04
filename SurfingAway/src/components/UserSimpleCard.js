import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';

const UserSimpleCard = () => {
    return (<Card.Title
        title="Elsa la bellegosse du 33"
        subtitle="Influencer score"
        left={(props) => <Avatar.Icon {...props} icon="account" />}
        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
    />)

}

const styles = StyleSheet.create({

})

export default UserSimpleCard