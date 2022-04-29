import { createApi } from '@reduxjs/toolkit/dist/query/react';
import {
  IGetDriversInfo,
  IGetSessionInfo,
  IGetVehicleInfo,
  IUserInfo,
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
    getDriversInfo: build.query<IGetDriversInfo, void>({
      query: () => RaceRoomApiKeys.GET_DRIVERS_INFO,
    }),
    getDriverInfo: build.query<IGetDriversInfo, void>({
      query: () => RaceRoomApiKeys.GET_DRIVER_INFO,
    }),
    getVehicleInfo: build.query<IGetVehicleInfo, void>({
      query: () => RaceRoomApiKeys.GET_VEHICLE_INFO,
    }),
    getSessionInfo: build.query<IGetSessionInfo, void>({
      query: () => RaceRoomApiKeys.GET_SESSION_INFO,
    }),
    getUserInfo: build.query<IUserInfo, number>({}),
  }),
});

export const {
  useGetDriversInfoQuery,
  useGetDriverInfoQuery,
  useGetVehicleInfoQuery,
  useGetSessionInfoQuery,
} = raceRoomApi;
