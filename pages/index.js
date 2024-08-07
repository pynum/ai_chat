// pages/index.js
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>AI Customer Support</h1>
      <Chatbot />
    </div>
  );
}
