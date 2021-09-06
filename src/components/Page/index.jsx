import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const Page = ({ title, children }) => (
    <div>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        {children}
    </div>
);

Page.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Page;
