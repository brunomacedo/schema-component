import React from 'react';
import Layout from '../../components/Layout';
import Schema from '../../components/Schema';
import Button from '../../components/Button';

const MockMovie = {
  name: 'The Platform',
  url: 'https://www.netflix.com/title/81128579',
  contentRating: 'TV-MA',
  description: 'A slab of food descends floor by floor in a prison. The inmates above eat heartily, leaving those below starving and desperate. A rebellion is imminent.',
  genre: 'International Movies',
  image: 'https://occ-0-2219-37.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABY6XHvQ5ZvMDRAcrmAbih1jU_j6EpzlTx8XgNQ4ZWjhQgpRc5j6p1zHnTHPlddEbqKi9MYct8ESGYIglHqlcEMpzVgL8.jpg?r=112',
  dateCreated: '2020-3-20',
};

function Movie() {
  const {
    name,
    url,
    contentRating,
    description,
    genre,
    image,
    dateCreated,
  } = MockMovie;
  return (
    <Layout back>
      <h1>Movie</h1>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button href={url} target="_blank">
        Watch
      </Button>
      <img src={image} alt={name} />
      <Schema
        type="Movie"
        name={name}
        url={url}
        contentRating={contentRating}
        description={description}
        genre={genre}
        image={image}
        dateCreated={dateCreated}
      >
        <div
          name="trailer"
          type="VideoObject"
          schema={[
            {
              name: 'Trailer: The Platform',
              description: 'Two prisoners per floor, wondering how much they’ll get to eat that day. One inmate has had enough of not getting enough. It’s time to send a message.',
              thumbnailUrl: 'https://occ-0-2219-37.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ_UQtCFFQhrZrXKKJ4KDu6_tsDVwX6JomRoTJuMpVKKsk37Fpgl4yiKjKn2dgr6yjB_AUVPJJ8d0eAB5oXDNiOX38lRWAErj0bncK-zl_2BbLsO.jpg?r=8d7',
              duration: 'PT1M42S',
              contentUrl: 'https://occ-0-2219-37.1.nflxso.net/so/soa5/911/37595911.mp4?v=1',
              uploadDate: '2020-03-06T16:00:00.000Z',
            },
          ]}
        />
        <div
          name="actors"
          type="Person"
          schema={[
            { name: 'Iván Massagué' },
            { name: 'Antonia San Juan' },
            { name: 'Zorion Eguileor' },
            { name: 'Emilio Buale' },
            { name: 'Alexandra Masangkay' },
          ]}
        />
        <div
          name="director"
          type="Person"
          schema={[
            { name: 'Galder Gaztelu-Urrutia' },
          ]}
        />
      </Schema>
    </Layout>
  );
}

export default Movie;
