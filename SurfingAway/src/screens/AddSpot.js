import React from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import { useForm } from "react-hook-form";
import CustomTextInput from "../components/CustomTextInput";

const AddSpot = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            spotName: '',
            localisation: '',
            difficulty: '1'
        }
    });

    const onSubmit = data => console.log(data);

    return (
        <View style={styles.container} >
            <Text>Ajoute ton super spot de surf magique</Text>
            <Text>Histoire de premettre à tout le monde de détruire les océans avec leur peau dégueulasse et leur creme solaire</Text>
            <Text>Et de faire les bombes sur insta. Alors qu'on a tous l'air cons en combi en vrai</Text>
            <CustomTextInput label={"Nom du spot"} control={control} name={"spotName"} placeholder={"Entrer le nom du spot"} />
            <CustomTextInput label={"Localisation"} control={control} name={"localisation"} placeholder={"Ville, Pays"} />
            <CustomTextInput label={"Niveau de difficulté"} control={control} name={"difficulty"} placeholder={"Entrer le nom du spot"} />

            <Button
                color={'lightblue'}
                title={'Envoyer'}
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0
    },
})

export default AddSpot;