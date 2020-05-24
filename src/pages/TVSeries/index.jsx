import React from 'react';
import Layout from '../../components/Layout';
import Schema from '../../components/Schema';
import Button from '../../components/Button';

const MockTVShow = {
  name: 'Stranger Things',
  url: 'https://www.netflix.com/br-en/title/80057281',
  description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
  contentRating: '16',
  awards: "This nostalgic nod to '80s sci-fi and horror classics has earned 31 Emmy nominations, including two for Outstanding Drama.",
  dateCreated: '2016-7-15',
  genre: 'TV Shows',
  image: 'https://occ-0-1567-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYhLL5gljcxmR7_m1_tDlDDOTHUqUkfljeFTqGBocXFSVjrSdfOlDvHjNC1ihd7XUxM_E3_ZPwl1nsJ18vTd4spFwmbn.jpg?r=c17',
  numberOfSeasons: 3,
};

function TVSeries() {
  const {
    name,
    url,
    description,
    contentRating,
    genre,
    image,
    dateCreated,
    awards,
    startDate,
    numberOfSeasons,
  } = MockTVShow;
  return (
    <Layout back>
      <h1>TVSeries</h1>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button href={url} target="_blank">
        Watch
      </Button>
      <img src={image} alt={name} />
      <Schema
        type="TVSeries"
        url={url}
        contentRating={contentRating}
        name={name}
        description={description}
        genre={genre}
        image={image}
        dateCreated={dateCreated}
        awards={awards}
        numberOfSeasons={numberOfSeasons}
        startDate={startDate}
      >
        <div
          name="trailer"
          type="VideoObject"
          schema={[
            {
              name: 'Stranger Things 3 (Trailer)',
              description: "Your favorite characters are older and wiser -- and they're facing a summer they'll never forget. Welcome home to Hawkins, Indiana.",
              thumbnailUrl: 'https://occ-0-1567-1123.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQPP_FPLki7rQGZEdmTflpatgX7Sau1hM7afYMhWfMmPJSo9nZe42kgnu0o79TsRAgFcBO-NnLAQHZMjFcKWH4BLnv6l1T0V4zIB3f7wSlRfGuX2.jpg?r=b5c',
              duration: 'PT2M43S',
              contentUrl: 'https://occ-0-1567-1123.1.nflxso.net/so/soa7/709/1895677709.mp4?v=1',
              uploadDate: '2019-03-20T12:00:00.000Z',
            },
            {
              name: 'Stranger Things 2 (Trailer)',
              description: 'Strange visions return to the town of Hawkins just in time for Halloween. And the scary thing is: No one knows how to stop them.',
              thumbnailUrl: 'https://occ-0-1567-1123.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYrDePlecNMQJyBAbaDiG1f5TaHBjAubr8HkvcXT5npiTKeR0Gp9jnabvOahLcqJ7UUQP6b0pRqTNr8uQTaYuaNe6pGcBQgh02lEer9Rrib6SH1I.jpg?r=f31',
              duration: 'PT2M45S',
              contentUrl: 'https://occ-0-1567-1123.1.nflxso.net/so/soa1/723/591525723.mp4?v=1',
              uploadDate: '2017-10-13T13:00:00.000Z',
            },
          ]}
        />
        <div
          name="actors"
          type="Person"
          schema={[
            { name: 'Winona Ryder' },
            { name: 'David Harbour' },
            { name: 'Finn Wolfhard' },
            { name: 'Millie Bobby Brown' },
            { name: 'Gaten Matarazzo' },
            { name: 'Caleb McLaughlin' },
            { name: 'Noah Schnapp' },
          ]}
        />
        <div
          name="creator"
          type="Person"
          schema={[
            { name: 'The Duffer Brothers' },
          ]}
        />
        <div
          name="director"
          type="Person"
          schema={[]}
        />
      </Schema>
    </Layout>
  );
}

export default TVSeries;
