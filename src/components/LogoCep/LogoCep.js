import { Icon, LogoText, SpanCep } from "./LogoCepStyles";

export default function LogoCep() {
  return (
    <>
      <LogoText>
        <Icon />
        <p>
          CEP<br /> <SpanCep>FINDER</SpanCep>
        </p>
      </LogoText>
    </>
  )
}