import {
  AppConfigClient,
  CreateHostedConfigurationVersionCommand,
  type CreateHostedConfigurationVersionCommandInputType,
  type CreateHostedConfigurationVersionCommandOutputType
} from '@aws-sdk/client-appconfig'
import fs from 'fs'

export const createHostedConfigurationVersion = async (
  configPath: string
): Promise<void> => {
  const configProfileId = 'xd5454p'
  const appId = 'ueseu1u'

  // Check if the file exists
  if (fs.existsSync(configPath)) {
    // Read the content of the file
    const data = fs.readFileSync(configPath, 'utf8')
    console.log(`Content of config: ${data}`)

    const request: CreateHostedConfigurationVersionCommandInputType = {
      ApplicationId: appId,
      Content: data,
      ContentType: 'application/json',
      ConfigurationProfileId: configProfileId
    }

    try {
      const command = new CreateHostedConfigurationVersionCommand(request)
      const client = new AppConfigClient({
        region: 'us-east-1'
      })
      const response: CreateHostedConfigurationVersionCommandOutputType =
        await client.send(command)
      console.log('Configuration created:', response)
    } catch (error) {
      console.error('Error creating configuration:', error)
    }
  } else {
    console.log('config not found')
  }
}
