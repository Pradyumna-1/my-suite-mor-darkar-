import {
  ArrowLeft,
  Check,
  Share2,
  MoreVertical,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  Image,
  RotateCcw,
  Clock3,
} from "lucide-react";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const demoNotes: Record<string, any> = {
  "1": {
    title: "Meeting Notes - Project X",
    category: "Work",
    content: `
      <h2>Project Roadmap</h2>

      <p>
        We discussed the overall roadmap for the project.
        It includes several milestones and key deliverables.
      </p>

      <h3>Key Points</h3>

      <ul>
        <li>User authentication</li>
        <li>Dashboard design</li>
        <li>API integration</li>
        <li>Testing and deployment</li>
      </ul>

      <h3>Next Steps</h3>

      <ol>
        <li>Finalize the design by next week.</li>
        <li>Setup the development environment.</li>
        <li>Start implementing the core features.</li>
      </ol>
    `,
  },
};

export default function NoteEditor() {
  const navigate = useNavigate();
  const { id } = useParams();

  const existingNote = id
    ? demoNotes[id]
    : null;

  const [title, setTitle] = useState(
    existingNote?.title || "Untitled Note"
  );

  const [category, setCategory] = useState(
    existingNote?.category || "Personal"
  );

  const [content, setContent] = useState(
    existingNote?.content || ""
  );

  const [saved, setSaved] = useState(true);

  const handleContentChange = (
    event: React.FormEvent<HTMLDivElement>
  ) => {
    setContent(
      event.currentTarget.innerHTML
    );

    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
  };

  const execCommand = (
    command: string,
    value?: string
  ) => {
    document.execCommand(
      command,
      false,
      value
    );

    setSaved(false);
  };

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const imageUrl =
        reader.result as string;

      execCommand(
        "insertImage",
        imageUrl
      );
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="note-editor-page">

      {/* TOP EDITOR HEADER */}

      <div className="note-editor-header">

        <button
          className="back-notes-button"
          onClick={() => navigate("/notes")}
        >
          <ArrowLeft size={15} />

          <span>
            Back to Notes
          </span>
        </button>

        <div className="editor-header-actions">

          <div className="save-status">

            <Check size={14} />

            <span>
              {saved ? "Saved" : "Unsaved changes"}
            </span>

          </div>

          <button className="editor-share-button">
            <Share2 size={14} />
            Share
          </button>

          <button className="editor-more-button">
            <MoreVertical size={16} />
          </button>

        </div>

      </div>

      {/* EDITOR BODY */}

      <div className="note-editor-container">

        {/* TITLE */}

        <div className="note-title-row">

          <input
            className="note-title-input"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              setSaved(false);
            }}
            placeholder="Untitled Note"
          />

          <select
            className="note-category-select"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
              setSaved(false);
            }}
          >
            <option>
              Personal
            </option>

            <option>
              Work
            </option>

            <option>
              Ideas
            </option>

            <option>
              Important
            </option>
          </select>

        </div>

        {/* TOOLBAR */}

        <div className="editor-toolbar">

          <select
            className="format-select"
            defaultValue="paragraph"
            onChange={(event) =>
              execCommand(
                "formatBlock",
                event.target.value
              )
            }
          >
            <option value="paragraph">
              Paragraph
            </option>

            <option value="h2">
              Heading 2
            </option>

            <option value="h3">
              Heading 3
            </option>
          </select>

          <div className="toolbar-divider" />

          <button
            onClick={() =>
              execCommand("bold")
            }
            title="Bold"
          >
            <Bold size={15} />
          </button>

          <button
            onClick={() =>
              execCommand("italic")
            }
            title="Italic"
          >
            <Italic size={15} />
          </button>

          <button
            onClick={() =>
              execCommand("underline")
            }
            title="Underline"
          >
            <Underline size={15} />
          </button>

          <div className="toolbar-divider" />

          <button
            onClick={() =>
              execCommand(
                "insertUnorderedList"
              )
            }
            title="Bullet list"
          >
            <List size={15} />
          </button>

          <button
            onClick={() =>
              execCommand(
                "insertOrderedList"
              )
            }
            title="Numbered list"
          >
            <ListOrdered size={15} />
          </button>

          <div className="toolbar-divider" />

          <button
            onClick={() => {
              const url =
                window.prompt(
                  "Enter URL"
                );

              if (url) {
                execCommand(
                  "createLink",
                  url
                );
              }
            }}
            title="Add link"
          >
            <Link size={15} />
          </button>

          <label
            className="toolbar-button"
            title="Upload image"
          >
            <Image size={15} />

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={
                handleImageUpload
              }
            />
          </label>

        </div>

        {/* CONTENT */}

        <div
          className="note-content-editor"
          contentEditable
          suppressContentEditableWarning
          dangerouslySetInnerHTML={{
            __html: content,
          }}
          onInput={
            handleContentChange
          }
        />

        {/* FOOTER */}

        <div className="note-editor-footer">

          <span>
            Created: May 18, 2025
          </span>

          <span>
            Updated: May 18, 2025
          </span>

          <button
            className="save-note-button"
            onClick={handleSave}
          >
            <Check size={13} />

            Save
          </button>

        </div>

      </div>

      {/* REVISION HISTORY */}

      <section className="revision-section">

        <div className="revision-heading">

          <Clock3 size={16} />

          <h2>
            Revision History
          </h2>

        </div>

        <div className="revision-list">

          <div className="revision-item">

            <div className="revision-icon current">
              <Check size={12} />
            </div>

            <div className="revision-info">

              <strong>
                May 18, 2025 — 10:42 AM
              </strong>

              <span>
                Current version
              </span>

            </div>

          </div>

          <div className="revision-item">

            <div className="revision-icon">
              <RotateCcw size={12} />
            </div>

            <div className="revision-info">

              <strong>
                May 17, 2025 — 06:20 PM
              </strong>

              <span>
                Previous version
              </span>

            </div>

            <button className="restore-button">
              Restore
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}