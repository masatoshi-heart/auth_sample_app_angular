import { ID } from "@datorama/akita";

export interface Mlic {
  id?: ID;
  cpid: string;
  svid: string;
  svnm: string;
  stat: string;
  lisu: number;
  exdt?: Date;
}
