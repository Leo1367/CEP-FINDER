import { Icon, LogoContainer, LogoText } from "./LogoCepStyles";

export default function LogoCep() {
  return (
    <LogoContainer>
      <LogoText>
        <Icon color="#00D2DF" />
        CEP<br /> <span style={{ color: "#873EFF" }}>FINDER</span>
      </LogoText>
    </LogoContainer>
  )
}