// src/utils/webhookService.ts
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1369945605153230901/L5gz-zQIgkL2CQtOxhiUu2xLx8OnaVkVvYEVjXsJpwiqaKWhtPpxA5bB9Qe4n8kwWoFw';

export const sendToWebhook = async (message: string): Promise<void> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `**New message from Yuko's Portfolio:**\n\`\`\`\n${message}\n\`\`\``,
        username: 'Portfolio Contact',
        avatar_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
        embeds: [
          {
            title: '💬 New Portfolio Contact',
            description: message,
            color: 0x000000,
            timestamp: new Date().toISOString(),
            footer: {
              text: 'Yuko\'s Portfolio Website',
              icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png'
            },
            fields: [
              {
                name: '📅 Sent At',
                value: new Date().toLocaleString(),
                inline: true
              },
              {
                name: '🌐 Source',
                value: 'Portfolio Website',
                inline: true
              }
            ]
          }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log('Message sent successfully to Discord webhook');
  } catch (error) {
    console.error('Error sending message to webhook:', error);
    throw error;
  }
};