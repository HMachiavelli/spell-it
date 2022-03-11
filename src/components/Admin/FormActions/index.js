import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../Button";

import "./styles.css";

function FormActions(props) {
  const goBack = useNavigate();

  return (
    <div className="form-action">
      <Button
        onClick={() => goBack(-1)}
        type="button"
        theme="secondary"
        text="Voltar"
        disabled={props.loading}
      ></Button>
      <Button
        type="submit"
        theme="primary"
        text={props.loading ? "Aguarde..." : "Salvar"}
        disabled={props.loading}
      ></Button>
    </div>
  );
}

export default FormActions;
