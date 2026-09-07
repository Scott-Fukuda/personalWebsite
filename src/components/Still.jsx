/** A bordered photo. Given `href`, the frame opens the full-size file in a new tab. */
export default function Still({ src, alt, caption, href, ratio = 'ratio-4-3', contain = false, className = '' }) {
  const inner = (
    <>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      {caption && <figcaption>{caption}</figcaption>}
    </>
  )

  const cls = `frame ${ratio} ${contain ? 'contain' : ''} ${className}`

  if (href) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer" title={`${alt} — open full size`}>
        {inner}
      </a>
    )
  }
  return <figure className={cls}>{inner}</figure>
}
