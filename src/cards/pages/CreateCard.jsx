import React from "react";
import TextField from "@mui/material/TextField";
import useForm from "./../../form/useForm";
import cardSchema from "./../model/cardShema";
import emptyCard from "./../model/emptyCard";

export const CreateCard = () => {
  const { data, errors, validate, handleChange, handleSubmit } = useForm({
    emptyForm: emptyCard,
    schema: cardSchema,
    onSubmit: console.log,
  });

  console.log({ data, errors });

  return (
    <>
      <TextField
        label="Title"
        name="title"
        defaultValue={data["title"]}
        error={Boolean(errors["title"])}
        helperText={errors["title"]}
        onChange={handleChange}
      />
      <TextField
        label="Country"
        name="address.country"
        defaultValue={data.address?.country}
        error={Boolean(errors.address?.country)}
        helperText={errors.address?.country}
        onChange={handleChange}
      />
    </>
  );
};
