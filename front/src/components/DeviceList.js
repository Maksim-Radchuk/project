import React from 'react';
import DeviceItem from './DeviceItem.js';

const DeviceList = () => {
    return (
        <div className="container">
            <div className="device-list">
                <DeviceItem />
                <DeviceItem />
                <DeviceItem />
                <DeviceItem />
                <DeviceItem />
                <DeviceItem />
                <DeviceItem />
                <DeviceItem />
                <DeviceItem />
            </div>
        </div>
    );
};

export default DeviceList;