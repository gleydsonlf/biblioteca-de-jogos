import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

// Não estou precisando utilizar, mas deixar como exemplo para caso tiver algum erro de tipagem
NewGameForm.prototype = {
  addGame: PropTypes.func,
};

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = ev => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id="title" label={"Título"} value={title} setValue={setTitle} />
      <TextInput id="cover" label={"Capa (URL da imagem)"} value={cover} setValue={setCover} />
      <button>Adicionar</button>
    </form>
  );
}
