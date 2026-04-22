import App from './App';

test('App component is defined', () => {
  // Basic smoke test to ensure the App component exports properly
  expect(App).toBeDefined();
  expect(typeof App).toBe('function');
});
