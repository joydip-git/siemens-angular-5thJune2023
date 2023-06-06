import { NgModuleRef, PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

console.log('drama started')
const platformRefObj: PlatformRef = platformBrowserDynamic()
platformRefObj
  .bootstrapModule(AppModule)
  .then(
    (obj: NgModuleRef<AppModule>) => { console.log(obj.instance) },
    (err: Error) => { console.log(err.message) }
  )