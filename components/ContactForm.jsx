import React from "react";
import { TextField, Button } from "@material-ui/core/";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    return (
        <form name="contact" method="post" className={styles.formContainer}>
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.shortFieldsContainer}>
                <TextField
                    required
                    className={styles.shortFormField}
                    id="name"
                    name="name"
                    label="Name"
                    variant="filled"
                />
                <TextField
                    required
                    className={styles.shortFormField}
                    id="email"
                    name="email"
                    label="Email"
                    style={{ marginLeft: "2%" }}
                    variant="filled"
                />
            </div>

            <TextField
                id="inquiry"
                name="inquiry"
                label="Message for me"
                multiline
                required
                className={styles.longFormField}
                rows={8}
                variant="filled"
            />
            <div className={styles.submitBtnContainer}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >Submit
            </Button>
            </div>
        </form>
    );
};

export default ContactForm;
