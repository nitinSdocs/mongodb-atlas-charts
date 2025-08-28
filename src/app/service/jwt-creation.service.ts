import { Injectable } from '@angular/core';
declare const jwt: any;
@Injectable({
  providedIn: 'root'
})
export class JwtCreationService {
  private payload = {};
  public secret = 'topsecret';
  public options = {
    algorithm: "HS256",
    expiresIn: "1h"
  }
  constructor() { }
  /**
   * Creates a JWT token using the jsonwebtoken UMD library loaded in index.html
   * @param payload The payload object for the JWT
   * @param secret The secret key to sign the JWT
   * @param options Optional signing options
   * @returns The signed JWT token string
   */
  createToken(payload: object, secret: string, options: any): string {
    const jwtLib = (window as any).jwt;
    if(!jwtLib){
      throw new Error("JWT library is not loaded");
    }

    return jwtLib.sign(payload, secret, options);
  }
}
