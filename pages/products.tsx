import React from 'react';
import {withApollo} from '../libs/apollo';
// import { useQuery } from '@apollo/react-hooks';
// import { ALL_CHARACTERS } from '../gql/allCharacters';
import Nav from "../comps/nav";
import Page from "../comps/PageContainer";

const Products = () => {
    // const { loading, error, data } = useQuery(ALL_CHARACTERS);
    // if (error) return <h1>Error</h1>;
    // if (loading) return <h1>Loading...</h1>;

    return (
        <Page>
            <Nav/>

        </Page>
    );
};

export default Products;