import { AppConfigClient, CreateHostedConfigurationVersionCommand, type CreateHostedConfigurationVersionCommandInputType, type CreateHostedConfigurationVersionCommandOutputType } from '@aws-sdk/client-appconfig'

export const createHostedConfigurationVersion = async (): Promise<void> => {
  const config = { "key": "value" };
  const configProfileId = 'xd5454p';
  const appId = "ueseu1u";
  const request: CreateHostedConfigurationVersionCommandInputType = {
    ApplicationId: appId,
    Content: JSON.stringify(config),
    ContentType: 'application/json',
    ConfigurationProfileId: configProfileId 
  }

  try {
    const command = new CreateHostedConfigurationVersionCommand(request)
    const client = new AppConfigClient({
      region: 'us-east-1'
    })
    const response: CreateHostedConfigurationVersionCommandOutputType = await client.send(command)
    console.log('Configuration created:', response)
  } catch (error) {
    console.error('Error creating configuration:', error)
  }
}

