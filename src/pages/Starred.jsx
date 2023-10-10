import { useStarredShows } from '../lib/useStarredShows';

const Starred = () => {
  const [starredShows] = useStarredShows();

  return <div>starred Page, starred {starredShows.length}</div>;
};

export default Starred;
