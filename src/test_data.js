export const USERS = [
  {
    _id: 'ME',
    username: 'me',
  },
  {
    _id: 'JOHN',
    username: 'john',
  },
  {
    _id: 'DAISY',
    username: 'daisy',
  },
  {
    _id: 'BOB',
    username: 'bob',
  },
  {
    _id: 'JESS',
    username: 'jess',
  },
];

export const FRIENDSHIPS = [
  {
    requester_id: 'ME',
    target_id: 'JOHN',
    status: 'accepted',
  },
  {
    requester_id: 'DAISY',
    target_id: 'ME',
    status: 'accepted',
  },
  {
    requester_id: 'ME',
    target_id: 'BOB',
    status: 'pending',
  },
  {
    requester_id: 'JESS',
    target_id: 'ME',
    status: 'pending',
  },
  {
    requester_id: 'JESS',
    target_id: 'BOB',
    status: 'accepted',
  },
];

export const MESSAGES = [
  {
    text: 'sup john?',
    convo_id: 'ME_JOHN',
    sender_id: 'ME',
    receiver_id: 'JOHN',
    strand_id: 'ME_JOHN_0',
    time_sent: new Date('2017-11-21 00:00:00+00:00'),
    time_saved: new Date('2017-11-21 00:00:01+00:00'),
    time_read: new Date('2017-11-21 00:02:00+00:00'),
    addressed: true,
  },
  {
    text: 'oh, hey me',
    convo_id: 'ME_JOHN',
    sender_id: 'JOHN',
    receiver_id: 'ME',
    strand_id: 'ME_JOHN_0',
    time_sent: new Date('2017-11-21 00:03:00+00:00'),
    time_saved: new Date('2017-11-21 00:03:01+00:00'),
    time_read: new Date('2017-11-21 00:03:05+00:00'),
    addressed: true,
  },
  {
    text: 'the celtics are dope',
    convo_id: 'ME_JOHN',
    sender_id: 'JOHN',
    receiver_id: 'ME',
    strand_id: 'ME_JOHN_1',
    time_sent: new Date('2017-11-21 00:03:02+00:00'),
    time_saved: new Date('2017-11-21 00:03:03+00:00'),
    time_read: new Date('2017-11-21 00:03:05+00:00'),
    addressed: false,
  },
  // TODO: more messages for this convo
  //       - another thats not addressed
  //       - no strand
];
