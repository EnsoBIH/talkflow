// Structured data for search engines, rendered on the server as a plain
// <script type="application/ld+json">. "<" is escaped so no string in the data
// can close the tag early.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
