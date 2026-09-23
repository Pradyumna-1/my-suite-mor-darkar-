import {
  Copy,
  Share2,
} from "lucide-react";

const notes = [
  "Meeting Notes - Project X",
  "Daily Thoughts",
  "Ideas for Mobile App",
  "Travel Plan",
];

export default function Sharing() {

  const share = async (
    title: string
  ) => {

    const url =
      window.location.href;

    if (navigator.share) {

      await navigator.share({
        title,
        url,
      });

    } else {

      await navigator.clipboard.writeText(
        url
      );

      alert(
        "Share link copied."
      );
    }
  };

  return (
    <div className="page">

      <div className="module-header">

        <div>

          <h1>
            <Share2 size={20} />
            Sharing
          </h1>

          <p>
            Share your notes with friends.
          </p>

        </div>

      </div>

      <div className="sharing-list">

        {notes.map((note) => (

          <section
            className="card sharing-item"
            key={note}
          >

            <div>

              <strong>
                {note}
              </strong>

              <span>
                Create a shareable link
                for this note.
              </span>

            </div>

            <button
              className="secondary-button"
              onClick={() =>
                share(note)
              }
            >
              <Copy size={14} />
              Copy / Share
            </button>

          </section>

        ))}

      </div>

    </div>
  );
}