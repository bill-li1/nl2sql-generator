import { Highlight, themes } from "prism-react-renderer"

const customTheme = {
  ...themes.oneLight,
  styles: [
    ...themes.oneLight.styles,
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#383a42", // Same color as before for brackets and operators
      },
    },
  ],
}

const nonKeywords = ["year", "day"]

interface Props {
  code: string
}

export default function CodeBlock({ code }: Props) {
  return (
    <div className="rounded-[0.375rem] text-sm bg-[#FAFAFA] border border-[#DEDEDE] p-3">
      <Highlight theme={customTheme} code={code.trim()} language="sql">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, margin: 0 }}>
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line })}
                style={{
                  whiteSpace: "pre",
                }}
              >
                {line.map((token, key) => {
                  if (nonKeywords.includes(token.content)) {
                    return (
                      <span key={key} className="token plain">
                        {token.content}
                      </span>
                    )
                  }
                  return <span key={key} {...getTokenProps({ token })} />
                })}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
