/** Insere dados estruturados JSON-LD no HTML renderizado no servidor. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // escapa "<" para impedir fechamento acidental da tag <script>
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
