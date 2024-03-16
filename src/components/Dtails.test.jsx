import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Details from './Details';

const mockStore = configureStore([]);

describe('Details Component', () => {
  it('matches snapshot when data is available', () => {
    const store = mockStore({
      details: {
        data: {
          list: [
            {
              main: {
                aqi: 2,
              },
              components: {
                CO: 1,
                NO2: 2,
                PM2_5: 5,
              },
            },
          ],
        },
      },
    });

    const location = {
      search: '?lat=12&lon=34&countryName=SampleCountry',
    };

    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details location={location} />
        </BrowserRouter>
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
