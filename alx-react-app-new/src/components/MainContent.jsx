function MainContent() {
  return (
    <main style={{ backgroundColor: '#eef', padding: '20px', minHeight: '200px' }}>
      <p style={{ fontSize: '18px', color: '#333' }}>
        Here are some cities I would love to visit one day:
      </p>
      <ul style={{ listStyleType: 'square', marginLeft: '20px' }}>
        <li>Accra</li>
        <li>Paris</li>
        <li>Cape Town</li>
        <li>New York</li>
      </ul>
    </main>
  );
}

export default MainContent;
