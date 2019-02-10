import { AudioDemo } from "./main-view-model";

export function pageLoaded(args) {
  const page = args.object;
  page.bindingContext = new AudioDemo(page);
}
