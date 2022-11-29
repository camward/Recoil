import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { tempFahrenheit, tempCelsius } from "../../state/temperature";
import { Box, Button, List, ListItem, ListItemText } from "@mui/material";

const Temperature = () => {
  const [tempF, setTempF] = useRecoilState(tempFahrenheit);
  const [tempC, setTempC] = useRecoilState(tempCelsius);
  const resetTemp = useResetRecoilState(tempCelsius);

  const addTenCelsius = () => setTempC(tempC + 10);
  const addTenFahrenheit = () => setTempF(tempF + 10);
  const reset = () => resetTemp();

  return (
    <div>
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <List>
          <ListItem disablePadding>
            <ListItemText primary={`Температура C: ${tempC}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Температура F: ${tempF}`} />
          </ListItem>
        </List>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Button
          onClick={addTenCelsius}
          variant="contained"
          color="primary"
          size="medium"
        >
          Добавить 10 градусов Цельсия
        </Button>
        <Button
          onClick={addTenFahrenheit}
          variant="contained"
          color="primary"
          size="medium"
        >
          Добавить 10 градусов Фаренгейта
        </Button>
        <Button
          onClick={reset}
          variant="contained"
          color="warning"
          size="medium"
        >
          Сбросить
        </Button>
      </Box>
    </div>
  );
};

export default Temperature;
