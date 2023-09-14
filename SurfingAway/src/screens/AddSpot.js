import { React } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import CustomTextInput from "../components/CustomTextInput";
import CustomDateInput from "../components/CustomDateInput";
import { Picker } from "@react-native-picker/picker";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Icon from "react-native-vector-icons/MaterialIcons";

const AddSpot = () => {
  const { control, handleSubmit, setValue } = useForm();
  const defaultValues = {
    destination: "",
    localisation: "",
    difficulty: 1,
    surfBreak: [""],
    surflineLink: "",
    photo: "",
    seasonStart: "",
    seasonEnd: "",
    latitude: "",
    longitude: "",
  };

  const items = [
    { name: "Beach Break", id: "Beach Break" },
    { name: "Reef Break", id: "Reef Break" },
    { name: "Point Break", id: "Point Break" },
    { name: "River Bar", id: "River Bar" },
    { name: "Rivermouth Break", id: "Rivermouth Break" },
    { name: "Jetty Break", id: "Jetty Break" },
    { name: "Outer Banks", id: "Outer Banks" },
  ];

  const onSubmit = (data) => console.log("ADDSPOT data" + data);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.mainTitle}>
          Ajoute ton super spot de surf magique
        </Text>
        <Text style={styles.text}>
          Histoire de permettre à tout le monde de détruire les océans avec leur
          peau dégueulasse et leur creme solaire
        </Text>
        <Text style={styles.text}>
          Et de faire les bombes sur insta. Alors qu'on a tous l'air cons en
          combi en vrai
        </Text>

        <CustomTextInput
          label={"Nom du spot"}
          control={control}
          name={"Destination"}
          placeholder={"Entrer le nom du spot"}
          defaultValue={defaultValues.destination}
        />

        <CustomTextInput
          label={"Localisation"}
          control={control}
          name={"Destination State/Country"}
          placeholder={"Ville, Pays"}
          defaultValue={defaultValues.localisation}
        />

        <Controller
          control={control}
          name="Difficulty Level"
          defaultValue={defaultValues.difficulty}
          render={({ field: { value } }) => (
            <View>
              <Text style={styles.title}>Niveau de difficulté</Text>
              <Picker
                selectedValue={value}
                onValueChange={(itemValue) =>
                  setValue("Difficulty Level", itemValue)
                }
              >
                <Picker.Item label="★" value={1} />
                <Picker.Item label="★★" value={2} />
                <Picker.Item label="★★★" value={3} />
                <Picker.Item label="★★★★" value={4} />
                <Picker.Item label="★★★★★" value={5} />
              </Picker>
            </View>
          )}
        />

        <Controller
          control={control}
          name="Surf Break"
          defaultValue={defaultValues.surfBreak}
          render={({ field: { value } }) => (
            <View>
              <Text style={styles.title}>Surf Break</Text>
              <SectionedMultiSelect
                items={items}
                IconRenderer={Icon}
                uniqueKey="id"
                selectText="Choisir au moins un surf break"
                showDropDowns={true}
                onSelectedItemsChange={(itemValue) =>
                  setValue("Surf Break", itemValue)
                }
                selectedItems={value}
              />
            </View>
          )}
        />

        <CustomTextInput
          label={"Photos"}
          control={control}
          name={"Photos"}
          placeholder={"Ajouter le lien de la photo"}
          defaultValue={defaultValues.photo}
        />

        <CustomDateInput
          control={control}
          name={"Peak Surf Season Begins"}
          defaultValue={defaultValues.seasonStart}
          label={"Début de la saison de surf"}
        />

        <CustomDateInput
          control={control}
          name={"Peak Surf Season Ends"}
          defaultValue={defaultValues.seasonStart}
          label={"Fin de la saison de surf"}
        />

        <CustomTextInput
          label={"Lien Surfline"}
          control={control}
          name={"Surfline Link"}
          placeholder={"Copier le lien ici"}
          defaultValue={defaultValues.surflineLink}
        />

        <CustomTextInput
          label={"Latitude"}
          control={control}
          name={"Latitude"}
          placeholder={"Entrer la latitude"}
          defaultValue={defaultValues.latitude}
        />

        <CustomTextInput
          label={"Longitude"}
          control={control}
          name={"Longitude"}
          placeholder={"Longitude"}
          defaultValue={defaultValues.longitude}
        />

        <Button title={"Envoyer"} onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingTop: 10,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    padding: 5,
  },
});

export default AddSpot;
