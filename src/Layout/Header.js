import React from 'react';

const Header = (props) => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar">
                    <a className="navbar-brand" href="#">{props.title}</a>
                </nav>
        </div>
    );
};

export default Header;