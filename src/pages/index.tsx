import './App.css'

function App() {
  

  return (
  
 
    <nav style={styles.nav}>
       <div style={styles.container}>
         <h2 style={styles.logo}>MyApp</h2>
          <ul style={styles.navLinks}>
           <li style={styles.link}> Home</li>
           <li style={styles.link}> About</li>
           <li style={styles.link}> Contact Us</li>
          </ul>
      </div>
    </nav> 
 
     
  )
}
const styles: { [key: string]: React.CSSProperties } = {
 nav: {
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    color: 'white',

  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};


export default App
