import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../autocomplete';
import './appBar.css';

function Page(props) {

    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
    } = props;

      return (
            <AppBar position="static">
                <ToolBar className="appbar">
                    <Typography variant="h6" color="inherit">
                            Programas
                    </Typography>

                    <Autocomplete 
                        text = {text}
                        suggestions = {suggestions}
                        onChangeText = {onChangeText}
                        onChangeSelection = {onChangeSelection}
                        
                    />

                    <AccountCircle />
                </ToolBar>
            </AppBar>
        );
}

export default Page;
