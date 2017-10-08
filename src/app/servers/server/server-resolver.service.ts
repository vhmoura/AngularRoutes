import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "app/servers/servers.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ServerResolver implements Resolve<{id: number, name: string, status: string}>{
   constructor(private serversService: ServersService){}
   
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { id: number; name: string; status: string; } | Observable<{ id: number; name: string; status: string; }> | Promise<{ id: number; name: string; status: string; }> {
     return this.serversService.getServer(+route.params['id']);   
    }

}