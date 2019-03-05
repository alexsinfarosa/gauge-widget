import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";

import SwipeableViews from "react-swipeable-views";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import DayCard from "../components/dayCard";
import BarChart from "../components/barChart";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateRows: "80px auto",
    height: "100vh"
  },
  header: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    justifyItems: "center",
    padding: theme.spacing(0, 4),
    background: theme.palette.background.default
  },
  main: {
    overflow: "auto",
    height: "calc(100vh - 80px)"
  },
  btnBig: {
    paddingTop: theme.spacing(2, 5)
  }
}));

const Field = ({ setMainPageIdx, field }) => {
  console.log("Field");
  const classes = useStyles();
  const theme = useTheme();

  const { last7Days } = field;
  // state --------------------------------------------
  const [dayCardIdx, setDayCardIdx] = React.useState(6);
  const handleDayCardIdx = i => setDayCardIdx(i);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <FontAwesomeIcon
          icon="cloud-sun"
          size="lg"
          onClick={() => setMainPageIdx(0)}
        />
        <FontAwesomeIcon
          icon="home"
          size="2x"
          color={theme.palette.secondary.main}
        />
        <FontAwesomeIcon
          icon="grip-horizontal"
          size="lg"
          onClick={() => setMainPageIdx(2)}
        />
      </header>

      <main className={classes.main}>
        {/* grid top */}

        <SwipeableViews
          index={dayCardIdx}
          onChangeIndex={() => handleDayCardIdx(dayCardIdx)}
          enableMouseEvents
        >
          {last7Days &&
            last7Days.map((day, i) => (
              <DayCard
                key={day.date}
                waterFlow={field.sprinkler.waterFlow}
                minutes={field.sprinkler.minutes}
                address={field.address}
                irrigationDate={field.irrigationDate}
                day={day}
                index={i}
              />
            ))}
        </SwipeableViews>

        {/* grid bottom */}
        <BarChart last7Days={last7Days} />
      </main>
    </div>
  );
};

export default React.memo(Field);