export interface Scan {
  url: string;
  code: string;
  data: ScanData[];
}

export interface ScanData {
  os: string;
  date: string;
  device: string;
  browser: string;
  deviceType: string;
}
