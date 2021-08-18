import * as React from 'react';
import {Form, Formik, Field} from "formik";
import {useState} from "react";
import {Redirect} from "react-router-dom";

export const BookForm = (props) => {

    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Redirect to="/catalog"/>;
    }

    return <Formik
        initialValues={{
            title: '',
            author: '',
            genre: '',
            year: ''
        }}
        onSubmit={
            (values) =>
                props.onSubmit(JSON.stringify(values))
                    .then(_ => setRedirect(true))
        }
    >
        <Form>
            <label htmlFor="title">title</label>
            <Field id="title" name="title"/>
            <label htmlFor="author">author</label>
            <Field id="author" name="author"/>
            <label htmlFor="genre">genre</label>
            <Field id="genre" name="genre"/>
            <label htmlFor="year">year</label>
            <Field id="year" name="year"/>

            <button type="submit">Submit</button>
        </Form>
    </Formik>;
};