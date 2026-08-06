import type { ReactNode } from 'react'
import type { CodeSessionData } from '@/data/sessions'

/** Lightweight token highlights for static session lines */
function highlightLine(line: string): ReactNode {
  if (
    line.trimStart().startsWith('#') ||
    line.trimStart().startsWith('"""') ||
    line.includes('"""')
  ) {
    return <span className="tok-cm">{line}</span>
  }

  const parts: ReactNode[] = []
  let key = 0

  const pushPlain = (text: string) => {
    if (!text) return
    parts.push(<span key={key++}>{text}</span>)
  }

  let remaining = line
  const commentIdx = remaining.indexOf('#')
  let comment = ''
  if (
    commentIdx >= 0 &&
    !remaining.slice(0, commentIdx).includes("'") &&
    !remaining.slice(0, commentIdx).includes('"')
  ) {
    comment = remaining.slice(commentIdx)
    remaining = remaining.slice(0, commentIdx)
  }

  const keywordRe =
    /\b(def|return|async|await|import|from|class|if|else|for|in|with|as|True|False|None)\b/g
  let last = 0
  let match: RegExpExecArray | null
  const buffer = remaining

  while ((match = keywordRe.exec(buffer)) !== null) {
    pushPlain(buffer.slice(last, match.index))
    parts.push(
      <span key={key++} className="tok-kw">
        {match[0]}
      </span>
    )
    last = match.index + match[0].length
  }
  pushPlain(buffer.slice(last))

  if (comment) {
    parts.push(
      <span key={key++} className="tok-cm">
        {comment}
      </span>
    )
  }

  return <>{parts}</>
}

function renderLine(line: string, language: string): ReactNode {
  if (language === 'JSON' || language === 'YAML') {
    if (line.includes(':')) {
      const idx = line.indexOf(':')
      const k = line.slice(0, idx)
      const rest = line.slice(idx + 1)
      return (
        <>
          <span className="tok-str">{k}</span>
          <span className="tok-op">:</span>
          <span className="tok-num">{rest}</span>
        </>
      )
    }
    return <span className="tok-op">{line}</span>
  }

  if (/\bdef\s+\w+/.test(line) || /\basync\s+def\s+\w+/.test(line)) {
    return line.split(/(\bdef\b|\basync\b|\b\w+(?=\())/g).map((chunk, i) => {
      if (chunk === 'def' || chunk === 'async') {
        return (
          <span key={i} className="tok-kw">
            {chunk}
          </span>
        )
      }
      if (chunk && /^\w+$/.test(chunk) && line.includes(`${chunk}(`)) {
        return (
          <span key={i} className="tok-fn">
            {chunk}
          </span>
        )
      }
      return <span key={i}>{chunk}</span>
    })
  }

  return highlightLine(line)
}

interface CodeSessionProps {
  session: CodeSessionData
  className?: string
  showCaret?: boolean
}

export default function CodeSession({
  session,
  className = '',
  showCaret = true,
}: CodeSessionProps) {
  const active = session.files.find((f) => f.active) ?? session.files[0]
  const lines = active?.lines ?? []

  return (
    <div className={`code-session ${className}`} role="img" aria-label={session.title}>
      <div className="code-session__titlebar">
        <div className="code-session__traffic" aria-hidden="true">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        <div className="code-session__tabs">
          {session.files.map((file) => (
            <div
              key={file.name}
              className={`code-session__tab ${file === active ? 'is-active' : ''}`}
            >
              {file.name}
              {file.unsaved ? ' ●' : ''}
            </div>
          ))}
        </div>
      </div>

      <div className="code-session__body">
        <div className="code-session__gutter" aria-hidden="true">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <div className="code-session__code">
          {lines.map((line, i) => (
            <div key={i}>
              {renderLine(line, active.language)}
              {showCaret && i === lines.length - 1 ? (
                <span className="code-session__caret" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {session.terminal && session.terminal.length > 0 ? (
        <div className="code-session__terminal">
          <div className="code-session__terminal-label">Terminal</div>
          {session.terminal.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      ) : null}

      {session.statusBar ? (
        <div className="code-session__statusbar">
          {session.statusBar.branch ? <span>{session.statusBar.branch}</span> : null}
          {session.statusBar.language ? <span>{session.statusBar.language}</span> : null}
          {session.statusBar.encoding ? <span>{session.statusBar.encoding}</span> : null}
          {session.statusBar.position ? <span>{session.statusBar.position}</span> : null}
        </div>
      ) : null}
    </div>
  )
}
