import React from 'react'

// UI IMPORT
import { CardForm, ControlledFilePicker, ControlledInput, ControlledSelect, ControlledTextArea } from "../../ui";

// PROJECT IMPORT
import { FormTypes } from '../common/types';

// THIRD - PARTY IMPORT₹
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Campaign = () => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  
  const schema = yup.object({
    name: yup.string().required("Please enter a name"),
    location: yup.number().required().typeError("Must be Location"),
    gmail: yup.string().required("Please enter a Gmail"),
    calendars: yup.string().notRequired().typeError("Must be Calandars"),
    calendar_number: yup.number().notRequired().typeError("Must be Calandars"),
    description: yup.string().required("Please enter a Description"),
    description2: yup.string().required("Please enter a Description"),
    description3: yup.string().required("Please enter a Description"),
    attachments: yup.mixed().required("Please enter a Attachments"),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormTypes) => {
    // Perform actions with the submitted data
  };

  const staticOptions = [
    { label: "test@gamil.com", value: "abc@gmail.com" },
    { label: "test2@gmail.com", value: "abg@gmail.com" },
  ];
  return (
    <CardForm
      title="Create Campaign"
      handleSubmit={handleSubmit(onSubmit)}
    >
      <ControlledSelect
        name="gmail"
        label="Gmail"
        placeholder="Select Gmail Account"
        options={staticOptions}
        control={control}
      />
      <ControlledInput
        name="name"
        label="Project Name"
        placeholder="Enter Project Name"
        control={control}
      />
      <ControlledInput
        name="location"
        label="Location"
        placeholder="Enter Target Location"
        errors={errors}
        control={control}
      />
      <ControlledTextArea
        name="description"
        label="Description"
        placeholder="Enter Description"
        errors={errors}
        control={control}
      />
      <ControlledTextArea
        name="description2"
        label="Description"
        placeholder="Enter Description"
        errors={errors}
        control={control}
      />
      <ControlledTextArea
        name="description3"
        label="Description"
        placeholder="Enter Description"
        errors={errors}
        control={control}
      />
      <ControlledInput
        name="calendar"
        label="Calendar"
        placeholder="Enter Calender Name"
        control={control}
      />
      <ControlledInput
        name="calendar_number"
        type="number"
        label="Calendar Number"
        placeholder="Enter Calender Number"
        control={control}
      />
      <ControlledFilePicker
        name="attachments"
        label="Attachments"
        placeholder="Enter Attachments"
        errors={errors}
        control={control}
      />
    </CardForm>
  );
};

export default Campaign;
