export interface IBestLapInfo {
  valid: boolean;
  sector1: number;
  sector2: number;
  sector3: number;
}

export interface IFlagInfo {
  black: number;
  blue: number;
  yellow: number;
  causedYellow: boolean;
}

export interface IScoreInfo {
  positionOverall: number;
  positionClass: number;
  positionRaceGridClass: number;
  laps: number;
  distanceTravelled: number;
  currentLapTime: number;
  bestLapInfo: IBestLapInfo;
  distanceDiff: number;
  timeDiff: number;
  lapDiff: number;
  flagInfo: IFlagInfo;
  status: number;
}

export interface IDriversInfo {
  name: string;
  slotId: number;
  portalId: number;
  teamId: number;
  classId: number;
  manufacturerId: number;
  liveryId: number;
  performanceIndex: number;
  mandatoryPitstopPerformed: number;
  scoreInfo: IScoreInfo;
}

export interface IGetDriversInfo {
  driversInfo: IDriversInfo[];
}

export interface IGetVehicleInfo {
  slotId: number;
  rpm: number;
  gear: number;
  speed: number;
  drsLeft: number;
  drsTotal: number;
  drsEnabled: boolean;
}

export interface IDamage {
  engine: number;
  transmission: number;
  frontAero: number;
  rearAero: number;
}

export interface IGetPitInfo {
  slotId: number;
  inPitlane: boolean;
  isPitting: boolean;
  numPitstops: number;
  servedMandatoryPitstop: boolean;
  tyreType: string;
  damage: IDamage;
}

export interface IGetPushToPassInfo {
  slotId: number;
  allowed: boolean;
  active: boolean;
  amountLeft: number;
  amountTotal: number;
  durationTimer: number;
  waitTimer: number;
}

export interface ICurrentLapInfo {
  valid: boolean;
  sector1: number;
  sector2: number;
  sector3: number;
}

export interface ILastTenLapsInfo {
  valid: boolean;
  sector1: number;
  sector2: number;
  sector3: number;
}

export interface IGetExtendedInfo {
  slotId: number;
  currentSector: number;
  currentLapInfo: ICurrentLapInfo;
  lastTenLapsInfo: ILastTenLapsInfo[];
}

export interface IBestLapInfo2 {
  valid: boolean;
  sector1: number;
  sector2: number;
  sector3: number;
}

export interface IGetSessionInfo {
  type: string;
  phase: string;
  timeTotal: number;
  timeLeft: number;
}

export interface IWeatherInfo {
  ambientTemp: number;
  trackTemp: number;
  windSpeed: number;
  conditions: string;
  forecast: string;
}

export interface IGetEventInfo {
  serverName: string;
  metric: boolean;
  trackId: number;
  trackName: string;
  layoutId: number;
  layoutName: string;
  length: number;
  weatherInfo: IWeatherInfo;
}

export interface IBase {
  name: string;
  slotId: number;
  portalId: number;
  teamId: number;
  classId: number;
  manufacturerId: number;
  liveryId: number;
  performanceIndex: number;
  mandatoryPitstopPerformed: number;
  scoreInfo: IScoreInfo;
}

export interface IVehicleInfo {
  slotId: number;
  rpm: number;
  gear: number;
  speed: number;
  drsLeft: number;
  drsTotal: number;
  drsEnabled: boolean;
}

export interface IPitInfo {
  slotId: number;
  inPitlane: boolean;
  isPitting: boolean;
  numPitstops: number;
  servedMandatoryPitstop: boolean;
  tyreType: string;
  damage: IDamage;
}

export interface IP2pInfo {
  slotId: number;
  allowed: boolean;
  active: boolean;
  amountLeft: number;
  amountTotal: number;
  durationTimer: number;
  waitTimer: number;
}

export interface IExtendedInfo {
  slotId: number;
  currentSector: number;
  currentLapInfo: ICurrentLapInfo;
  lastTenLapsInfo: ILastTenLapsInfo[];
}

export interface IDriver {
  base: IBase;
  vehicleInfo: IVehicleInfo;
  pitInfo: IPitInfo;
  p2pInfo: IP2pInfo;
  extendedInfo: IExtendedInfo;
  events: IEvent[];
  updated: number;
}

export interface IEvent {
  slotId: number;
  type: number;
  reason: number;
  updated: number;
}

export interface IResult {
  name: string;
  portalId: number;
  teamId: number;
  classId: number;
  manufacturerId: number;
  liveryId: number;
  positionOverall: number;
  positionClass: number;
  finishStatus: string;
  totalTime: number;
  lapsBehind: number;
  penaltyTime: number;
  penaltyWeight: number;
  bestLapInfo: IBestLapInfo;
  isFastest: boolean;
  teamPortal: string;
  countryCode: string;
  countryName: string;
}

export interface IRaceResults {
  Results: IResult[];
}

interface ISlotSelection {
  slotId: number;
}

export type RequestPoolKeys =
  | 'vehicleInfo'
  | 'pitInfo'
  | 'ptpInfo'
  | 'extendedInfo'
  | 'driverInfo'
  | 'driversInfo'
  | 'sessionInfo'
  | 'eventInfo'
  | 'resultsUpdate'
  | 'eventOccurred';

export const r3e = (function r3eBridge() {
  const getRequestPool = (() => {
    const requestPool: Record<RequestPoolKeys, Record<number, any>> = {
      vehicleInfo: {},
      pitInfo: {},
      ptpInfo: {},
      extendedInfo: {},
      driverInfo: {},
      driversInfo: [],
      sessionInfo: [],
      eventInfo: [],
      resultsUpdate: [],
      eventOccurred: [],
    };

    return {
      driverInfo: function getdriverInfoPool(data: ISlotSelection) {
        if (!requestPool.driverInfo[data.slotId]) {
          requestPool.driverInfo[data.slotId] = [];
        }
        return requestPool.driverInfo[data.slotId];
      },
      vehicleInfo: function getVehicleInfoPool(data: ISlotSelection) {
        if (!requestPool.vehicleInfo[data.slotId]) {
          requestPool.vehicleInfo[data.slotId] = [];
        }
        return requestPool.vehicleInfo[data.slotId];
      },
      pitInfo: function getPitInfoPool(data: ISlotSelection) {
        if (!requestPool.pitInfo[data.slotId]) {
          requestPool.pitInfo[data.slotId] = [];
        }
        return requestPool.pitInfo[data.slotId];
      },
      ptpInfo: function getPtpInfoPool(data: ISlotSelection) {
        if (!requestPool.ptpInfo[data.slotId]) {
          requestPool.ptpInfo[data.slotId] = [];
        }
        return requestPool.ptpInfo[data.slotId];
      },
      extendedInfo: function getExtendedInfo(data: ISlotSelection) {
        if (!requestPool.extendedInfo[data.slotId]) {
          requestPool.extendedInfo[data.slotId] = [];
        }
        return requestPool.extendedInfo[data.slotId];
      },
      driversInfo: () => requestPool.driversInfo,
      sessionInfo: () => requestPool.sessionInfo,
      eventInfo: () => requestPool.eventInfo,
      resultsUpdate: () => requestPool.resultsUpdate,
      eventOccurred: () => requestPool.eventOccurred,
    };
  })();

  // Expose endpoint that game can call
  (window as any).communicator = (type: RequestPoolKeys, data: any) => {
    if (!getRequestPool[type]) {
      return;
    }

    const requestPool = getRequestPool[type](data);
    if (!requestPool) {
      return;
    }
    for (const callback of requestPool) {
      callback(data);
    }

    if (!requestPool.persistent) {
      requestPool.length = 0;
    }
  };

  function get<T>(opts: {
    requiresArguments?: boolean;
    callId: string;
    poolId: RequestPoolKeys;
  }): () => Promise<T> {
    return (args?: any) => {
      return new Promise((resolve) => {
        const pool = getRequestPool[opts.poolId](args);
        pool.push(resolve);

        const isFetching = pool.length > 1;
        if (isFetching) {
          return;
        }

        r3e.gameClient(
          null,
          JSON.stringify({
            [opts.callId]: args || {},
          }),
        );
      });
    };
  }

  const set = (opts: { call: string }) => {
    return (args?: any) => {
      if (!r3e.gameClient) {
        return;
      }

      r3e.gameClient(
        null,
        JSON.stringify({
          [opts.call]: args || {},
        }),
      );
    };
  };

  const cameraChanger = (cameraId: string) => {
    return (slotId: number | string) => {
      r3e.gameClient(
        null,
        JSON.stringify({
          ChangeCamera: {
            slotId,
            camera: cameraId,
          },
        }),
      );
    };
  };

  const listener = (opts: { pool: RequestPoolKeys; persistent: boolean }) => {
    return function listeners(callback: any) {
      //param is never really used just so Ts doesn't cry
      const pool = getRequestPool[opts.pool]({ slotId: 0 });

      // Set property on array so it doesn't get cleared
      pool.persistent = true;
      pool.push(callback);
    };
  };

  return {
    getVehicleInfo: get<IGetVehicleInfo>({
      callId: 'GetVehicleInfo',
      poolId: 'vehicleInfo',
      requiresArguments: true,
    }),
    getPitInfo: get<any>({
      callId: 'GetPitInfo',
      poolId: 'pitInfo',
      requiresArguments: true,
    }),
    getPushToPassInfo: get<IGetPushToPassInfo>({
      callId: 'GetPtpInfo',
      poolId: 'ptpInfo',
      requiresArguments: true,
    }),
    getExtendedInfo: get<IGetExtendedInfo>({
      callId: 'GetExtendedInfo',
      poolId: 'extendedInfo',
      requiresArguments: true,
    }),
    getDriversInfo: get<IGetDriversInfo>({
      callId: 'GetDriversInfo',
      poolId: 'driversInfo',
    }),
    getDriverInfo: get<IGetDriversInfo>({
      callId: 'GetDriverInfo',
      poolId: 'driverInfo',
      requiresArguments: true,
    }),
    getSessionInfo: get<IGetSessionInfo>({
      callId: 'GetSessionInfo',
      poolId: 'sessionInfo',
    }),
    getEventInfo: get<IGetEventInfo>({
      callId: 'GetEventInfo',
      poolId: 'eventInfo',
    }),
    showCursor: set({
      call: 'ShowCursor',
    }),
    waitOnResults: set({
      call: 'WaitForMe',
    }),
    goToNextEvent: set({
      call: 'Proceed',
    }),
    exit: set({
      call: 'Exit',
    }),
    setCamera: {
      nosecam: cameraChanger('nosecam'),
      cockpit: cameraChanger('cockpit'),
      swingman: cameraChanger('swingman'),
      onboard: cameraChanger('onboard'),
      trackside: cameraChanger('trackside1'),
      onboard1: cameraChanger('onboard_1'),
      onboard2: cameraChanger('onboard_2'),
      frontCam: cameraChanger('front_cam'),
      rearCam: cameraChanger('rear_cam'),
      flFront: cameraChanger('fl_front'),
      frFront: cameraChanger('fr_front'),
      rlRear: cameraChanger('rl_rear'),
      rrRear: cameraChanger('rr_rear'),
      rlFront: cameraChanger('rl_front'),
      rrFront: cameraChanger('rr_front'),
      exhaust: cameraChanger('exhaust'),
      wing: cameraChanger('wing'),
      tv: cameraChanger('1_tv'),
      action: cameraChanger('2_action'),
      heli: cameraChanger('3_heli'),
      static: cameraChanger('4_static'),
    },
    on: {
      resultsUpdate: listener({
        pool: 'resultsUpdate',
        persistent: true,
      }),
      eventOccurred: listener({
        pool: 'eventOccurred',
        persistent: true,
      }),
    },
    gameClient: (window as any).gameClient,
  };
})();
