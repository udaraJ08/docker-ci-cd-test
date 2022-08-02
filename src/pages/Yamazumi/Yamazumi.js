import React from 'react'
import {Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis} from "recharts";

function CustomizedTick(props) {
    // eslint-disable-next-line react/prop-types
    const {x, y} = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} fill="#666" transform="rotate(-35)">
                <tspan textAnchor="middle" dy="0">
                    Line 1
                </tspan>
                <tspan className="text-danger" textAnchor="middle" dy="20">
                    Line 2
                </tspan>
                <tspan textAnchor="middle" dy="30">
                    Line 3
                </tspan>
            </text>
        </g>
    );
}

function CustomizedTickDouble(props) {
    // eslint-disable-next-line react/prop-types
    const {x, y} = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={50} dy={16} fill="#666" transform="rotate(0)">
                <tspan textAnchor="middle" dy="0">
                    Kamala
                </tspan>
            </text>
        </g>
    );
}

const data = [
    {
        name: 'Page A',
        arrow: '⬆',
        age: '20',
        c: 'step 1',
        uv: 4000,
        pv: 2400,
    },
    {
        name: 'Page B',
        arrow: '⬆',
        age: '20',
        c: 'step 1',
        uv: 3000,
        pv: 1398,
    },
    {
        name: 'Page C',
        arrow: '⬆',
        age: '20',
        c: 'step 1',
        uv: 2000,
        pv: 9800,
    },
    {
        name: 'Page D',
        arrow: '⬆',
        age: '20',
        c: 'step 1',
        uv: 2780,
        pv: 3908,
    },
    {
        name: 'Page E',
        arrow: '⬆',
        age: '20',
        c: 'step 1',
        uv: 1890,
        pv: 4800,
    },
    {
        name: 'Page F',
        arrow: '⬆',
        age: '20',
        c: 'step 1',
        uv: 2390,
        pv: 3800,
    },
    {
        name: 'Page G',
        arrow: '⬆',
        age: '20',
        c: 'step 1',
        uv: 3490,
        pv: 4300,
    },
];

const Yamazumi = () => {

    return <div className="p-0 w-100 mt-5">
        <div>
            <p className="f-Staatliches text-primary text-large">Memory chart</p>
        </div>
        <div>
            <div className="recharts-wrapper" style={{height: '100vh'}}>
                <ResponsiveContainer>
                    <BarChart margin={{top: 50, left: 0, right: 0, bottom: 100}} width={730} data={data}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis tick={<CustomizedTick/>}/>
                        <XAxis axisLine={false} tick={<CustomizedTickDouble />} dataKey='name' xAxisId="1" allowDuplicatedCategory={false} />
                        <Tooltip/>
                        <Bar dataKey="pv" fill="#8884d8">
                            <LabelList fill='crimson' dataKey="arrow" style={{fontSize: 30}} position="top"/>
                        </Bar>
                        <Bar dataKey="uv" fill="#82ca9d"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
}

export default Yamazumi
