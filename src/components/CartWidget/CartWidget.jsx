import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function BadgeVisibility() {
    const [count, setCount] = React.useState(1);
    

    return (
        <Box
            sx={{
                color: 'red',
                display: 'flex',
                flexDirection: 'column',
                '& > *': {
                    marginBottom: 2,
                },
                '& .MuiBadge-root': {
                    marginRight: 4,
                },
            }}
        >
            <div>
                <Badge onClick={() => {
                            setCount(Math.max(count + 1, 0));
                        }}color="secondary" badgeContent={count}>
                    <ShoppingCartIcon />
                </Badge>
                
            </div>
        </Box>
    );
}
