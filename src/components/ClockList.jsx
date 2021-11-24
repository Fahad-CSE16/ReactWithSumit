import React from 'react';
import Timeshow from './Timeshow';

export default function ClockList({quantities=[]}) {
    return (
        <div>
            {quantities.map(( key) => (
                <Timeshow key={key} />
            ))}
        </div>
    )
}
