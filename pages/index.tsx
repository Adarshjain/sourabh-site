import React from 'react';
import {withApollo} from '../libs/apollo';
// import { useQuery } from '@apollo/react-hooks';
// import { ALL_CHARACTERS } from '../gql/allCharacters';
import Nav from "../comps/nav";
import Gender from "../comps/Gender";
import ProductList from "../comps/ProductList";
import Page from "../comps/PageContainer";

const IndexPage = () => {
    // const { loading, error, data } = useQuery(ALL_CHARACTERS);
    // if (error) return <h1>Error</h1>;
    // if (loading) return <h1>Loading...</h1>;

    return (
        <Page>
            <Nav/>
            <Gender/>
            <ProductList/>
        </Page>
    );
};

export default IndexPage;