import React from 'react';

import './SidebarRow.css';

import Avatar from '@mui/material/Avatar';

const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {/* {src && <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GiYUuQgnSjnBqLFMmwgIIk-EnHwY-Ori15MP5bQ=s96-c" />} */}

            {Icon && <Icon />}

            <h4>{title}</h4>

        </div>
    );
};

export default SidebarRow;