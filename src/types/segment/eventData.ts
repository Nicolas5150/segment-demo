export type EventData = {
  type: string;
  event: string;
  properties: {
    category: string;
    title: string;
    uuid: string;
  };
};

export type EventDataResponse = {
  cursor: {
    url: string;
    has_more: false;
    limit: number;
  };
  data: EventData[];
};
