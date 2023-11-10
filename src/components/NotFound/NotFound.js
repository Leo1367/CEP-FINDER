import { NotFoundContainer } from './NotFoundStyles';

export default function NotFoundPage({ error }) {

  return (
    <NotFoundContainer>
      <strong>{error}</strong>
    </NotFoundContainer>
  )
}