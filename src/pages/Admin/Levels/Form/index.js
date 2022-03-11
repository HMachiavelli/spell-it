import React, { useState } from "react";

import { NotificationManager } from "react-notifications";
import FormActions from "../../../../components/Admin/FormActions";

function LevelForm() {
  const [loading, setLoading] = useState(false);

  const send = (evt) => {
    evt.preventDefault();

    setLoading(true);

    setTimeout(() => {
      NotificationManager.success("O registro foi salvo!", "Sucesso!");
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className="form-title">
        <h2>Níveis de dificuldade &gt; Criar nível</h2>
      </div>

      <div className="form-wrapper">
        <form onSubmit={send}>
          <label>Descrição:</label>
          <input></input>

          <FormActions loading={loading} />
        </form>
      </div>
    </>
  );
}

export default LevelForm;
