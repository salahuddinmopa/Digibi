import Image from "next/image";

interface ArticleImageProps {
  src: string;
  alt: string;
  caption: string;
}

export function ArticleImage({ src, alt, caption }: ArticleImageProps) {
  return (
    <figure style={{ margin: '48px 0', padding: 0 }}>
      <div style={{
        width: '100%',
        aspectRatio: '4/3',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px',
        border: '1px solid var(--border-gold)',
      }}>
        <Image
          src={src}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          boxShadow: 'inset 0 0 60px rgba(14,13,11,0.3)',
          borderRadius: '12px',
          pointerEvents: 'none',
        }} />
      </div>
      <figcaption style={{
        marginTop: '14px',
        fontSize: '12.5px',
        fontWeight: 400,
        fontStyle: 'italic',
        color: 'var(--muted)',
        lineHeight: 1.6,
        paddingLeft: '16px',
        borderLeft: '2px solid var(--gold-primary)',
        opacity: 0.8,
      }}>
        {caption}
      </figcaption>
    </figure>
  );
}
