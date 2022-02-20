export function ExternalLink({ className = '', href, children }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >{children}
    </a>
  )
}

export function InternalLink({ className = '', href, children }) {
  return (
    <a
      className={className}
      href={href}
    >{children}
    </a>
  )
}
