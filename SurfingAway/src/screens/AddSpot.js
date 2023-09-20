import { React } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import CustomTextInput from "../components/CustomTextInput";
import CustomDateInput from "../components/CustomDateInput";
import { Picker } from "@react-native-picker/picker";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button, Card } from "react-native-paper";
import { API_KEY } from "@env";

const AddSpot = () => {
  const cle = API_KEY;
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

  const onSubmit = async (data) => {
    try {
      await fetch("https://api.airtable.com/v0/appqndsWaTAmFBUIM/Surf%20Destinations",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8",
            authorization: `Bearer ${cle}`
          }
        }).then((response) => {
          response.json()
            .then((json) => {
              console.log(json);
            });
        })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Text style={styles.mainTitle}>Partage ta passion</Text>
        </View>
        <Text style={styles.text}>
          L'océan peut sembler infini, mais il est vulnérable. Chaque spot
          ajouté est une opportunité de sensibiliser les gens à l'importance de
          le préserver.
        </Text>
        <Text style={styles.text}>
          Contribuez à la préservation de l'environnement pour que les
          générations futures puissent aussi en profiter.
        </Text>
        <Card style={styles.content}>
          <Card.Title
            titleStyle={styles.title2}
            title="🏄🏼‍♀️ Ajoute ton spot de surf 🏄🏼‍♀️"
          />
          <Card.Content>
            <CustomTextInput
              label={"Nom du spot"}
              control={control}
              name={"Destination"}
              placeholder={"Entrez le nom du spot"}
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

            {/* <CustomTextInput
              label={"Photos"}
              control={control}
              name={"Photos"}
              placeholder={"Ajouter le lien de la photo"}
              defaultValue={defaultValues.photo}
            /> */}

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
              placeholder={"Entrer la longitude"}
              defaultValue={defaultValues.longitude}
            />
          </Card.Content>
          <Card.Actions>
            <Button
              mode="outlined"
              onPress={handleSubmit(onSubmit)}
              style={styles.button}
            >
              Envoyer
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  titleWrapper: {
    backgroundColor: "deeppink",
    alignItems: "center",
    marginBottom: 10,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    paddingVertical: 10,
  },
  title: {
    fontSize: 17,
    color: "darkblue",
    fontWeight: "bold",
    paddingTop: 5,
  },
  title2: {
    fontSize: 19,
    color: "deeppink",
    fontWeight: "bold",
    paddingTop: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  content: {
    margin: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  button: {
    marginBottom: 10,
  },
});

export default AddSpot;
