import * as React from 'react';
import {Form, Formik, Field} from "formik";
import {useState} from "react";
import {Redirect} from "react-router-dom";

export const BookForm = (props) => {

    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Redirect to="/catalog"/>;
    }

    return <div className="formBackground">
        <div className="formCard">
            <Formik
                initialValues={{
                    title: '',
                    author: '',
                    isRead: ''
                }}
                onSubmit={
                    (values) =>
                        props.onSubmit(JSON.stringify(values))
                            .then(_ => setRedirect(true))
                }
            >
                {({values}) => <Form>
                    <label htmlFor="title">title</label>
                    <Field id="title" name="title"/>
                    <label htmlFor="author">author</label>
                    <Field id="author" name="author"/>
                    <label>
                        <Field type="checkbox" name="isRead"/>
                        {`${values.isRead}`}
                    </label>

                    <button type="submit">Submit</button>
                </Form>}
            </Formik>
        </div>
    </div>;
};