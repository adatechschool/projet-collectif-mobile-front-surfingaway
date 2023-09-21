import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

const CustomTextInput = ({
  control,
  name,
  placeholder,
  label,
  defaultValue,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { value, onChange, onBlur } }) => (
        <View>
          <Text style={styles.title}>{label}</Text>
          <TextInput
            style={styles.text}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
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
  text: {
    fontSize: 15,
    padding: 5,
  },
});

export default CustomTextInput;