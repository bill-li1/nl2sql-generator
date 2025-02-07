import { CODE_SCHEMAS as schemas } from "@/lib/schema"
import { Database } from "lucide-react"
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

export default function CodeView() {
  const nonKeywords = ["year", "day"]
  return (
    <div className="overflow-hidden">
      {schemas.map((schema) => (
        <div key={schema.name} className="pb-4">
          <div className="flex items-center gap-2 font-medium mb-2">
            <Database className="h-4 w-4" />
            <h3 className="text-lg">{schema.name}</h3>
          </div>
          <div className="rounded-lg text-sm bg-[#FAFAFA] border border-[#DEDEDE] p-3 overflow-auto">
            <Highlight
              theme={customTheme}
              code={schema.sql.trim()}
              language="sql"
            >
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
        </div>
      ))}
    </div>
  )
}
