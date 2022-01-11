import styled from 'styled-components';

interface FeaturesProps {
  complete: boolean;
}

export default function ArticleRow({ complete }: FeaturesProps) {
  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  function getCurrentMonthName(d: Date) {
    var t = new Date(d);
    return monthNames[t.getMonth()];
  }

  let curDay = new Date().getDate();
  let curMonth = getCurrentMonthName(new Date());

  let curDayString = curDay < 10 ? '0' + curDay : curDay.toString();

  console.log(curDayString);

  var quoteSource =
    'http://harekrishnacalendar.com/wp-content/uploads/2012/09/Srila-Prabhupada-Quotes-For-Month-' +
    curMonth +
    '-' +
    curDayString +
    '.png';

  console.log(quoteSource);

  return (
    <Container className={`${complete && 'complete'}`}>
      <Article key='Like us on Facebook'>
        <Title>Like us on Facebook</Title>

        <Box>
          <a href='#'>
            <iframe
              src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FISKCONMetpally%2F&tabs=timeline&width=340&height=240px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2170915606566536'
              width='360'
              height='240px'
              style={{
                border: 'none',

                overflow: 'hidden',

                borderRadius: '5px',
              }}
              scrolling='no'
              frameBorder='0'
              allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
            ></iframe>
          </a>
        </Box>
      </Article>

      <Article key='Prabhupada Daily Quote'>
        <Title>Prabhupada Daily Quote</Title>

        <Box>
          <img
            id='quoteImage'
            src={quoteSource}
            alt=''
            style={{
              height: '240px',

              borderRadius: '5px',
            }}
          />{' '}
        </Box>
      </Article>

      <Article key='Temple Daily Schedule'>
        <Title>Temple Daily Schedule</Title>

        <Box>
          <div
            style={{
              borderRadius: '5px',

              fontSize: '14px',

              border: 'solid 1px',

              padding: '0.5rem',

              fontWeight: 600,
            }}
          >
            04:30 AM - Mangala Arati
            <br />
            05:05 AM - Tulsi Arati
            <br />
            05:15 AM - Japa (Chanting)
            <br />
            07:15 AM - Darshan Arati
            <br />
            07:25 AM - Gurupuja
            <br />
            08:00 AM - Srimad Bhagavatam Class
            <br />
            12:00 PM - Vaikalika Arati
            <br />
            06:30 PM - Sandhya Arati
            <br />
            08:00 PM - Shayana Arati
            <br />
            08:15 PM - Temple Closes
            <br />
          </div>{' '}
        </Box>
      </Article>
    </Container>
  );
}

const Container = styled.ul`
  background: ${(props) => props.theme.colors.white};
  list-style: none;

  gap: 5.6rem;
  text-align: center;
  background: transparent;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    li:last-of-type {
      grid-column: 1 /3;
    }

    &.complete {
      li:last-of-type {
        grid-column: unset;
      }
    }
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);

    li:last-of-type {
      grid-column: unset;
    }
  }
`;

const Article = styled.li`
  color: ${(props) => props.theme.colors.black};
`;

const Title = styled.h3`
  margin: 4rem 0 1.6rem;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 139%;
`;

const Box = styled.div`
  border-radius: 5px;
  border: solid 1px;
  text-align: center;
  max-height: 340px;
  width: 100%;
`;
