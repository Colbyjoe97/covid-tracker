import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";


function InfoBox({ title, isRed, isGrey, isOrange, active, cases, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isOrange && "infoBox--orange"}`}
    >
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* Number of Cases */}
        <h2
          className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${
            isOrange && "infoBox__cases--orange"
          }`}
        >
          {cases}
        </h2>

        {/* Total Cases */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;