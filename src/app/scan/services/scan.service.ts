import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Scan} from "../models/scan.interface";
import {DeviceDetectorService} from 'ngx-device-detector';

@Injectable()
export class ScanService {

  private readonly URL = '/api';

  constructor(
    private http: HttpClient,
    private deviceService: DeviceDetectorService,
  ) {
  }

  public recordScan(code: string, url: string): Observable<Scan> {
    const scanModelBody = {
      code,
      url,
      os: this.deviceService.os,
      deviceType: this.getDeviceType(),
      device: this.deviceService.device,
      browser: this.deviceService.browser,
    }

    return this.http.post<Scan>(this.URL + '/scan', scanModelBody);
  }

  private getDeviceType(): 'mobile' | 'tablet' | 'desktop' | undefined {
    if (this.deviceService.isMobile()) return 'mobile';
    if (this.deviceService.isTablet()) return 'tablet';
    if (this.deviceService.isDesktop()) return 'desktop';
    return undefined;
  }
}
