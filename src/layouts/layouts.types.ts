export enum AppLayoutsEnum {
    default = "default",
    onBoard = "onBoard",
    news = "news",
}
  
export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
    default: "AppLayoutDefault.vue",
    onBoard: "AppLayoutOnboard.vue",
    news: "AppLayoutNews.vue",
};
