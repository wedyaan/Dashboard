import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";

const data = [
  {
    id: "japan",
    color: "hsl(66, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 42,
      },
      {
        x: "helicopter",
        y: 236,
      },
      {
        x: "boat",
        y: 229,
      },
      {
        x: "train",
        y: 165,
      },
      {
        x: "subway",
        y: 269,
      },
      {
        x: "bus",
        y: 293,
      },
      {
        x: "car",
        y: 277,
      },
      {
        x: "moto",
        y: 54,
      },
      {
        x: "bicycle",
        y: 73,
      },
      {
        x: "horse",
        y: 71,
      },
      {
        x: "skateboard",
        y: 170,
      },
      {
        x: "others",
        y: 250,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(326, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 84,
      },
      {
        x: "helicopter",
        y: 150,
      },
      {
        x: "boat",
        y: 267,
      },
      {
        x: "train",
        y: 199,
      },
      {
        x: "subway",
        y: 67,
      },
      {
        x: "bus",
        y: 213,
      },
      {
        x: "car",
        y: 283,
      },
      {
        x: "moto",
        y: 51,
      },
      {
        x: "bicycle",
        y: 37,
      },
      {
        x: "horse",
        y: 18,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 271,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(134, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 297,
      },
      {
        x: "helicopter",
        y: 109,
      },
      {
        x: "boat",
        y: 106,
      },
      {
        x: "train",
        y: 174,
      },
      {
        x: "subway",
        y: 189,
      },
      {
        x: "bus",
        y: 57,
      },
      {
        x: "car",
        y: 164,
      },
      {
        x: "moto",
        y: 128,
      },
      {
        x: "bicycle",
        y: 66,
      },
      {
        x: "horse",
        y: 293,
      },
      {
        x: "skateboard",
        y: 145,
      },
      {
        x: "others",
        y: 21,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(357, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 103,
      },
      {
        x: "helicopter",
        y: 235,
      },
      {
        x: "boat",
        y: 282,
      },
      {
        x: "train",
        y: 88,
      },
      {
        x: "subway",
        y: 72,
      },
      {
        x: "bus",
        y: 65,
      },
      {
        x: "car",
        y: 44,
      },
      {
        x: "moto",
        y: 207,
      },
      {
        x: "bicycle",
        y: 73,
      },
      {
        x: "horse",
        y: 50,
      },
      {
        x: "skateboard",
        y: 192,
      },
      {
        x: "others",
        y: 71,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(40, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 59,
      },
      {
        x: "helicopter",
        y: 7,
      },
      {
        x: "boat",
        y: 201,
      },
      {
        x: "train",
        y: 189,
      },
      {
        x: "subway",
        y: 43,
      },
      {
        x: "bus",
        y: 145,
      },
      {
        x: "car",
        y: 6,
      },
      {
        x: "moto",
        y: 130,
      },
      {
        x: "bicycle",
        y: 191,
      },
      {
        x: "horse",
        y: 243,
      },
      {
        x: "skateboard",
        y: 61,
      },
      {
        x: "others",
        y: 34,
      },
    ],
  },
];
const LineChart = ({ isDahboard = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDahboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        theme={{
          // @ts-ignore
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard ? null : "Count",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default LineChart;
