import { Container } from '@openedx/paragon';
import { getConfig } from '@edx/frontend-platform/config';

const ChildPage = () => (
  <main>
    <Container className="py-5">
      <h1>Child Page</h1>
      <p>I am a child!  BASE_URL of the parent:</p>
      <p>{getConfig().BASE_URL}</p>
    </Container>
  </main>
);

export default ChildPage;
