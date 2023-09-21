import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Controller } from "react-hook-form";
import { DatePickerInput } from "react-native-paper-dates";

const CustomDateInput = ({ control, name, defaultValue, label }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { value, onChange } }) => (
        <View>
          <Text style={styles.title}>{label}</Text>
          <DatePickerInput
            style={styles.date}
            locale="fr"
            label={label}
            value={value}
            onChange={onChange}
            inputMode="start"
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: "darkblue",
    fontWeight: "bold",
    paddingTop: 5,
  },
  date: {
    fontSize: 15,
    padding: 2,
    marginTop: 10,
    backgroundColor: "lightgrey",
  },
});

export default CustomDateInput;
