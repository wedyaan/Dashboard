import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./Wc";

const data = [
  {
    id: "AFG",
    value: 710769,
  },
  {
    id: "AGO",
    value: 821213,
  },
  {
    id: "ALB",
    value: 924872,
  },
  {
    id: "ARE",
    value: 281637,
  },
  {
    id: "ARG",
    value: 282896,
  },
  {
    id: "ARM",
    value: 763442,
  },
  {
    id: "ATA",
    value: 890358,
  },
  {
    id: "ATF",
    value: 634752,
  },
  {
    id: "AUT",
    value: 882088,
  },
  {
    id: "AZE",
    value: 831461,
  },
  {
    id: "BDI",
    value: 846688,
  },
  {
    id: "BEL",
    value: 115843,
  },
  {
    id: "BEN",
    value: 962873,
  },
  {
    id: "BFA",
    value: 411668,
  },
  {
    id: "BGD",
    value: 945966,
  },
  {
    id: "BGR",
    value: 132075,
  },
  {
    id: "BHS",
    value: 824357,
  },
  {
    id: "BIH",
    value: 744852,
  },
  {
    id: "BLR",
    value: 935604,
  },
  {
    id: "BLZ",
    value: 419067,
  },
  {
    id: "BOL",
    value: 737608,
  },
  {
    id: "BRN",
    value: 890334,
  },
  {
    id: "BTN",
    value: 920343,
  },
  {
    id: "BWA",
    value: 928847,
  },
  {
    id: "CAF",
    value: 700147,
  },
  {
    id: "CAN",
    value: 968281,
  },
  {
    id: "CHE",
    value: 257610,
  },
  {
    id: "CHL",
    value: 435035,
  },
  {
    id: "CHN",
    value: 163414,
  },
  {
    id: "CIV",
    value: 41497,
  },
  {
    id: "CMR",
    value: 482778,
  },
  {
    id: "COG",
    value: 336646,
  },
  {
    id: "COL",
    value: 189581,
  },
  {
    id: "CRI",
    value: 32847,
  },
  {
    id: "CUB",
    value: 189076,
  },
  {
    id: "-99",
    value: 553085,
  },
  {
    id: "CYP",
    value: 102989,
  },
  {
    id: "CZE",
    value: 761613,
  },
  {
    id: "DEU",
    value: 506898,
  },
  {
    id: "DJI",
    value: 624582,
  },
  {
    id: "DNK",
    value: 587050,
  },
  {
    id: "DOM",
    value: 82595,
  },
  {
    id: "DZA",
    value: 119542,
  },
  {
    id: "ECU",
    value: 958768,
  },
  {
    id: "EGY",
    value: 542827,
  },
  {
    id: "ERI",
    value: 998887,
  },
  {
    id: "ESP",
    value: 798002,
  },
  {
    id: "EST",
    value: 751760,
  },
  {
    id: "ETH",
    value: 363269,
  },
  {
    id: "FIN",
    value: 540202,
  },
  {
    id: "FJI",
    value: 571913,
  },
  {
    id: "FLK",
    value: 662684,
  },
  {
    id: "FRA",
    value: 212731,
  },
  {
    id: "GAB",
    value: 602890,
  },
  {
    id: "GBR",
    value: 914608,
  },
  {
    id: "GEO",
    value: 652904,
  },
  {
    id: "GHA",
    value: 709908,
  },
  {
    id: "GIN",
    value: 765994,
  },
  {
    id: "GMB",
    value: 902741,
  },
  {
    id: "GNB",
    value: 469084,
  },
  {
    id: "GNQ",
    value: 544287,
  },
  {
    id: "GRC",
    value: 969871,
  },
  {
    id: "GTM",
    value: 384355,
  },
  {
    id: "GUY",
    value: 609276,
  },
  {
    id: "HND",
    value: 10858,
  },
  {
    id: "HRV",
    value: 311895,
  },
  {
    id: "HTI",
    value: 155169,
  },
  {
    id: "HUN",
    value: 963421,
  },
  {
    id: "IDN",
    value: 52235,
  },
  {
    id: "IND",
    value: 26036,
  },
  {
    id: "IRL",
    value: 969724,
  },
  {
    id: "IRN",
    value: 8638,
  },
  {
    id: "IRQ",
    value: 363164,
  },
  {
    id: "ISL",
    value: 114490,
  },
  {
    id: "ISR",
    value: 792672,
  },
  {
    id: "ITA",
    value: 263065,
  },
  {
    id: "JAM",
    value: 63011,
  },
  {
    id: "JOR",
    value: 825074,
  },
  {
    id: "JPN",
    value: 476438,
  },
  {
    id: "KAZ",
    value: 409406,
  },
  {
    id: "KEN",
    value: 771263,
  },
  {
    id: "KGZ",
    value: 203775,
  },
  {
    id: "KHM",
    value: 656558,
  },
  {
    id: "OSA",
    value: 162160,
  },
  {
    id: "KWT",
    value: 575854,
  },
  {
    id: "LAO",
    value: 305419,
  },
  {
    id: "LBN",
    value: 176343,
  },
  {
    id: "LBR",
    value: 477586,
  },
  {
    id: "LBY",
    value: 594947,
  },
  {
    id: "LKA",
    value: 865802,
  },
  {
    id: "LSO",
    value: 375758,
  },
  {
    id: "LTU",
    value: 966319,
  },
  {
    id: "LUX",
    value: 202167,
  },
  {
    id: "LVA",
    value: 819647,
  },
  {
    id: "MAR",
    value: 244223,
  },
  {
    id: "MDA",
    value: 690991,
  },
  {
    id: "MDG",
    value: 174190,
  },
  {
    id: "MEX",
    value: 375997,
  },
  {
    id: "MKD",
    value: 115220,
  },
  {
    id: "MLI",
    value: 701448,
  },
  {
    id: "MMR",
    value: 458282,
  },
  {
    id: "MNE",
    value: 649901,
  },
  {
    id: "MNG",
    value: 674132,
  },
  {
    id: "MOZ",
    value: 753252,
  },
  {
    id: "MRT",
    value: 11066,
  },
  {
    id: "MWI",
    value: 105230,
  },
  {
    id: "MYS",
    value: 410116,
  },
  {
    id: "NAM",
    value: 703677,
  },
  {
    id: "NCL",
    value: 447677,
  },
  {
    id: "NER",
    value: 779083,
  },
  {
    id: "NGA",
    value: 397223,
  },
  {
    id: "NIC",
    value: 581986,
  },
  {
    id: "NLD",
    value: 850938,
  },
  {
    id: "NOR",
    value: 716815,
  },
  {
    id: "NPL",
    value: 294332,
  },
  {
    id: "NZL",
    value: 919537,
  },
  {
    id: "OMN",
    value: 349976,
  },
  {
    id: "PAK",
    value: 587498,
  },
  {
    id: "PAN",
    value: 49617,
  },
  {
    id: "PER",
    value: 407065,
  },
  {
    id: "PHL",
    value: 663487,
  },
  {
    id: "PNG",
    value: 196409,
  },
  {
    id: "POL",
    value: 604903,
  },
  {
    id: "PRI",
    value: 907463,
  },
  {
    id: "PRT",
    value: 405831,
  },
  {
    id: "PRY",
    value: 221966,
  },
  {
    id: "QAT",
    value: 294201,
  },
  {
    id: "ROU",
    value: 990362,
  },
  {
    id: "RUS",
    value: 467241,
  },
  {
    id: "RWA",
    value: 246208,
  },
  {
    id: "ESH",
    value: 631854,
  },
  {
    id: "SAU",
    value: 292413,
  },
  {
    id: "SDN",
    value: 600520,
  },
  {
    id: "SDS",
    value: 852131,
  },
  {
    id: "SEN",
    value: 133634,
  },
  {
    id: "SLB",
    value: 614572,
  },
  {
    id: "SLE",
    value: 590847,
  },
  {
    id: "SLV",
    value: 913575,
  },
  {
    id: "ABV",
    value: 275555,
  },
  {
    id: "SOM",
    value: 959370,
  },
  {
    id: "SRB",
    value: 835705,
  },
  {
    id: "SUR",
    value: 158370,
  },
  {
    id: "SVK",
    value: 15087,
  },
  {
    id: "SVN",
    value: 883823,
  },
  {
    id: "SWZ",
    value: 892079,
  },
  {
    id: "SYR",
    value: 947669,
  },
  {
    id: "TCD",
    value: 294806,
  },
  {
    id: "TGO",
    value: 478979,
  },
  {
    id: "THA",
    value: 610151,
  },
  {
    id: "TJK",
    value: 861439,
  },
  {
    id: "TKM",
    value: 310944,
  },
  {
    id: "TLS",
    value: 276730,
  },
  {
    id: "TTO",
    value: 131738,
  },
  {
    id: "TUN",
    value: 511412,
  },
  {
    id: "TUR",
    value: 452673,
  },
  {
    id: "TWN",
    value: 132408,
  },
  {
    id: "TZA",
    value: 708778,
  },
  {
    id: "UGA",
    value: 744137,
  },
  {
    id: "UKR",
    value: 826042,
  },
  {
    id: "URY",
    value: 390374,
  },
  {
    id: "USA",
    value: 601603,
  },
  {
    id: "UZB",
    value: 721700,
  },
  {
    id: "VEN",
    value: 406557,
  },
  {
    id: "VNM",
    value: 556198,
  },
  {
    id: "VUT",
    value: 751181,
  },
  {
    id: "PSE",
    value: 718444,
  },
  {
    id: "YEM",
    value: 558563,
  },
  {
    id: "ZAF",
    value: 715269,
  },
  {
    id: "ZMB",
    value: 633754,
  },
  {
    id: "ZWE",
    value: 831226,
  },
  {
    id: "KOR",
    value: 594217,
  },
];
const Geography = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ height: "75vh", border: `1px solid ${theme.palette.text.primary}` }}
    >
      <ResponsiveChoropleth
        data={data}
        features={geo.features}
        projectionScale={90}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor={theme.palette.text.primary}
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor={theme.palette.text.primary}
        borderWidth={0.5}
        borderColor="#152538"
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
              strokeWidth: 1,
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
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: theme.palette.text.primary,
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
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

export default Geography;
