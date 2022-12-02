import React from "react";

import { Field, Formik } from "formik";
import { ReadStatusEnum } from "@shared/types/book.interface";

interface IForm {
  onFormSubmit(data: any): void;
}

export default function Form(props: IForm) {
  const { onFormSubmit } = props;
  return (
    <Formik
      initialValues={{
        title: "",
        image: "",
        type: "книга",
        status: ReadStatusEnum.planned,
        myRating: "",
        chaptersRead: "",
        chapters: "",
      }}
      onSubmit={onFormSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          {/* TODO: сделать красиво */}
          <input
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            placeholder={"Title"}
          />
          {errors.title && touched.title && errors.title}

          <Field as="select" required name={"type"}>
            <option value={"книга"}>книга</option>
            <option value={"новелла"}>новелла</option>
          </Field>

          <Field as="select" required name={"status"}>
            <option value={ReadStatusEnum.planned}>
              {ReadStatusEnum.planned}
            </option>
            <option value={ReadStatusEnum.read}>{ReadStatusEnum.read}</option>
            <option value={ReadStatusEnum.reread}>
              {ReadStatusEnum.reread}
            </option>
          </Field>

          <input
            type="text"
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
            placeholder={"image"}
          />
          {errors.image && touched.image && errors.image}

          <input
            type="number"
            name="myRating"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.myRating}
            placeholder={"myRating"}
          />
          {errors.myRating && touched.myRating && errors.myRating}

          <input
            type="number"
            name="chaptersRead"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.chaptersRead}
            placeholder={"chaptersRead"}
          />
          {errors.chaptersRead && touched.chaptersRead && errors.chaptersRead}
          <input
            type="number"
            name="chapters"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.chapters}
            placeholder={"chapters"}
          />
          {errors.chapters && touched.chapters && errors.chapters}
          <button
            type="submit"
            //  disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
