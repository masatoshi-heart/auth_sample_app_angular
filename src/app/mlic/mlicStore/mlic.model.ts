import { ID } from '@datorama/akita';

export interface Mlic {
  id: ID;
  cpid: string;
  svid: string;
  svnm: string;
  stat: string;
  lisu: number;
  exdt: Date;
}

export function createMlic(params: Partial<Mlic>): Mlic {
  return {
    id: params.id,
    cpid: params.cpid,
    svid: params.svid,
    svnm: params.svnm,
    stat: params.stat,
    lisu: params.lisu,
    exdt: params.exdt
  } as Mlic;
}
