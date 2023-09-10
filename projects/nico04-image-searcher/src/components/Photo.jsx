export default function Photo({ photo, onOpenPhoto }) {
  return (
    <article
      key={photo.id}
      onClick={onOpenPhoto}
    >
      <img
        src={photo.urls.regular}
        alt={photo.alt_description}
      />

      <p>
        {photo.description}
      </p>
    </article>
  )
}
