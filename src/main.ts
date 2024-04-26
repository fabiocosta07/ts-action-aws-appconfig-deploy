import * as core from '@actions/core'
import { createHostedConfigurationVersion } from './aws-appconfig/create-config-version'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const configPath: string = core.getInput('configPath')

    createHostedConfigurationVersion(configPath)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
