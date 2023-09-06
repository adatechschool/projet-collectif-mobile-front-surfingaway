import { React, useState } from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import CustomTextInput from "../components/CustomTextInput";
import { Picker } from '@react-native-picker/picker';
import { DatePickerInput } from 'react-native-paper-dates';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddSpot = () => {
    const { control, handleSubmit, setValue } = useForm();
    const defaultValues = {
        destination: '',
        localisation: '',
        difficulty: 1,
        surfBreak: [''],
        magicSeaweedLink: '',
        photo: '',
        seasonStart: '',
        seasonEnd: ''
    }

    const items = [
        { name: "Beach Break", id: "Beach Break" },
        { name: "Reef Break", id: "Reef Break" },
        { name: "Point Break", id: "Point Break" },
        { name: "River Bar", id: "River Bar" },
        { name: "Rivermouth Break", id: "Rivermouth Break" },
        { name: "Jetty Break", id: "Jetty Break" },
        { name: "Outer Banks", id: "Outer Banks" }
    ]

    const onSubmit = data => console.log(data);

    return (

        <View style={styles.container} >
            <Text>Ajoute ton super spot de surf magique</Text>
            <Text>Histoire de premettre à tout le monde de détruire les océans avec leur peau dégueulasse et leur creme solaire</Text>
            <Text>Et de faire les bombes sur insta. Alors qu'on a tous l'air cons en combi en vrai</Text>

            <CustomTextInput label={"Nom du spot"} control={control} name={"Destination"} placeholder={"Entrer le nom du spot"} defaultValue={defaultValues.destination} />

            <CustomTextInput label={"Localisation"} control={control} name={"Destination State/Country"} placeholder={"Ville, Pays"} defaultValue={defaultValues.localisation} />

            <Controller
                control={control}
                render={({ field: { value } }) => (
                    <View>
                        <Text>Niveau de difficulté</Text>
                        <Picker
                            selectedValue={value}
                            onValueChange={itemValue => setValue("Difficulty Level", itemValue)}
                        >
                            <Picker.Item label="★" value={1} />
                            <Picker.Item label="★★" value={2} />
                            <Picker.Item label="★★★" value={3} />
                            <Picker.Item label="★★★★" value={4} />
                            <Picker.Item label="★★★★★" value={5} />
                        </Picker>
                    </View>
                )}
                name="Difficulty Level"
                defaultValue={defaultValues.difficulty}
            />

            <Controller
                control={control}
                render={({ field: { value } }) => (
                    <View>
                        <Text>Surf Break</Text>
                        <SectionedMultiSelect
                            items={items}
                            IconRenderer={Icon}
                            uniqueKey="id"
                            selectText="Choisir au moins un surf break"
                            showDropDowns={true}
                            onSelectedItemsChange={itemValue => setValue("Surf Break", itemValue)}
                            selectedItems={value}
                        />
                    </View>
                )}
                name="Surf Break"
                defaultValue={defaultValues.surfBreak}
            />

            <CustomTextInput label={"Photos"} control={control} name={"Photos"} placeholder={"Ajouter le lien de la photo"} defaultValue={defaultValues.photo} />

            <Controller
                control={control}
                name="Peak Surf Season Begins"
                defaultValue={defaultValues.seasonStart}
                render={({ field: { value } }) => (
                    <DatePickerInput
                        locale="fr"
                        label="Début de la saison de surf"
                        value={value}
                        onChange={itemValue => setValue("Peak Surf Season Begins", itemValue)}
                        inputMode="start"
                    />)}
            />

            <Controller
                control={control}
                name="Peak Surf Season Ends"
                defaultValue={defaultValues.seasonEnd}
                render={({ field: { value } }) => (
                    <DatePickerInput
                        locale="fr"
                        label="Fin de la saison de surf"
                        value={value}
                        onChange={itemValue => setValue("Peak Surf Season Ends", itemValue)}
                        inputMode="start"
                    />)}
            />

            <CustomTextInput label={"Lien Magic Seaweed"} control={control} name={"Magic Seaweed Link"} placeholder={"Copier le lien ici"} defaultValue={defaultValues.magicSeaweedLink} />

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