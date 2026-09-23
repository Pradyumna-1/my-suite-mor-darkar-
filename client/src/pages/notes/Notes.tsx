import {
  FileText,
  Star,
  Trash2,
  Users,
  Folder,
  Plus,
  Search,
  Grid2X2,
  List,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialNotes = [
  {
    id: "1",
    title: "Meeting Notes - Project X",
    description:
      "Discussed the project roadmap and features.",
    date: "May 18, 2025",
    color: "purple",
    favorite: true,
  },
  {
    id: "2",
    title: "Daily Thoughts",
    description:
      "A place to write down my daily thoughts and reflections.",
    date: "May 17, 2025",
    color: "yellow",
    favorite: false,
  },
  {
    id: "3",
    title: "Ideas for Mobile App",
    description:
      "Some innovative ideas for the new application.",
    date: "May 16, 2025",
    color: "green",
    favorite: true,
  },
  {
    id: "4",
    title: "Travel Plan",
    description:
      "Places to visit: Japan, Switzerland, Bali.",
    date: "May 15, 2025",
    color: "pink",
    favorite: false,
  },
  {
    id: "5",
    title: "Book List",
    description:
      "Books I want to read this year.",
    date: "May 14, 2025",
    color: "blue",
    favorite: true,
  },
  {
    id: "6",
    title: "Workout Routine",
    description:
      "My daily workout plan and exercises.",
    date: "May 13, 2025",
    color: "white",
    favorite: false,
  },
];

export default function Notes() {

  const navigate = useNavigate();

  const [notes] = useState(initialNotes);

  const [search, setSearch] =
    useState("");

  const [activeFilter, setActiveFilter] =
    useState("all");

  const filteredNotes = notes.filter((note) => {

    const matchesSearch =
      note.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      note.description
        .toLowerCase()
        .includes(search.toLowerCase());

    if (activeFilter === "favorites") {
      return matchesSearch && note.favorite;
    }

    return matchesSearch;
  });

  return (
    <div className="notes-app">

      {/* NOTES SIDEBAR */}

      <aside className="notes-sidebar">

        <div className="notes-sidebar-title">
          <FileText size={16} />
          <strong>Notes</strong>
        </div>

        <nav className="notes-nav">

          <button
            className={
              activeFilter === "all"
                ? "notes-nav-item active"
                : "notes-nav-item"
            }
            onClick={() =>
              setActiveFilter("all")
            }
          >
            <FileText size={15} />
            All Notes
          </button>

          <button
            className={
              activeFilter === "favorites"
                ? "notes-nav-item active"
                : "notes-nav-item"
            }
            onClick={() =>
              setActiveFilter("favorites")
            }
          >
            <Star size={15} />
            Favorites
          </button>

          <button className="notes-nav-item">
            <Trash2 size={15} />
            Trash
          </button>

          <button className="notes-nav-item">
            <Users size={15} />
            Shared with me
          </button>

        </nav>

        <div className="folder-title">
          Folders
        </div>

        <button className="notes-nav-item">
          <Folder size={15} />
          Work
        </button>

        <button className="notes-nav-item">
          <Folder size={15} />
          Personal
        </button>

        <button className="notes-nav-item">
          <Folder size={15} />
          Ideas
        </button>

        <button className="new-folder">
          + New Folder
        </button>

      </aside>

      {/* NOTES CONTENT */}

      <section className="notes-content">

        <div className="notes-toolbar">

          <div className="notes-heading">
            <h1>
              All Notes
            </h1>

            <span>
              {filteredNotes.length} notes
            </span>
          </div>

          <div className="notes-toolbar-actions">

            <div className="notes-page-search">

              <Search size={14} />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search notes..."
              />

            </div>

            <button
              className="add-note-button"
              onClick={() =>
                navigate("/notes/new")
              }
            >
              <Plus size={15} />
              Add Note
            </button>

            <button className="view-button active">
              <Grid2X2 size={15} />
            </button>

            <button className="view-button">
              <List size={15} />
            </button>

          </div>

        </div>

        <div className="notes-sort-row">

          <span>
            All Notes
          </span>

          <select>
            <option>
              Sort by: Latest
            </option>

            <option>
              Sort by: Oldest
            </option>
          </select>

        </div>

        <div className="reference-notes-grid">

          {filteredNotes.map((note) => (

            <article
              key={note.id}
              className={`reference-note-card ${note.color}`}
              onClick={() =>
                navigate(`/notes/${note.id}`)
              }
            >

              <div className="reference-note-top">

                <h3>
                  {note.title}
                </h3>

                <button
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  ⋮
                </button>

              </div>

              <p>
                {note.description}
              </p>

              <div className="reference-note-bottom">

                <span>
                  {note.date}
                </span>

                {note.favorite && (
                  <Star
                    size={14}
                    fill="currentColor"
                  />
                )}

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
}