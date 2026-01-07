import Image from 'next/image';

type LogoProps = {
  path?: string;
  width?: number;
  height?: number;
};

export function Logo({ path = '/next.svg', width = 100, height = 30 }: LogoProps) {
  return <Image src={path} width={width} height={height} alt="Logo" />;
}
