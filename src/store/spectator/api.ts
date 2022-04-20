import { createApi } from '@reduxjs/toolkit/dist/query/react';
import {
  IGetDriversInfo,
  IGetSessionInfo,
  IGetVehicleInfo,
  r3e,
} from '../../tools/r3e';

export enum RaceRoomApiKeys {
  GET_DRIVERS_INFO = 'getDriversInfo',
  GET_DRIVER_INFO = 'getDriverInfo',
  GET_VEHICLE_INFO = 'getVehicleInfo',
  GET_PIT_INFO = 'getPitInfo',
  GET_PTP_INFO = 'getPushToPassInfo',
  GET_SESSION_INFO = 'getSessionInfo',
}

export const raceRoomApi = createApi({
  reducerPath: 'raceRoomApi',
  baseQuery: (args: RaceRoomApiKeys) => {
    return {
      data: r3e[args](),
    };
  },

  endpoints: (build) => ({
    getDriversInfo: build.query<IGetDriversInfo, RaceRoomApiKeys>({
      query: (arg) => arg,
    }),
    getDriverInfo: build.query<IGetDriversInfo, RaceRoomApiKeys>({
      query: (arg) => arg,
    }),
    getVehicleInfo: build.query<IGetVehicleInfo, RaceRoomApiKeys>({
      query: (arg) => arg,
    }),
    getSessionInfo: build.query<IGetSessionInfo, RaceRoomApiKeys>({
      query: (arg) => arg,
    }),
  }),
});

export const {
  useGetDriversInfoQuery,
  useGetDriverInfoQuery,
  useGetVehicleInfoQuery,
  useGetSessionInfoQuery,
} = raceRoomApi;
