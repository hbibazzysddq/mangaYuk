
import Header from '@/components/Header';
import MangaList from '../components/MangaList';


const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=8`
  );
  const TopManga = await response.json();

  return (
    <div>
       <Header title={'Paling Populer'} linkhref={'/populer'} linktitle={'L ihat semua'}/>
        <MangaList  api={TopManga} />
    </div>
  );
};

export default Home;
