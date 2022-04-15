const mockData = [
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-19T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-19T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-19T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-20T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-20T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-20T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-21T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-21T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-21T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-22T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-23T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200525T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-25T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-25T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-25T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3187238088812000"',
    id: '7e4k9oop7bb86svd42vui37k6o_20220419T150000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA0MTlUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:56:05.000Z',
    updated: '2020-07-01T15:57:24.406Z',
    summary: 'Angular Moscow',
    description:
      'Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.',
    location: 'Moscow, Russia',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2022-04-19T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2022-04-19T18:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '7e4k9oop7bb86svd42vui37k6o',
    originalStartTime: {
      dateTime: '2022-04-19T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '7e4k9oop7bb86svd42vui37k6o@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/fip-gdth-tdu',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/fip-gdth-tdu',
          label: 'meet.google.com/fip-gdth-tdu',
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/fip-gdth-tdu?pin=1369000914291',
          pin: '1369000914291',
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081616684',
          label: '+49 40 8081616684',
          pin: '516915292',
        },
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet',
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      },
      conferenceId: 'fip-gdth-tdu',
      signature: 'AKpSKUuDLLwSkDi6SaVazlItg4sX',
    },
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3187238088812000"',
    id: '7e4k9oop7bb86svd42vui37k6o_20220426T150000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA0MjZUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:56:05.000Z',
    updated: '2020-07-01T15:57:24.406Z',
    summary: 'Angular Moscow',
    description:
      'Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.',
    location: 'Moscow, Russia',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2022-04-26T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2022-04-26T18:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '7e4k9oop7bb86svd42vui37k6o',
    originalStartTime: {
      dateTime: '2022-04-26T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '7e4k9oop7bb86svd42vui37k6o@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/fip-gdth-tdu',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/fip-gdth-tdu',
          label: 'meet.google.com/fip-gdth-tdu',
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/fip-gdth-tdu?pin=1369000914291',
          pin: '1369000914291',
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081616684',
          label: '+49 40 8081616684',
          pin: '516915292',
        },
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet',
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      },
      conferenceId: 'fip-gdth-tdu',
      signature: 'AKpSKUuDLLwSkDi6SaVazlItg4sX',
    },
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3187238088812000"',
    id: '7e4k9oop7bb86svd42vui37k6o_20220503T150000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA1MDNUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:56:05.000Z',
    updated: '2020-07-01T15:57:24.406Z',
    summary: 'Angular Moscow',
    description:
      'Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.',
    location: 'Moscow, Russia',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2022-05-03T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2022-05-03T18:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '7e4k9oop7bb86svd42vui37k6o',
    originalStartTime: {
      dateTime: '2022-05-03T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '7e4k9oop7bb86svd42vui37k6o@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/fip-gdth-tdu',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/fip-gdth-tdu',
          label: 'meet.google.com/fip-gdth-tdu',
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/fip-gdth-tdu?pin=1369000914291',
          pin: '1369000914291',
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081616684',
          label: '+49 40 8081616684',
          pin: '516915292',
        },
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet',
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      },
      conferenceId: 'fip-gdth-tdu',
      signature: 'AKpSKUuDLLwSkDi6SaVazlItg4sX',
    },
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3187238088812000"',
    id: '7e4k9oop7bb86svd42vui37k6o_20220510T150000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA1MTBUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:56:05.000Z',
    updated: '2020-07-01T15:57:24.406Z',
    summary: 'Angular Moscow',
    description:
      'Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.',
    location: 'Moscow, Russia',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2022-05-10T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2022-05-10T18:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '7e4k9oop7bb86svd42vui37k6o',
    originalStartTime: {
      dateTime: '2022-05-10T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '7e4k9oop7bb86svd42vui37k6o@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/fip-gdth-tdu',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/fip-gdth-tdu',
          label: 'meet.google.com/fip-gdth-tdu',
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/fip-gdth-tdu?pin=1369000914291',
          pin: '1369000914291',
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081616684',
          label: '+49 40 8081616684',
          pin: '516915292',
        },
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet',
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      },
      conferenceId: 'fip-gdth-tdu',
      signature: 'AKpSKUuDLLwSkDi6SaVazlItg4sX',
    },
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3187238088812000"',
    id: '7e4k9oop7bb86svd42vui37k6o_20220517T150000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA1MTdUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:56:05.000Z',
    updated: '2020-07-01T15:57:24.406Z',
    summary: 'Angular Moscow',
    description:
      'Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.',
    location: 'Moscow, Russia',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2022-05-17T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2022-05-17T18:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '7e4k9oop7bb86svd42vui37k6o',
    originalStartTime: {
      dateTime: '2022-05-17T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '7e4k9oop7bb86svd42vui37k6o@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/fip-gdth-tdu',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/fip-gdth-tdu',
          label: 'meet.google.com/fip-gdth-tdu',
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/fip-gdth-tdu?pin=1369000914291',
          pin: '1369000914291',
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081616684',
          label: '+49 40 8081616684',
          pin: '516915292',
        },
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet',
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      },
      conferenceId: 'fip-gdth-tdu',
      signature: 'AKpSKUuDLLwSkDi6SaVazlItg4sX',
    },
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3187238088812000"',
    id: '7e4k9oop7bb86svd42vui37k6o_20220524T150000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA1MjRUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:56:05.000Z',
    updated: '2020-07-01T15:57:24.406Z',
    summary: 'Angular Moscow',
    description:
      'Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.',
    location: 'Moscow, Russia',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2022-05-24T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2022-05-24T18:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '7e4k9oop7bb86svd42vui37k6o',
    originalStartTime: {
      dateTime: '2022-05-24T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '7e4k9oop7bb86svd42vui37k6o@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/fip-gdth-tdu',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/fip-gdth-tdu',
          label: 'meet.google.com/fip-gdth-tdu',
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/fip-gdth-tdu?pin=1369000914291',
          pin: '1369000914291',
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081616684',
          label: '+49 40 8081616684',
          pin: '516915292',
        },
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet',
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      },
      conferenceId: 'fip-gdth-tdu',
      signature: 'AKpSKUuDLLwSkDi6SaVazlItg4sX',
    },
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3187238088812000"',
    id: '7e4k9oop7bb86svd42vui37k6o_20220531T150000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA1MzFUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:56:05.000Z',
    updated: '2020-07-01T15:57:24.406Z',
    summary: 'Angular Moscow',
    description:
      'Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.',
    location: 'Moscow, Russia',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2022-05-31T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2022-05-31T18:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '7e4k9oop7bb86svd42vui37k6o',
    originalStartTime: {
      dateTime: '2022-05-31T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '7e4k9oop7bb86svd42vui37k6o@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/fip-gdth-tdu',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/fip-gdth-tdu',
          label: 'meet.google.com/fip-gdth-tdu',
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/fip-gdth-tdu?pin=1369000914291',
          pin: '1369000914291',
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081616684',
          label: '+49 40 8081616684',
          pin: '516915292',
        },
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet',
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      },
      conferenceId: 'fip-gdth-tdu',
      signature: 'AKpSKUuDLLwSkDi6SaVazlItg4sX',
    },
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
];

export { mockData };
