import Layout from "../Store/layout";
import Brandto from "../Store/brandto";
import Product from "../Store/Product";
import Custum from "../Store/custum";
import Cro from "../Store/cro";
import Cursor from "../Cursor";
import Head from "../Store/header";
import ScrollTo from "../Blog/scroll";
import { Helmet } from 'react-helmet-async';
function Store() {
    return (
        <>
       
            <Head />
            <Layout />
            <Brandto />
            <Product />
            <Custum />
            <Cro />
            <Cursor />
            <ScrollTo/>
        </>
    )
}
export default Store;