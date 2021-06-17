import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius:50px;
    background: ${ ( {primary} ) => (primary ? '#2c35c3' : '#010606') 
    };

    white-space:nowrap;
    padding: ${ ( {big} ) => (big ? '14px 48px' : '12px 30px') 
    };

    color: ${ ( {dark} ) => ( dark ? 'white' : 'black' )
    };

    font-size: ${ ( {fontbig} ) => (fontbig ? '20px' : '16px' ) 
    };

    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.9 ease-in-out;

    &:hover {
        
        background: ${ ( {primary} ) => (primary ? 'white' : '#00009C')};
        color: ${ ( {dark} ) => (dark ? 'black' : 'white') };
        transition: all 0.9 ease-in-out;
    }
`