import React from "react";

/**
 * Transforma URLs em links clicáveis.
 * Use em qualquer texto de balão: {linkify(texto)}
 */
export function linkify(text: string) {
  // pega http(s)://... até o primeiro espaço/que bra de linha
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.split(urlRegex).map((part, i) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-fuchsia-300 hover:text-fuchsia-200"
        >
          {part}
        </a>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}
