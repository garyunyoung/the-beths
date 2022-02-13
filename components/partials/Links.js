function ExternalLink({ className = '', href, text }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

export default ExternalLink