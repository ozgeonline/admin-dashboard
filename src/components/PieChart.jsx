import React from 'react'
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";
import useMediaQuery from '@mui/material/useMediaQuery';

const PieChart = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ResponsivePie
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.redAccent[400],
              },
            },
            legend: {
              text: {
                fill: colors.redAccent[400],
              },
            },
            ticks: {
              line: {
                stroke: colors.redAccent[400],
                strokeWidth: 1,
              },
              text: {
                fill: colors.redAccent[400],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
          tooltip: {
            container: {
                color: colors.grey[300]
            }
        }
        }}
        margin={0}
        innerRadius={0.4}
        padAngle={0.7}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'blues' }}
        borderWidth={0}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0'
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[200]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        enableArcLinkLabels={matchesSm || matchesMd ? false : true}
        arcLabelsRadiusOffset={0.35}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        legends={[
            {
                anchor: `${matchesSm ? "top" : "top-left"}`,
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: `${matchesSm ? 40 :  30}`,
                itemsSpacing: 0,
                itemWidth: 40,
                itemHeight: 20,
                itemTextColor: `${colors.grey[200]}`,
                itemDirection: 'bottom-to-top',
                itemOpacity: 1,
                symbolSize: 30,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#3a86ff'
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default PieChart
