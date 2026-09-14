import { useRef, useState } from 'react'
import { visuals } from '../../data/visuals'
export default function WorkVisual({ id }: { id: string }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState(0)
  const visual = visuals[id]
  if (!visual?.images?.length) return null
  const image = visual.images[selected]
  function open(index: number) {
    setSelected(index)
    dialog.current?.showModal()
  }
  return (
    <figure className={`work-visual visual-${id} ${visual.compact ? 'compact-media' : ''}`}>
      {visual.compact ? (
        <div className="app-screen-strip">
          {visual.images.map((item, index) => (
            <button
              className="visual-open"
              key={item.src}
              onClick={() => open(index)}
              aria-label={`Enlarge ${id} ${item.label}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
              />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      ) : (
        <>
          <button
            className="visual-open media-thumbnail"
            onClick={() => open(selected)}
            aria-label={`Enlarge ${id} visual`}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
            />
            <span className="expand-mark" aria-hidden="true">
              ⤢
            </span>
          </button>
          {visual.images.length > 1 && (
            <div className="media-choices" aria-label={`${id} images`}>
              {visual.images.map((item, index) => (
                <button
                  key={item.src}
                  aria-pressed={selected === index}
                  onClick={() => setSelected(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </>
      )}
      <figcaption>{visual.caption}</figcaption>
      <dialog
        ref={dialog}
        className={`visual-dialog ${visual.compact ? 'compact-dialog' : ''}`}
        aria-label={image.label}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
      >
        <button autoFocus className="button dialog-close" onClick={() => dialog.current?.close()}>
          Close ✕
        </button>
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
        <p>
          {visual.caption} · {image.label}
        </p>
      </dialog>
    </figure>
  )
}
