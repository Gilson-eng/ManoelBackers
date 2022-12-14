import React from "react";
import { Form } from "react-bootstrap";

export default function TemplateForm({ titulo, children }) {
    return (
        <>
            <h4 className="d-flex justify-content-center">{titulo}</h4>
            <Form>
                {children}
            </Form>
        </>
    );
}