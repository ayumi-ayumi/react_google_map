import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import "../styles/FormProfile.scss";
import { db } from "../firebase/BaseConfig";
import { collection, addDoc, serverTimestamp, } from "firebase/firestore";
import { nanoid } from "nanoid";
import { FormInputCheckbox } from "../form-components/FormInputCheckbox";
import { Button, Container, Stack, Alert } from "@mui/material";
import { options_cafeDetail } from "../Props/props";
import { CafePlace, CafeDetailType } from "../interfaces/interfaces";
import CheckIcon from '@mui/icons-material/Check';
import { PlaceAutoCompleteForCafe } from "./PlaceAutoComplete";
import { useNavigate } from "react-router-dom";
import {APILoader, PlaceDirectionsButton, PlaceOverview} from '@googlemaps/extended-component-library/react';

export default function AddCafe() {

  const defaultValues: CafeDetailType = {
    // id: 0,
    timestamp: serverTimestamp(),
    place: {
      // address: "",
      position: {
        lat: 0,
        lng: 0
      },
    },
    cafe_detail: [],
  };

  const [place, setPlace] = useState<CafePlace>({ position: { lat: 0, lng: 0 } });
  const [saved, setSaved] = useState(false);
  const methods = useForm<CafeDetailType>({ defaultValues });
  const navigate = useNavigate();

  // Store the user data when clicking the submit button
  const onSubmit = (data: CafeDetailType) => {
    addDoc(collection(db, "cafes"), {
      ...data,
      // id: nanoid(),
      timestamp: serverTimestamp(),
      place: place
    });
    setSaved(true)
    navigate("/")
  };

  const handleReset = () => {
    methods.reset(defaultValues);
  };

  return (
    <>
      <h1>Add Cafe</h1>
      <FormProvider {...methods}>
        <Container maxWidth="sm" component="form" onSubmit={methods.handleSubmit(onSubmit)}>
          {saved && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Added your selected cafe.
          </Alert>}
          <Stack
            style={{
              display: "grid",
              // gridRowGap: "20px",
              // padding: "20px",
              // margin: "10px 300px",
            }}
            className="form-container"
          >
            <PlaceAutoCompleteForCafe setPlace={setPlace} />
            {/* {place.photos && place.photos.map((photo) => (
              <img key={photo.html_attributions} src={photo.getUrl()} style={{
                display: "grid",
                height: "80px",
                width: "60px",
                // margin: "10px 300px",
              }} />
            ))} */}
            {/* <PlaceOverview place="ChIJbzYnQte8woARJaqqFVpKeNo" /> */}
            <FormInputCheckbox
              name={"cafe_detail"}
              label={"Cafe enviroment"}
              options={options_cafeDetail}
            />
            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button variant="contained" type="submit">
                Save
              </Button>
              <Button onClick={handleReset}>Reset</Button>
            </Stack>
          </Stack>
        </Container>
      </FormProvider>
    </>
  );
}
