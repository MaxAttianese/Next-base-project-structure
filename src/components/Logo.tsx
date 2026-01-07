import Image from 'next/image';

type LogoProps = { width?: number; height?: number };

export function Logo({ width = 100, height = 30 }: LogoProps) {
  return (
    <div style={{ position: 'relative', width, height }}>
      <Image src="/next.svg" alt="Logo" fill style={{ objectFit: 'contain' }} />
    </div>
  );
}
