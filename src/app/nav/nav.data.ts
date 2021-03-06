export interface SideNavItems {
  text: string;
  link: string;
  authority: string;
  description: string;
}

export const sidNavItems: SideNavItems[] = [
  {
    text: 'Top',
    link: '',
    authority: 'general',
    description: "トップ画面に移動"
  },
  {
    text: 'To Do',
    link: 'dd',
    authority: 'general',
    description: "ToDoリストに移動"
  },
  {
    text: 'Pibot',
    link: 'pibot',
    authority: 'admin',
    description: "Pibotテーブルに移動"
  },
  {
    text: 'Chart',
    link: 'chart',
    authority: 'admin',
    description: "グラフへ移動"
  },
  {
    text: 'User',
    link: 'user',
    authority: 'general',
    description: "Userデータの表示"
  },
  {
    text: 'UIテスト',
    link: 'sitem',
    authority: 'general',
    description: "Userデータの表示"
  },
  {
    text: 'MLIC',
    link: 'mlic',
    authority: 'general',
    description: "MLICの表示"
  },
]
