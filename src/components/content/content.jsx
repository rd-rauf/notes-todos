import { useState, useEffect } from "react";
import Categories from "../categories/categories";
import Entries from "../entries/entries";
import Notes from "../notes/notes";
import ContentArea from "./content-area";

import { getCategories } from "../../services/category.service";
import { getNotes } from "../../services/note.service";
import { getEntries } from "../../services/entry.service";

import "./content.scss";
import TodosContainer from "../todos/todos-container";

const Content = () => {
  /* const [categories, setCategories] = useState([]);
  const [notes, setNotes] = useState([]);
  const [entries, setEntries] = useState([]);

  const loadEntries = (noteId) => {
    const fetchEntries = async () => {
      const response = await getEntries(noteId);
      setEntries(response.data);
    };
    fetchEntries();
  };

  const loadNotes = (categoryId) => {
    const fetchNotes = async () => {
      const response = await getNotes(categoryId);
      setNotes(response.data);
      setEntries([]);
    };
    fetchNotes();
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.data);
      setNotes([]);
    };
    fetchCategories();
  }, []); */

  return (
    <>
      <ContentArea>
        <div className="main-container">
          {/* <Categories
            categories={categories}
            loadNotes={(categoryId) => loadNotes(categoryId)}
          />
          <Notes notes={notes} loadEntries={(noteId) => loadEntries(noteId)} />
          <Entries entries={entries} /> */}
          <TodosContainer />
        </div>
      </ContentArea>
    </>
  );
};

export default Content;
