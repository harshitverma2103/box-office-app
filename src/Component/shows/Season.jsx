const Season = ({ seasons }) => {
  return (
    <div>
      <p>Seasons in total: {seasons.length}</p>

      <p>
        Episode in total:{' '}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>

      <div>
        {seasons.map(season => (
          <div key={season.id} className="season-item">
            <p>Season {season.number}</p>
            <p>Episodes: {season.episodeOrder}</p>
            <div>
              Aired: {season.premiereDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Season;
