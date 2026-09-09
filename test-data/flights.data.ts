export type FlightType = 'oneway' | 'roundtrip' | 'multicity';

export type CabinClass = 'economy' | 'premium_economy' | 'business' | 'first';

export type Airport = {
  code: string;
  name: string;
  city: string;
};

export type PassengerCounts = {
  adults: number;
  children: number;
  infants: number;
};

export type FlightSearchData = {
  flightType: FlightType;
  cabinClass: CabinClass;
  departure: Airport;
  arrival: Airport;
  departureDate: string;
  returnDate?: string;
  passengers: PassengerCounts;
};

export const flightData = {
  baseUrl: 'https://phptravels.net/',

  validAirports: {
    dubai: {
      code: 'DXB',
      name: 'Dubai International Airport',
      city: 'Dubai'
    },
    newYork: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York'
    },
    london: {
      code: 'LHR',
      name: 'Heathrow Airport',
      city: 'London'
    },
    singapore: {
      code: 'SIN',
      name: 'Singapore Changi Airport',
      city: 'Singapore'
    }
  } satisfies Record<string, Airport>,

  dates: {
    validDeparture: '15-10-2027',
    validReturn: '22-10-2027',
    sameDay: '15-10-2027',
    earlierReturn: '10-10-2027',
    monthBoundaryDeparture: '31-10-2027',
    monthBoundaryReturn: '01-11-2027',
    yearBoundaryDeparture: '31-12-2027',
    yearBoundaryReturn: '01-01-2028',
    empty: '',
    invalidFormat: '2027/10/15',
    impossibleDate: '31-02-2027',
    pastDate: '15-10-2020'
  },

  passengers: {
    default: {
      adults: 1,
      children: 0,
      infants: 0
    },
    minimum: {
      adults: 1,
      children: 0,
      infants: 0
    },
    validFamily: {
      adults: 2,
      children: 1,
      infants: 1
    },
    maximumCandidate: {
      adults: 9,
      children: 9,
      infants: 9
    },
    zero: {
      adults: 0,
      children: 0,
      infants: 0
    },
    negative: {
      adults: -1,
      children: -1,
      infants: -1
    },
    invalidText: {
      adults: Number.NaN,
      children: Number.NaN,
      infants: Number.NaN
    }
  } satisfies Record<string, PassengerCounts>,

  validSearches: {
    oneWay: {
      flightType: 'oneway',
      cabinClass: 'economy',
      departure: {
        code: 'DXB',
        name: 'Dubai International Airport',
        city: 'Dubai'
      },
      arrival: {
        code: 'JFK',
        name: 'John F. Kennedy International Airport',
        city: 'New York'
      },
      departureDate: '15-10-2027',
      passengers: {
        adults: 1,
        children: 0,
        infants: 0
      }
    },
    roundTrip: {
      flightType: 'roundtrip',
      cabinClass: 'business',
      departure: {
        code: 'LHR',
        name: 'Heathrow Airport',
        city: 'London'
      },
      arrival: {
        code: 'SIN',
        name: 'Singapore Changi Airport',
        city: 'Singapore'
      },
      departureDate: '15-10-2027',
      returnDate: '22-10-2027',
      passengers: {
        adults: 2,
        children: 0,
        infants: 0
      }
    }
  } satisfies Record<string, FlightSearchData>,

  invalidSearches: {
    missingAirports: {
      flightType: 'oneway',
      cabinClass: 'economy',
      departure: null,
      arrival: null,
      departureDate: '15-10-2027',
      passengers: {
        adults: 1,
        children: 0,
        infants: 0
      }
    },
    missingDeparture: {
      flightType: 'oneway',
      cabinClass: 'economy',
      departure: null,
      arrival: {
        code: 'JFK',
        name: 'John F. Kennedy International Airport',
        city: 'New York'
      },
      departureDate: '15-10-2027',
      passengers: {
        adults: 1,
        children: 0,
        infants: 0
      }
    },
    missingArrival: {
      flightType: 'oneway',
      cabinClass: 'economy',
      departure: {
        code: 'DXB',
        name: 'Dubai International Airport',
        city: 'Dubai'
      },
      arrival: null,
      departureDate: '15-10-2027',
      passengers: {
        adults: 1,
        children: 0,
        infants: 0
      }
    },
    missingDepartureDate: {
      flightType: 'oneway',
      cabinClass: 'economy',
      departure: {
        code: 'DXB',
        name: 'Dubai International Airport',
        city: 'Dubai'
      },
      arrival: {
        code: 'JFK',
        name: 'John F. Kennedy International Airport',
        city: 'New York'
      },
      departureDate: '',
      passengers: {
        adults: 1,
        children: 0,
        infants: 0
      }
    },
    invalidRoundTripDates: {
      flightType: 'roundtrip',
      cabinClass: 'economy',
      departure: {
        code: 'DXB',
        name: 'Dubai International Airport',
        city: 'Dubai'
      },
      arrival: {
        code: 'JFK',
        name: 'John F. Kennedy International Airport',
        city: 'New York'
      },
      departureDate: '15-10-2027',
      returnDate: '10-10-2027',
      passengers: {
        adults: 1,
        children: 0,
        infants: 0
      }
    },
    unsupportedAirport: {
      flightType: 'oneway',
      cabinClass: 'economy',
      departure: {
        code: 'XXX',
        name: 'Unsupported Airport',
        city: 'Unsupported City'
      },
      arrival: {
        code: 'JFK',
        name: 'John F. Kennedy International Airport',
        city: 'New York'
      },
      departureDate: '15-10-2027',
      passengers: {
        adults: 1,
        children: 0,
        infants: 0
      }
    }
  },

  boundaryValues: {
    sameAirport: {
      departureCode: 'DXB',
      arrivalCode: 'DXB'
    },
    supportedMaximumSegmentsCandidate: 6,
    extraSegmentCount: 7,
    longAirportLabel: 'International Airport Terminal and Regional Connection Hub with a Very Long Display Name',
    longInput: 'A'.repeat(500),
    whitespaceInput: '   ',
    specialCharacters: `<script>alert('flight-test')</script>`,
    unicodeInput: 'Dubai \u2192 New York \u2708',
    duplicateSearchKey: 'DXB-JFK-15-10-2027-oneway-economy-1'
  },

  mockedResponses: {
    noResults: {
      status: 200,
      body: {
        results: [],
        message: 'No flights found for the selected criteria.'
      }
    },
    serverError: {
      status: 500,
      body: {
        message: 'Flight search temporarily unavailable.'
      }
    },
    unauthorized: {
      status: 401,
      body: {
        message: 'Flight search authorization failed.'
      }
    },
    delayedResponseMs: 3000,
    timeoutResponseMs: 30000
  },

  expectedValidation: {
    missingAirports: 'Please select both departure and arrival airports!'
  }
} as const;

export const validFlightSearches = Object.values(flightData.validSearches);
export const invalidFlightSearches = Object.values(flightData.invalidSearches);
