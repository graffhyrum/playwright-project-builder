export const ENVIRONMENT = [
  'prod',
  'preprod',
  'stage',
  'release',
  'local',
] as const;
export type Environment = (typeof ENVIRONMENT)[number];

import {Environment} from "./environments";


export const getActiveEnvs: () => Environment[] = () => {
  const res: Environment[] = [];
  const envs: Array<{
    key: Environment;
    envVar: string | undefined;
  }> = [
    {key: 'prod', envVar: process.env.PW_PROD},
    {key: 'preprod', envVar: process.env.PW_PREPROD},
    {key: 'release', envVar: process.env.PW_RELEASE},
    {key: 'stage', envVar: process.env.PW_STAGE},
    {key: 'local', envVar: process.env.PW_LOCAL},
  ];
  for (const thisEnv of envs) {
    if (thisEnv.envVar?.toLowerCase() === 'true') res.push(thisEnv.key);
  }
  return res;
};
