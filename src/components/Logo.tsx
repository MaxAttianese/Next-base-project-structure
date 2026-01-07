type LogoProps = { width?: number; height?: number };
export function Logo({ width = 100, height = 30 }: LogoProps) {
  return <img src="/next.svg" width={width} height={height} alt="Logo" />;
}
