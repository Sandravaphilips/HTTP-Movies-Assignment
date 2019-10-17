import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validate = () => {
    return {};
};

export default function UpdateMovie(props) {
    const {getCurrentMovie, updateMovie, currentMovieId} = props;
    <Formik
         
        validate={validate}
        initialValues={{
        title: getCurrentMovie().title,
        director: getCurrentMovie().director,
        metascore: getCurrentMovie().metascore,
        stars: getCurrentMovie().stars,
        }}
        onSubmit={({ title, director, metascore, stars }) => {
        updateMovie({
            id: currentMovieId,
            title,
            director,
            metascore,
            stars,
        });
        }}
        render={() => (
            <Form>
                <Field name='title' />
                <ErrorMessage name='title' component='span' />

                <Field name='director' />
                <ErrorMessage name='director' component='span' />

                <Field name='metascore' />
                <ErrorMessage name='director' component='span' />

                <Field name='stars' />
                <ErrorMessage name='stars' component='span' />

                <input type='submit' />
            </Form>
        )}
    />
}