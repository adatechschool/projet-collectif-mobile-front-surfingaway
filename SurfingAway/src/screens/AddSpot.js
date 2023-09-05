import { React } from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import CustomTextInput from "../components/CustomTextInput";
import { Picker } from '@react-native-picker/picker';

const AddSpot = () => {
    const { control, handleSubmit, setValue } = useForm();
    const defaultValues = {
        destination: '',
        localisation: '',
        difficulty: 1,
        surfBreak: [''],
        magicSeaweedLink: ''
    }

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
                            onValueChange={itemValue => setValue("difficulty", itemValue)}
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
                        <Picker
                            selectedValue={value}
                            onValueChange={itemValue => setValue("surfBreak", itemValue)}
                        >
                            <Picker.Item label="Beach Break" value="Beach Break" />
                            <Picker.Item label="Reef Break" value="Reef Break" />
                            <Picker.Item label="Point Break" value="Point Break" />
                            <Picker.Item label="River Bar" value="River Bar" />
                            <Picker.Item label="Rivermouth Break" value="Rivermouth Break" />
                            <Picker.Item label="Jetty Break" value="Jetty Break" />
                            <Picker.Item label="Outer Banks" value="Outer Banks" />
                        </Picker>
                    </View>
                )}
                name="Surf Break"
                defaultValue={defaultValues.surfBreak}
            />

            <CustomTextInput label={"Lien Magic Seaweed"} control={control} name={"Magic Seaweed Link"} placeholder={"Lien"} defaultValue={defaultValues.magicSeaweedLink} />

            <Controller
                control={control}
                name={"picture"}
                rules={{ required: "Recipe picture is required" }}
                render={({ field: { value, onChange, ...field } }) => {
                    return (
                        <Input
                            {...field}
                            value={value?.fileName}
                            onChange={(event) => {
                                onChange(event.target.files[0]);
                            }}
                            type="file"
                            id="picture"
                        />
                    );
                }}
            />

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