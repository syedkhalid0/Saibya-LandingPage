import cheerio from 'cheerio';

const Home = ({ filteredHtmlContent }) => (
  <div dangerouslySetInnerHTML={{ __html: filteredHtmlContent }} />
);

export async function getServerSideProps() {
  const res = await fetch('https://relieved-wonders-535034.framer.app/Projects');
  const htmlContent = await res.text();
  
  // Load HTML content using cheerio
  const $ = cheerio.load(htmlContent);
  
  // Remove the div with id "__badge-container"
  $('#__framer-badge-container').remove();
  
  // Get the filtered HTML content
  const filteredHtmlContent = $.html();

  return { props: { filteredHtmlContent } };
}

export default Home;
