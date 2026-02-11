import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
    const siteTitle = "S3 Academy | Elite Academic & Athletic Leadership";
    const fullTitle = title === "Home" ? siteTitle : `${title} | S3 Academy`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {canonical && <link rel="canonical" href={`https://s3academy.com${canonical}`} />}
        </Helmet>
    );
};
