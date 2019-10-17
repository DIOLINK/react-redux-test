import React, {Fragment} from 'react';
import CssBas from '@material-ui/core/CssBaseline';
import AppBar from '../appBar';

function Page(props) {
    return (
        <Fragment>
            <CssBas />

            <AppBar />
        </Fragment>     
    );
}

export default Page;
