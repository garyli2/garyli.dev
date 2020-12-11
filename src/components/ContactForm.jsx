import React from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles({
    formField: {
        width: "25%",
    },

    formButton: {
        marginTop: '1%'
    }

})

const ContactForm = () => {
    const classes = useStyles();

    return (
        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <TextField
                required
                className={classes.formField}
                id="name"
                name="name"
                label="Name"
                variant="filled"
            />
            <TextField
                required
                className={classes.formField}
                id="email"
                name="email"
                label="Email"
                style={{ marginLeft: "2%" }}
                variant="filled"
            />
            <br />

            <TextField
                id="inquiry"
                name="inquiry"
                label="Message for me"
                multiline
                required
                style={{ width: "calc(25% + 25% + 2%)", marginTop: "1.5%" }}
                rows={8}
                variant="filled"
            /><br />
            <Button className={classes.formButton} type="submit" variant="contained" color="primary">Submit</Button>
        </form>
    );
};

export default ContactForm;