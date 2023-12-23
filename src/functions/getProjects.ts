import {
  PlaywrightTestOptions,
  PlaywrightWorkerOptions,
  Project,
} from '@playwright/test';
import {Environment, getActiveEnvs} from "./environments";


type ConfigProject = Project<
  PlaywrightTestOptions,
  PlaywrightWorkerOptions
>;
export const SETUP_PROJECT_NAME = '__setup__';
export const TEARDOWN_PROJECT_NAME = '__teardown__';

export function getProjects(): ConfigProject[] {
  const projArr: ConfigProject[] = [
    {
      name: SETUP_PROJECT_NAME,
      testMatch: '**/setup.spec.ts',
      teardown: TEARDOWN_PROJECT_NAME,
    },
    {
      name: TEARDOWN_PROJECT_NAME,
      testMatch: '**/teardown.spec.ts',
      timeout: 0,
      use: {
        actionTimeout: 0,
      },
    },
  ];

  const activeEnvs: Environment[] = getActiveEnvs();
  const items = activeEnvs.map(thisEnv => getItems(thisEnv));
  projArr.push(...items);

  return projArr;

  function getItems(name: Environment): ConfigProject {
    return {
      name,
      use: {
        baseURL: getBaseUrl(name),
        environment: name,
      },
      testMatch: ['**/smoke/**/*.spec.ts', '**/regression/**/*.spec.ts'],
      dependencies: [SETUP_PROJECT_NAME],
    };
  }

  function getBaseUrl(env: Environment) {
  switch (env) {
    case 'prod':
      return 'https://app.goacmecorp.com';
    case 'local':
      return 'https://app.local-env.goacmecorp.com';
    default:
      return `https://app.${env}.goacmecorp.com`;
  }
}
}

