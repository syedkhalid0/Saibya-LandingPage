import cheerio from 'cheerio';

const Home = ({ filteredHtmlContent }) => (
  <div dangerouslySetInnerHTML={{ __html: filteredHtmlContent }} />
);

export async function getStaticProps() {
  const res = await fetch('https://particular-action-305279.framer.app');
  const htmlContent = await res.text();
  
  // Load HTML content using cheerio
  const $ = cheerio.load(htmlContent);
  
  // Remove the div with id "__badge-container"
  $('#__framer-badge-container').remove();
  
  // Get the filtered HTML content
  const filteredHtmlContent = $.html();

  return {
    props: { filteredHtmlContent },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
}

export default Home;
