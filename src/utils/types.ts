export interface IpInfo {
    ip: string;
    city: string;
    country: string;
    timezone: {
        id: string;
        utc: string;
    };
    connection: {
        isp: string;
    },
};
  