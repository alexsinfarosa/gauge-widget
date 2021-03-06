import React from "react"

import { makeStyles, useTheme } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  Cell,
} from "recharts"

// API -------------------------------
import { mainFunction, isWaterAllowed, calculateDomain } from "../utils/api"

// utils -------------------------------
import reverse from "lodash.reverse"
import format from "date-fns/format"
import subDays from "date-fns/subDays"
import addDays from "date-fns/addDays"
import { addRemoveWater } from "../utils/api"

// Context ------------------------------
import AppContext from "../appContext"

const useStyles = makeStyles(theme => ({
  graphWrapper: {
    width: "100%",
    height: `calc(100% - 120px)`,
    paddingLeft: 16,
    paddingRight: 16,
  },
}))

export default function LawnGraph({ lawn }) {
  const theme = useTheme()
  const classes = useStyles()

  // Context -------------------------------------
  const { updateLawn } = React.useContext(AppContext)

  // results data ---------------------------------
  let results = []
  results = mainFunction(lawn)

  // results.map(d => console.log(d.date, d.deficit, d.shouldWater))

  // today utils ----------------------------------
  const todayDate = new Date().toLocaleDateString()
  const todayIdx = results.findIndex(d => d.date === todayDate)
  let todayObj = results.find(d => d.date === todayDate)
  // console.log(todayIdx, todayObj)

  if (todayIdx < 0) {
    todayObj = { shouldWater: false }
  }

  React.useEffect(() => {
    // console.log("lawnGraph useEffect")
    if (
      todayObj.hasUserWatered === "firstDate" &&
      todayObj.shouldWater &&
      lawn.irrigationDate !== todayDate &&
      isWaterAllowed(lawn.streetNumber)
    ) {
      // console.log("it is firstDate")
      updateLawn(addRemoveWater(lawn, todayIdx))
    }
  }, [])

  // results sliceed and reversed for the graph ---
  const reversed = reverse(results.slice(todayIdx - 7, todayIdx + 3))
  const domain = calculateDomain(reversed)

  // forecast ------------------------------------
  const forecast = lawn.forecast.daily.data.slice(0, 3).reverse()
  // console.log(forecast)

  // determine index of the clicked drop icon ------
  function determineIdx(date) {
    // console.log(results.findIndex(d => d.date === date))
    return results.findIndex(d => d.date === date)
  }

  // x-axix -----------------------------------
  const XaxisLabel = props => {
    const { x, y, index } = props
    const translate = `translate(${x - 10},${y + 3})`
    return (
      <>
        {index === 0 && (
          <g transform={translate}>
            <text
              x={-6}
              y={15}
              fontSize="0.9rem"
              fontWeight="bold"
              fill={theme.palette.background.deficit}
            >
              DRY
            </text>
          </g>
        )}

        {(props.visibleTicksCount === 2 ? index === 1 : index === 2) && (
          <g transform={translate}>
            <text
              x={-10}
              y={15}
              fontSize="0.9rem"
              fontWeight="bold"
              fill={theme.palette.background.noDeficit}
            >
              WET
            </text>
          </g>
        )}
      </>
    )
  }

  // DAYS ----------------------------------------
  const YaxisLabel = props => {
    const { x, y, payload } = props
    const date = payload.value
    const today = new Date()
    const tomorrow = addDays(today, 1)
    const yesterday = subDays(today, 1)
    const formatted = date => format(date, "M/d/yyyy")

    let day = ""
    if (date === formatted(tomorrow)) day = "tomorrow"
    if (date === formatted(today)) day = "today"
    if (date === formatted(yesterday)) day = "yesterday"

    const text = day => {
      switch (day) {
        case "tomorrow":
          return <tspan fontSize="1rem">Tomorrow</tspan>
        case "today":
          return (
            <tspan
              fontWeight="bold"
              fill={
                todayObj.shouldWater
                  ? theme.palette.background.deficit
                  : theme.palette.background.noDeficit
              }
              fontSize="1.2rem"
            >
              TODAY
            </tspan>
          )
        case "yesterday":
          return <tspan fontSize="1rem">Yesterday</tspan>
        default:
          return (
            <tspan fontSize="1rem">{format(new Date(date), "MM/dd")}</tspan>
          )
      }
    }

    return (
      <g>
        <text x={x - 80} y={y} dy={5} fill={theme.palette.grey[700]}>
          {text(day)}
        </text>
      </g>
    )
  }

  // RIGHT Icons --------------------------------
  const RightIconButtons = props => {
    const { y, x, index, payload, reversed } = props

    return (
      <svg width={100} height={26} x={x} y={y - 13}>
        {(index === 0 || index === 1) && (
          <g transform={`translate(${-40},${0})`}>
            <text
              x={76}
              y={16}
              fontSize="0.8rem"
              fill={theme.palette.grey[700]}
            >
              {(forecast[index].precipProbability * 100).toFixed(0)}%
            </text>
            <svg width={20} x={50}>
              <FontAwesomeIcon
                icon={["fal", "cloud-rain"]}
                color={theme.palette.grey[700]}
              />
            </svg>
          </g>
        )}

        {/* ODD EVEN ORDINANCE */}
        {index === 2 && isWaterAllowed(lawn.streetNumber) && (
          <FontAwesomeIcon
            icon={["fas", "tint"]}
            color={
              reversed[index].hasUserWatered === true
                ? theme.palette.background.noDeficit
                : theme.palette.grey[300]
            }
            onClick={() => {
              updateLawn(addRemoveWater(lawn, determineIdx(payload.value)))
            }}
          />
        )}

        {index === 2 && !isWaterAllowed(lawn.streetNumber) && (
          <FontAwesomeIcon
            icon={["fa", "tint-slash"]}
            color={theme.palette.grey[400]}
          />
        )}

        {index > 2 && (
          <FontAwesomeIcon
            icon={["fas", "tint"]}
            color={
              reversed[index].hasUserWatered === true
                ? theme.palette.background.noDeficit
                : theme.palette.grey[300]
            }
            onClick={() => {
              updateLawn(addRemoveWater(lawn, determineIdx(payload.value)))
            }}
          />
        )}
      </svg>
    )
  }

  return (
    <Box height="100%">
      {/* MESSAGE */}
      <Box
        height="60px"
        bgcolor={
          isWaterAllowed(lawn.streetNumber)
            ? todayObj.shouldWater
              ? theme.palette.background.deficit
              : theme.palette.background.noDeficit
            : theme.palette.grey[700]
        }
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        mb={1}
        mt={-2}
      >
        <Typography variant="h5">
          {isWaterAllowed(lawn.streetNumber) ? (
            todayObj.shouldWater ? (
              <div style={{ textAlign: "center" }}>
                <div>Water Today!</div>
                {!todayObj.hasUserWatered && (
                  <div style={{ fontSize: 14 }}>
                    Press the icon if you have watered
                  </div>
                )}
              </div>
            ) : (
              "No Need to Water Today!"
            )
          ) : (
            "Ordinance Prohibits Watering Today"
          )}
        </Typography>
      </Box>

      {/* ADRESS */}
      <Box
        height="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={2}
      >
        <Typography>{lawn.address}</Typography>
      </Box>

      {/* GRAPH */}
      <div className={classes.graphWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={reversed}
            maxBarSize={15}
            margin={{ top: 0, right: 20, left: 30, bottom: 10 }}
          >
            {/* X-axis */}
            <XAxis
              dataKey="bar"
              type="number"
              domain={[-domain, domain]}
              tick={<XaxisLabel />}
              tickCount={3}
              stroke={theme.palette.grey[300]}
            />
            />
            {/* Left dates */}
            <YAxis
              dataKey="date"
              type="category"
              orientation="left"
              tickLine={false}
              axisLine={false}
              tick={<YaxisLabel />}
            />
            {/* RIght Icons */}
            <YAxis
              dataKey="date"
              yAxisId="right"
              type="category"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tick={<RightIconButtons reversed={reversed} />}
            />
            {/* Origin */}
            <ReferenceLine x={0} stroke={theme.palette.grey[300]} />
            {/* <ReferenceLine
              y={new Date().toLocaleDateString()}
              stroke={theme.palette.grey[300]}
            /> */}
            {/* bars */}
            <Bar dataKey="bar" radius={[0, 20, 20, 0]}>
              {reversed.map(day => {
                return (
                  <Cell
                    key={day.date}
                    fill={
                      day.bar < 0
                        ? theme.palette.background.deficit
                        : theme.palette.background.noDeficit
                    }
                  />
                )
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Box>
  )
}
